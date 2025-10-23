const EventEmitter = require('events');
/*
on - listen to an event
emit - emit an event
*/ 

const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} with id:${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})


customEmitter.emit('response', 'koushik', 25)