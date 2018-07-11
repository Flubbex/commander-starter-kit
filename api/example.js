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