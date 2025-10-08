const {readFile, writeFile} = require('fs')

console.log('started with the first task')
//CHECK THE FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return
    } else  {
        console.log(result)
        console.log('comnpleted first task')
    }
})
console.log('starting the next task')