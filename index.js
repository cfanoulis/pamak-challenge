const ch = require("chalk");
const i = require("inquirer");
const q = [{
 type: 'input',
 name: 'input',
 message: ch.blue("Enter a number")
}];

i.prompt(q).then(ans => {
  if(isNaN(parseInt(ans.input))) throw "that aint an integer"
    for (let a of ans.input) {
      console.log(a);
    }
    console.log(ch.bgBlue("Done"));
});
