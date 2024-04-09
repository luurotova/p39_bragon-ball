const personajes = {
    p0: {
        name: 'goku',
        force: '1'
    },
    p1: {
        name: 'vejeta',
        force: '2'
    }, 
    p2: {
        name: 'picollo',
        force: '3'
    } ,
};

// 1. capturo todo lo necesario
const fightBtn = document.querySelector('.vs__button');
const figterImgLeft = document.querySelector('.game__fighter__in--left');
const figterImgRight = document.querySelector('.game__fighter__in--right');

// 2. lanzar evento click
fightBtn.addEventListener('click', fight);


//3. Definir función
function fight() {
    //Leer 2 propiedades RANDOM del objeto - // Obtener un número random de 0 a 2 y usarlo para acceder al objeto
    const  ObjectKeyL = Object.keys(personajes)[Math.floor(Math.random()*3)];
    const  ObjectKeyR = Object.keys(personajes)[Math.floor(Math.random()*3)];

    // Al leer las props
                     
        //me quedo con el atr. name para crear la url de la foto
        const urlLeft = "img/" +personajes[ObjectKeyL].name +'.webp';
        const urlRight = "img/" +personajes[ObjectKeyR].name +'.webp';
        // me quedo con el atr. force para comparar las fuerzas
        const forceLeft = personajes[ObjectKeyL].force;
        const forceRight = personajes[ObjectKeyR].force;

    // pinto imágenes con createElement
    //Pinto Izq
    const photoLeft = document.createElement('img');
    photoLeft.src = urlLeft;
    figterImgLeft.innerHTML = '';
    figterImgLeft.appendChild(photoLeft);

    //Pinto Der
    const photoRight = document.createElement('img');
    photoRight.src = urlRight;
    figterImgRight.innerHTML = '';
    figterImgRight.appendChild(photoRight);   

    
    figterImgLeft.parentNode.classList.remove('.winner', '.draw');
    figterImgRight.parentNode.classList.remove('.winner', '.draw');
    

        // Comparo fuerzas
        // Al mayor le pinto winner - por style o classList
        if (forceLeft > forceRight){
            figterImgLeft.parentNode.classList.add('.winner');
        }
        // si son iguales pinto draw - por style o classList
        else if (forceLeft < forceRight){
            figterImgRight.parentNode.classList.add('.winner');
        } 
        else {
            figterImgLeft.parentNode.classList.add('.draw');
            figterImgRight.parentNode.classList.add('.draw');
        }

        
    }