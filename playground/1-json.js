
const  fs = require('fs')
/////////////////////////////////////////////////////
// const book = {
//     title: 'HelloWorld',
//     author: 'Naoki',
// }
//
// const bookJSON = JSON.stringify(book)
// //bookJSON is a string no object
// //bookJSON.title will not work, its undefined
// console.log(bookJSON)
//
// const parseData = JSON.parse(bookJSON)
// // console.log(parseData.title)
//
// fs.writeFileSync('1-json.json', bookJSON)
/////////////////////////////////////////////////////
//
//
// //Not returning a string from json file, its a buffer in binary
// //to represent the data
// const dataBuffer = fs.readFileSync('1-json.json')
// //use dataBuffer only return binary data, buffer.toString will return the string
// // console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
//////////////////////////////////////////////////////

//***** How to use json ********************************
//1. Create buffer to read from json file
const dataBuffer = fs.readFileSync('1-json.json')
//2. get the string from buffer to string dataJson
const dataJSON = dataBuffer.toString()
//3. Parse the string to user object
const user = JSON.parse(dataJSON)
//4. Modify the input
user.name = 'Naoki'
user.age = 23
console.log(user)
//5. turn the user back to JSON
const userJSON = JSON.stringify(user)
//6. Write it to json file
fs.writeFileSync('1-json.json', userJSON)
