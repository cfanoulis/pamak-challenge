const ch = require("chalk");
const i = require("inquirer");
const q = [{
 type: 'input',
 name: 'input',
 message: chalk.blue("Enter a number")
}];

i.prompt(q).then(ans => {
    for (let a of ans.input) {
      console.log(chalk.bgGreen(a));
    }
    console.log(chalk.bgWhite("Done"));
});
