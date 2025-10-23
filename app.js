const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const write

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if (err){
//                 reject(err)
//                 return
//             } else {
//                 resolve(data)
//             }
//     })
//     })
// }

// getText('./ontent/first.txt')
// .then((result)=> console.log(result))
// .catch((err)=>{console.log(err)})


const start = async() =>{
    try{
        const result = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',
        `This is awesome: ${result} , ${second}`)
        console.log(result, second)
    } catch(error){
        console.log(error)
    }
}

start()
.then(result=>{console.log(result)})
.catch((err)=>{console.log(err)})


//Promises help deal with asynchorous code in a better way
//It can handle multiple asynchorous operations at the same time