/** Scrivere uno script che recupera i tags dall'api, di questi ne prende dal quinto al decimo e dal quindicesimo al ventesimo 
  *  creare un menù dropdown con i 10 tag recuperati e alla selezione di un elemento del menù  
  *  effettua una chiamata all'api (  https://cataas.com/#/  )recuperando un elemento con il tag selezionato 
  *  di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento 
  *  formattati in questo modo "tag1 - tag2 - tag3"*/
 
 const dropDown = document.createElement('select');
 const body = document.querySelector('body');
 body.appendChild(dropDown);


async function getData() {
    let response = await fetch('https://cataas.com/api/tags');
    let result = await response.json();
    /* console.log(result); */
    const array1 = result.slice(5,10);
    const array2 = result.slice(15,20);
    const array3 = [...array1, ...array2];
    /* console.log(array3); */
    

    array3.forEach(element => {
        const option = document.createElement('option');
        option.textContent = element;
        dropDown.appendChild(option);

    });
    dropDown.addEventListener('change', async() => {
        let response = await fetch(`https://cataas.com/cat/${dropDown.value}?json=true`)
        let result =await response.json();
        console.log(result);
        const img = document.createElement('img');
        img.setAttribute('src', `https://cataas.com${result.url}`)
        body.appendChild(img);

        const createTitle = document.createElement('h1');
        createTitle.textContent = dropDown.value;
        body.appendChild(createTitle);
    })
}

getData()