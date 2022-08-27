const yargs = require('yargs')
const fs = require('fs')

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
        handler(argv) {
            const book= {
                tittle: argv.title,
                author: argv.body
            }
            const bookJSON = JSON.stringify(book)
            const bookObject = JSON.parse(bookJSON)
            console.log('adding :',bookObject.title)
            console.log('by :',bookObject.author)
            fs.writeFileSync('note.txt',bookJSON)
        }
    },
    {
        command: 'remove',
        describe: 'Delete a note',
        handler(){
            try {
                fs.unlinkSync('./note.txt')
                console.log('note.txt removed')
            } catch(err){
                console.error(err)
            }
        }
    }
)
yargs.parse()