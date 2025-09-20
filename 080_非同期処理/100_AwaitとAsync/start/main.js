function sleep(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
      // reject(val);
      // throw new Error("error");
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error();
  return val;
}

init()
  .then((val) => {
    console.log("hello" + val);
  })
  .catch((e) => {
    console.error(e);
  });

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
