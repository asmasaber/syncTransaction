
const run = (gen, ... args) => {
  let ltObj = gen( ... args);
  iterat(ltObj);
}

const iterat = (obj, data) => {
  const result = obj.next(data);
  if(!result.done)
      iterat(obj, result.value)
}
  
export default run;