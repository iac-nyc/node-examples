const fs = require('fs');
//const book = {
//    title: 'Elite Minds',
//    author: 'Dr. Stan Beecham'
//}
//
//const bookJSON = JSON.stringify(book)
//console.log(bookJSON)
//
//
//const parseData = JSON.parse(bookJSON);
//console.log(parseData);
//console.log(parseData.author);
//fs.writeFileSync('1-json.json',bookJSON);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)

data.book.title= "Ego is the Enemy";
data.book.title = "Ryan Holiday";


const newData = JSON.stringify(data);
fs.writeFileSync('1-json.json', newData);
console.log(data.name + ' finished reading '+data.book.title +'\nHis address is planet ',data.planet);
