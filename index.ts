let myName: string = "Yailin Perez";
console.log (myName);

let favNumber: any | number = "9";
console.log (favNumber);

let animals: string = "Conejo, Perro, Gato, Serpiente, Rana, Pez, Ballena, Caballo, Gallina, Oveja ";
console.log (animals);


interface organization {
    name: string;
    slogan: string
    numOfWorkers: any | number;
    attentionSchedule: number | string ;
    remotework: string; 
    creationDate: number | string;
    workSaturday: string; 
}

let data: organization []
    data=[{
        name:"Company",
        slogan:"Todo se puede",
        numOfWorkers:"900",
        attentionSchedule:"Monday to Friday from 8:00am to 5:00pm",
        remotework: "yes", 
        creationDate: "2019/05/04",
        workSaturday: "yes", 
    }
]


interface student {
    namex: string;
    age: any;
    class: string;
    address: number | string ;
}

let info: student []
    info=[{
        namex:"Camila",
        age:"15",
        class:"English",
        address:"Carrera 27 no.34-82 Poblado",   
            } 
]



function areaOfCircle(radio:number):number{
    return Math.PI*(radio*radio);
}
console.log(areaOfCircle)


function sum(num1: number, num2: number, num3:number): number {
    return num1 + num2 + num3;
}
let suma: number = 0;
suma = sum(7,9,12)
console.log(suma);


function sayHelloFunction(name:string):string{
    return "hola soy "+name;
}
console.log(sayHelloFunction)
