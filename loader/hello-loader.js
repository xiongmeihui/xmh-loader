const { getOptions } = require("loader-utils");

module.exports = function (source) {
  const options = getOptions(this);

  console.log("--------------------------------------------");
  console.log(options);
  console.log("--------------------------------------------");

  console.log(typeof source);

  return `export default ${JSON.stringify(source)}`; // 返回值
};
