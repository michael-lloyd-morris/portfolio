import {
  After,
  AfterAll,
  BeforeAll,
  setDefaultTimeout,
  setWorldConstructor,
  Before,
} from "@cucumber/cucumber";
import { ChildProcess, spawn } from "child_process";
import { setPort, Browser } from "../support/Browser";
import World from "../support/World";
import os from "os";
import readline from "readline";

setDefaultTimeout(60000);
setWorldConstructor(World);

let nextJS: ChildProcess;

const browser = new Browser();

BeforeAll(async () => {
  await browser.init();
  await new Promise<void>((resolve) => {
    const cmd = `${os.type()}`.includes("Windows") ? "npm.cmd" : "npm";
    nextJS = spawn(cmd, ["run", "dev", "--", "-p", "0"]);

    nextJS.stdout!.on("data", (data) => {
      const response = `${data}`;
      if (response.includes("started server on")) {
        setPort(response.substring(response.lastIndexOf(":") + 1));
        resolve();
      }
    });

    nextJS.stderr!.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
  });
});

AfterAll(() => {
  browser.close()
  if (`${os.type()}`.includes("Windows")) {
    spawn("taskkill", ["/pid", `${nextJS.pid}`, "/f", "/t"]);
  } else {
    nextJS.kill("SIGINT");
  }
});

Before(async function (this: World) {
  this.browser = browser;
});

After(async function (this: World) {
  if (process.env.DEBUG_TEST) {
    await waitForPrompt("Paused. Press enter to continue\n\n");
  }
  await this.browser.reset();
});

async function waitForPrompt(prompt: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<void>((resolve) => {
    rl.question(prompt, () => {
      rl.close();
      resolve();
    });
  });
}
