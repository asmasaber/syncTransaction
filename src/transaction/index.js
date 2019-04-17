const run = (gen, ... args) => {
  let ltObj = gen( ... args);
  iterat(ltObj);
}

const iterat = (obj, data) => {
  const result = obj.next(data);
  if(!result.done) {
    let arg = result.value ;
      if(arg instanceof Promise) {
        arg
        .then(data => iterat(obj, data))
        .catch(error => iterat(obj, error))
      }
      else {
        iterat(obj, arg)
      }
  }
}

export default run;