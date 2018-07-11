var core = require("commander"),
    all  = require("require-all")
    
core.version('1.0.0')

var util = all(__dirname+"/util"),
    api  = all({ dirname: __dirname+"/api",
                 resolve: function(method){
                    return method(core,util)
                  }
               })
    

core.on('command:*',(commands) => console.log('Unknown command:',commands.join(' ')) )

console.log("Example application")

if (process.argv.length > 2)
  core.parse(process.argv) 
else
  core.outputHelp()