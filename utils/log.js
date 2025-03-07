const chalk = require("chalk");

module.exports = (message, type) => {
  switch (type) {
    case 'warn':
      console.log(chalk.bold.hex('#FF00FF').bold("[ Error ] » ") + message);
      break;
    case 'error':
      console.log(chalk.bold.hex("#FF00FF").bold("[ Error ] »") + message);
      break;
    default:
      console.log(chalk.bold.hex('#FF0000').bold(type + " » ") + message);
      break;
  }
};

module.exports.loader = (message, type) => {
  switch (type) {
    case "warn":
      console.log(chalk.bold.hex("#ff334b").bold("[ WARN ] » ") + message);
      break;
    case 'error':
      console.log(chalk.bold.hex("#b4ff33").bold("[ ERROR ] » ") + message);
      break;
    default:
      console.log(chalk.bold.hex('#33ffc9').bold("[ KAZ ] » ") + message);
      break;
  }
};
