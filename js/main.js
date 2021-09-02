// abbiamo dei gattini

const cats = [{
    name: 'Adam',
    age: 0.3,
    color: '#00ffff',
    gender: 'male'
  },
  {
    name: 'Emily',
    age: 0.8,
    color: '#f700ff',
    gender: 'female'
  },
  {
    name: 'Willoby',
    age: 1.3,
    color: '#ff6600',
    gender: 'male'
  },
  {
    name: 'Poppy',
    age : 0.2,
    color: '#00ff00',
    gender: 'female'
  },
  {
    name: 'Ciccio',
    age: 0.3,
    color: '#ff6600',
    gender: 'male'
  }
];


// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const container = document.getElementById('container');


// for (let i = 0; i < cats.length; i++) {
//     let element = cats[i];
//     const { color, name } = element;
//     container.innerHTML += `
//     <div>
//         <i class="fas fa-cat" style="color: ${color}">${name}</i>
//     </div>
//     `;
// }

cats.forEach((element) => {
    //console.log(element);
    //console.log(container);
    const { color, name } = element;
    container.innerHTML += `
    <div>
        <i class="fas fa-cat" style="color: ${color}">${name}</i>
    </div>
    `;
});


// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. 
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.


// colori base per i fiocchi
const pink = '#ff00e6';
const blue = '#0084ff';

// usiamo map 
const newCats = cats.map((element) => {
    const opacity = element.age;
    const { name, gender, color, age } = element;

    return {
        // name,
        // gender,
        // color,
        // age,
        ...element,
        ribbon : {
            opacity,
            color: (element.gender === "female") ? pink : blue
        }
    }
});

console.log(newCats);



// Dividiamo i gatti per sesso

const femaleCats = newCats.filter((element) => {
    if (element.gender === "female") {
        return true;
    }
    return false;

    //return element.gender === "female";
});

const maleCats = newCats.filter((element) => {
    if (element.gender === "male") {
        return true;
    }
    return false;

    //return element.gender === "female";
});

//console.log(femaleCats, maleCats);


// Stampare i due gruppi di gatti

const femaleContainer = document.getElementById('female');
const maleContainer = document.getElementById('male');

femaleCats.forEach((element) => {
    femaleContainer.innerHTML += `
    <div>
        <i class="fas fa-cat" style="color: ${element.color}">${element.name}</i>   
        <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity};"></i>
        
    </div>
    `
});

maleCats.forEach((element) => {
    maleContainer.innerHTML += `
    <div>
        <i class="fas fa-cat" style="color: ${element.color}">${element.name}</i>   
        <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity};"></i>
        
    </div>
    `
});



// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e opacità del fiocco per ogni gatto.


const orderedCats = [...femaleCats, ...maleCats];


// creo array con solo fiocco e nome

const catsTarget = orderedCats.map((element) => {
    const { name, color, ribbon } = element;
    return { name, color, ribbon };
});

//console.log(catsTarget);