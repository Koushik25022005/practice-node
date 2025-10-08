const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8', (err, result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the: ${first}, ${second}`,
            (err, result) => {
                if (err){
                    condsole.log(err);
                    return;
                } 
                console.log('done with this one');
            }
        )
    })
})
console.log('starting the next one')


//If we dont use the utf coding, then it will load a buffer
//Asynchororus code can do mulitple tasks at the same time
/*we con optimize this code using promises as well async await*/
//Http module is used to set up a web server