const book= {
    tittle: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)

const bookObject = JSON.parse(bookJSON)
console.log(bookObject.author)