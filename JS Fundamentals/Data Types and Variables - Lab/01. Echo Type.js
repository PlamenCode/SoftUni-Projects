function echoType(parameter) {
  let type = typeof parameter;
  if (type === "string" || type === "number") {
    console.log(type);
    console.log(parameter);
  } else {
    console.log('object')
    console.log(`Parameter is not suitable for printing`);
  }
}
echoType("stringg");
