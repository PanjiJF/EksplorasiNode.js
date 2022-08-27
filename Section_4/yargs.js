const yargs = require('yargs')

yargs.version('1.1.0')
yargs.command(
    {
        command: 'add',
        describe:'Add a new note',
        builder:
        {
            title:
            {
                describe: 'Note tittle',
                demandOption: true,
                type: 'string'
            },
            body:
            {
                describe: 'Note Body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv){
            console.log('Tittle:' + argv.tittle)
            console.log('Body: ' + argv.body)
        }
    })
