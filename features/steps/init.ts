import { After, AfterAll, BeforeAll, setDefaultTimeout, setWorldConstructor, Before } from "@cucumber/cucumber"
import { ChildProcess, spawn } from "child_process";
import { setPort } from "../support/Browser"
import World from "../support/World";
import os from 'os';

setDefaultTimeout(60000);
setWorldConstructor(World);

let nextJS:ChildProcess;

BeforeAll(() => new Promise<void>(resolve => {
  const cmd = `${os.type()}`.includes('Windows') ? 'npm.cmd' : 'npm';
  nextJS = spawn(cmd, ['run', 'dev', '--', '-p', '0']);

  nextJS.stdout!.on('data', data => {
    const response = `${data}`;
    if (response.includes("started server on")) {
      setPort(response.substring(response.lastIndexOf(":") + 1));
      resolve();
    }
  });

  nextJS.stderr!.on('data', data => {
    console.log(`stdout: ${data}`);
  });
}));

AfterAll(() => {
  if (`${os.type()}`.includes('Windows')) {
    spawn("taskkill", ["/pid", `${nextJS.pid}`, '/f', '/t']);
  } else {
    nextJS.kill('SIGINT');
  }
});

Before(async function(this:World) {
  await this.startBrowser();
});

After(async function(this:World) {
  await this.browser.close();
});