
import run from "./transaction"
const fetch = require("node-fetch");

function* generatorFunc() {
  const x = yield "1st";
  console.log("x >>", x);
  const y = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
  console.log("y >>", y);
  const z = yield console.log("3rd");
  console.log("z >>", z);
  yield ;
}

run(generatorFunc);