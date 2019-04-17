
import run from "./transaction"

function* generatorFunc() {
  const x = yield "1st";
  console.log("x >>", x);
  const y = yield "2nd";
  console.log("y >>", y);
  const z = yield "3rd";
  console.log("z >>", z);
  yield ;
}

run(generatorFunc);