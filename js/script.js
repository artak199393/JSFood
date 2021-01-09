window.addEventListener('DOMContentLoaded', ()=>{
    
    const   tabs = require('./modules/tabs'),
            modal = require('./modules/modal'),
            timer = require('./modules/timer'),
            cards = require('./modules/cards'),
            forms = require('./modules/forms'),
            calc = require('./modules/calc'),
            slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    forms();
    calc();
    slider();
});
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     body:JSON.stringify({name:'Alex'}),
//     headers:{
//         'Content-type':'application/json'
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json));
