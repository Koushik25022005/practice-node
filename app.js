const {readFile} = require('fs')

console.log('started eith the first task')

readFile('./content/first.txt', 'utf8', (err, results) => {
    if (err){
        console.log(err);
        return
    }
    console.log(results)
    console.log('completed first task')
})

console.log('starting next task')