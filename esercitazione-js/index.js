/* const btn = document.querySelector('.random');


async function getCat(){
    let response = await fetch('https://api.thecatapi.com/v1/images/search');
    let result = await response.json();
    console.log(result);
    document.querySelector('img').setAttribute("src", result[0].url);
}



btn.addEventListener('click', getCat); */


/* 1) Recupera con uno script i dati da questa API: https://v2.jokeapi.dev/joke/Programming

1. Ci interessa avere la proprietÃ  Setup e quella Delivery
2. Con questo endpoint: https://v2.jokeapi.dev/joke/Any?amount=10, filtra solamente di categoria Programming */


async function getData() {
    let response = await fetch('https://v2.jokeapi.dev/joke/Programming');
    let result = await response.json();
    
    if(result.setup){
    const setupData = result.setup;
    const body = document.querySelector('body');
    const para = document.createElement('p');
    para.textContent = setupData;
    body.appendChild(para);
    
    const deliveryData = result.delivery;
    const p2 = document.createElement('p');
    p2.textContent = deliveryData;
    body.appendChild(p2);
    }else {
        getData()
    }

   
}

getData() 

async function getJoke() {
    let response = await fetch('https://v2.jokeapi.dev/joke/Any?amount=10');
    let result = await response.json();
    console.log(result);
    
   const programming = result.jokes.filter(obj => {
        result = obj.category === "Programming";
        return result;
    })
    /* console.log(programming);
    const createH2 = document.createElement('h2');
    const proText = programming.setup;
    createH2.textContent = proText;
    const body = document.querySelector('body');
    body.appendChild(createH2); */
    /* programming.forEach(element => {
        const createH2 = document.createElement('h2');
        createH2.textContent = element.joke;
        const body = document.querySelector('body');
        body.appendChild(createH2);
    }); */

    programming.map(e => {
        const createH2 = document.createElement('h2');
        createH2.textContent = e.joke;
        const body = document.querySelector('body');
        body.appendChild(createH2);
    })
    console.log(programming)
    
 }
 getJoke()
