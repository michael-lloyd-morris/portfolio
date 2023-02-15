import { AfterAll, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber"
import { ChildProcess, spawn } from "child_process";
import os from 'os';
import { Browser, chromium, Page } from 'playwright';

setDefaultTimeout(60000);

let nextJS:ChildProcess;
let port:string;

BeforeAll(() => new Promise<void>(resolve => {
  nextJS = spawn('npm.cmd', ['run', 'dev', '--', '-p', '0']);

  nextJS.stdout!.on('data', data => {
    const response = `${data}`;
    if (response.includes("started server on")) {
      port = response.substring(response.lastIndexOf(":") + 1);
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