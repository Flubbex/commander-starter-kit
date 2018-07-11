# commander-starter-kit
Starting kit for Commander.js applications

## Usage
Creating a new command:

*api/example.js*
```js 
function action(argument, options){
    console.log("Example:",argument)
}
  
module.exports = function(program,utilities)
{
  program
  .command('example [argument]')
  .description('Prints argument to screen')
  .action(action)
}
```

## Dependencies 
- [Commander.js](https://github.com/tj/commander.js/) by [TJ](https://github.com/tj)