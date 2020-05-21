/*variables
condicionales
metodos
ciclos
filtros
clases
objetos
arreglos*/
/*
Arrays:
	se definen con [];
	tienen Items
		los items tienen índices que incian en 0
	para acceder a un índice usamos [],
	por ejemplo myArray[0] accede al índice 0 de myArray

Objetos
	se definen con {};
	tienen llaves:valores,
		las llaves son el nombre de alguna característica del objeto
		los valores definen dicha característica del objeto
	para acceder a una llave usamos .
	por ejemplo myObject.name accede al valor de la llave "name" de "myObject"
*/
var database = firebase.database();
var coffeeReference = database.ref('/cofeeCollection');

var coffeeObject = {}

coffeeReference.on('value',(snapshot)=>{
	let refContent = snapshot.val()
	console.log(snapshot.val())
	//printCatalog(refContent);
	printCoffeeCatalog(refContent);
})//Listener que ejecuta codigo al cambiar el Val() del snapshot (contenido del la REF)

const loadCoffe = (name,price,description)=>{
	coffeeReference.set({name,price,description})
}//Se sobreescriben todos los elementos del nodo de Ref con JSON

/*const uploadCoffe = (name,price,description)=>{
	coffeeReference.push({name,price,description})
}// Adiciona un elemento al nodo de Ref mediante JSON
*/

const uploadCoffe = (coffeeObject)=>{
	coffeeReference.push(coffeeObject)
}// Adiciona un elemento al nodo de Ref mediante el objeto


const printCatalog = (refContent)=>{
	$.each(refContent,(key,value)=>{
		console.log(`El Key es ${key} y el valor es ${value}`)
		console.log(`Los datos son: ${value.name} ${value.price} ${value.description}`)
	})
}//Imprime el Val por cada uno de los "Item" del JSON

const printCoffeeCatalog = (refContent)=>{
	$("#coffee-wrapper").empty();
	$.each(refContent,(key,value)=>{
		$("#coffee-wrapper").append(`
			<div class="col-12 col-lg-4">
				<div class="card mt-3">
					<img class="w-100 d-block mx-auto" src="" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${value.name}</h5>
						<ul class="list-group">
						  <li class="list-group-item">${value.description}</li>
						  <li class="list-group-item text-right font-italic font-weight-bold text-success">${value.price}</li>
						</ul>
					</div>
				</div>
			</div>
		`)

	})
}//X cada Item imprime los Val en las Card de HTML

$("#save-coffee-btn").click(()=>{
	getCoffeeData();
	uploadCoffe(coffeeObject);
})//Func para guardar en la coleccion, con el listener del id button

/* Tambien es correcto
$("#save-coffee-btn").on("click",()=>{
	getCoffeeData()
	uploadCoffe(objectCoffee)
})
*/

const getCoffeeData = ()=>{
	let name = $("#coffee-name").val();
	let price = $("#coffee-price").val();
	let description = $("#coffee-description").val();
	let imgSrc = $("#coffee-img").val();

	coffeeObject = {name,price,description}
}//los datos del objeto deben ser = a como se llama en la coleccion


/* Tambien es correcto guardar el objeto propiedad x propiedad
const getCoffeeData = () =>{
	let coffeeName = $("#coffee-name").val();
	let coffeDescription = $("#coffee-description").val();
	let coffeePrice = $("#coffee-price").val();
	let coffeeImg = $("#coffee-img").val();

	coffeeObject = {};
	coffeeObject.name = coffeeName;
	coffeeObject.description = coffeDescription;
	coffeeObject.price = coffeePrice;
	coffeeObject.img = coffeeImg;

	printCoffeeCatalog();
}*/

var newPostKey = firebase.database().ref().child('/cofeeCollection/cafe1').push().key;

/*const removeCoffee = ()=>{
	firebase.database()
	let refCoffee = database.ref('/cofeeCollection/cafe1.key');
	//console.log(`${refCoffee.key} ${refCoffee.key.value.name} `)
	console.log(refCoffee)
//console.log(`Los datos son: ${value.name} ${value.price} ${value.description}`)

	/*$.each(refContent,(key,value)=>{
		console.log(`El Key es ${key} y el valor es ${value}`)
		console.log(`Los datos son: ${value.name} ${value.price} ${value.description}`)
	})*/


	//refCoffee.removeValue()
	//coffeeReference.ref(key).removeValue()

//}// Elimina un nodo completo segun el key



// SESION 3

var foo = "Hola de nuevo Koders";
var bar = 29
var coffeeArray = [
	"Capuccino",
	"Latte",
	"Americano"
]
var pricesArray=[
		20,
		30,
		25.5
	]

var productsArray=[
	{
		name:"Capuccino",
		description:"Some Text",
		price:"$20.00"
	},
	{
		name:"Latte",
		description:"Some Text",
		price:"$20.00"
	}
]
/*var coffeeObject = {
	name:"Capuccino",
	description:"Some Text",
	price:"$20.00"
}*/

var koderObject = {
	name:"Israel",
	edad:29,
	matrícula:"ASDF5QWE5X",
	sexo:"M",
	intereses:[
		"Ajedrez",
		"Starcraft",
		"Música"
	],
	dirección:{
		calle:"Campo Horcón",
		colonia:"Reynosa",
		numero:"589"
	}
}

var someArray = [
	"item 1",
	"item 2",
	"item 3",
	"item 4",
	"item 5",
	"item 6",
	"item 7",
]

var coffeeArray = [{
	coffeeName:"Capuccino Late",
	coffeeDescription:"Some text",
	coffeePrice:"$23.00",
	coffeeImg:"img/cafe1.jfif"
},
{
	coffeeName:"Capuccino ",
	coffeeDescription:"Some text",
	coffeePrice:"$23.00",
	coffeeImg:"img/cafe2.jfif"
},
{
	coffeeName:"Americano",
	coffeeDescription:"Some text",
	coffeePrice:"$23.00",
	coffeeImg:"img/cafe3.jfif"
}];

const sumaDosNumeros = (datoA,datoB) => {
	console.log(datoA + datoB)
}

const printFullName = (nombre,apaterno,amaterno) => {
	userName = nombre;
	userLastname = apaterno;
	userMothername = amaterno;
	console.log("mi nombre es "+userName+" "+userLastname+" "+userMothername)
}

const printVariables = ()=>{
	console.log(userName);
	console.log(userLastname);
	console.log(userMothername)
	console.log(someArray);
}

const getUserData = () => {
	let userName = $("#user-name").val();
	let userLastName = $("#user-lastname").val();
	let userMotherName = $("#user-mothername").val();
	console.log(userName + " " + userLastName + " " + userMotherName);
	let userObject = {};
	userObject.name = userName;
	userObject.lastName = userLastName;
	userObject.motherName = userMotherName;
	console.log(userObject);
}

// Event Listener click de un Elemento
//1er forma correcta
$("#save-button").click( () => {
	getUserData();
})
// 2da forma correcta
/*
$("#save-button").on("click", () => {
	getUserData();
})
*/
//3ra forma correcta - para varios eventos
/*
$("#save-button").on({click: () => {
	getUserData();
}
})
*/

// Otro Listener keypress
//1er forma correcta
/*$("#user-name").on("keypress",(event)=>{
	console.log($(event.target).val())
})
*/
// 2da forma correcta
$("#user-name").keypress((event) =>{
	console.log($(event.target).val());
});

//Otro ejemplo
var petsArray = [];
const addPet = (name,breed,color)=>{
	let objectPet = {name,breed,color};
	petsArray.push(objectPet);
	printPets()
}
const printPets = ()=>{
	petsArray.forEach((item)=>{
		console.log("Hola soy " + item.name + ", soy un" + item.breed + " y mi color es "+ item.color )
	})
}
