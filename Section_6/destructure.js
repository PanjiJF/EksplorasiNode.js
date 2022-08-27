const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
   }
   const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
   }
   transaction('order', product)
const name = 'Andrew'
const age = 27
const user = {
 name,
 age,
 location: 'Philadelphia'
}
console.log(user)