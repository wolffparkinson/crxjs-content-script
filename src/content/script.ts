import { sleep } from "../utils/sleep";

async function run() {
  console.log('Script is loaded');
  await sleep(5000)
  console.log('Slept for 5000ms')
  
}


run();