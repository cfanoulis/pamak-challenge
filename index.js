const ch = require("chalk");
const i = require("inquirer");
const q = [{
 type: 'input',
 name: 'input',
 message: ch.blue("Enter a number")
}];

i.prompt(q).then(ans => {
    for (let a of ans.input) {
      console.log(ch.bgGreen(a));
    }
    console.log(ch.bgWhite("Done"));
});
