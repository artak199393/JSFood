import  tabs from './js/tabs';
import  modal  from  './js/modal';
import  timer  from  './js/timer';
import  cards  from  './js/cards';
import  forms  from  './js/forms';
import  calc  from  './js/calc';
import  slider  from    './js/slider';
import  {openModal}  from  './js/modal';

window.addEventListener('DOMContentLoaded', ()=>{
    
    const modalTimerId = setTimeout(() =>openModal('.modal', modalTimerId),300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', "tabheader__item_active");
    modal('[data-modal]', '.modal');
    timer('.timer', '2021-12-31');
    cards();
    forms('form', modalTimerId);
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
