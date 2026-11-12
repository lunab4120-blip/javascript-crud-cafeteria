const menuCafeteria = [
    "Café Espresso Clásico",
    "Café Doble Ristretto",
    "Café Americano Intenso",
    "Café Espresso Macchiato",
    "Café Cappuccino Italiano",
    "Café Latte Saborizado Vainilla",
    "Café Flat White Doble Shot",
    "Café Mocha ChocoBlanco",
    "Café Cold Brew Artesanal 24hs",
    "Té Hebras Verde Matcha Premium",
    "Té Hebras Chai Latte Especiado",
    "Té Hebras Earl Grey Bergamota",
    "Submarino Chocolate Artesanal",
    "Medialuna de Manteca Tradicional",
    "Medialuna de Grasa Crocante",
    "Croissant Relleno Nutella",
    "Croissant Jamón y Queso Horneado",
    "Tostado Mixto en Pan de Campo",
    "Avocado Toast Huevo Poché",
    "Muffin de Arándanos y Limón",
    "Muffin Chocolate con Chips",
    "Scone Tradicional de Vainilla",
    "Tarta Carrot Cake Nuez",
    "Tarta Cheesecake de Frutos Rojos",
    "Tarta Lemon Pie Merengue",
    "Alfajor Artesanal de Dulce de Leche",
    "Cookie de Avena y Pasas",
    "Cookie Red Velvet Rellena",
    "Jugo Natural Naranja Exprimido",
    "Jugo Licuado Frutilla y Banana"
];

const menuTemporada = [   
    "Smoothie Menta y Limón", 
    "Frappé Caramelo Crocante", 
    "Waffle con Dulce de Leche"
];

let nuevoMenu = []


// agregar productos
function agregarAlFinal(item) {
    menuCafeteria.push(item)
};

function agregarAlInicio(item) {
    menuCafeteria.unshift(item)
    
};

function insertarEnPosicion(index, item) {
    menuCafeteria.splice(2, 0, item)
    
};




//modificar un  producto 
function actualizarProducto(nombreBuscado, nuevoNombre){
    
    const posicion = menuCafeteria.findIndex((producto) => (producto.toLowerCase() === nombreBuscado.toLowerCase()));
    console.log(posicion)
    if (posicion === -1){
        console.warn("producto no encontrado")
    }
    else{
        menuCafeteria.splice(posicion, 0, nuevoNombre)
    };
    
};


// eliminar productos
function eliminarUltimo(){
    menuCafeteria.pop()

};

function eliminarPrimero(){
    menuCafeteria.shift()

};

function eliminarPorNombre (itemEliminar){
    const posicion = menuCafeteria.findIndex((producto) => (producto.toLowerCase() === itemEliminar.toLowerCase()));
    
    if (posicion === -1){
        console.warn("producto no encontrado")
    }
    else{
        menuCafeteria.splice(posicion, 1)
    };
};


function buscarPrimerMatch(termino){
    const resultadoBusqueda = menuCafeteria.find((producto) => 
        (producto.toLowerCase().includes(termino.toLowerCase())));

    if (resultadoBusqueda === undefined){
        console.log("no hay conicidencias")
    }
    else{
        console.log(resultadoBusqueda)
    }
    
};


function filtrarPorCategoria(categoria){

    const resultadoFiltrado = menuCafeteria.filter((producto) => (producto.toLowerCase().includes(categoria.toLowerCase())))

    if (resultadoFiltrado === undefined){
        console.log("no hay conicidencias")
    }
    else{
        console.log(resultadoFiltrado)
    }
};


function ordernarCarta(modo){
    if(modo === "asce"){
        menuCafeteria.sort()
    }
    else if(modo === "desc"){
        menuCafeteria.sort().reverse()
    }
    else{
        console.warn("modo de orden equivocado")
    }
};


const copiaDeSeguridad = menuCafeteria.slice();

const ArraysConcatenados = menuCafeteria.concat(menuTemporada);

function arreglosConcatenados() {
    
    const arraysStrigns = ArraysConcatenados.reduce((acumulador, producto) =>{
        
        if(acumulador === ""){
            return acumulador + producto
        }
        else{
            return acumulador + ", " + producto;
        }
    }, "")

    console.log(arraysStrigns)
    
}


function mostrarMenu() {

    // genera los codigos del menú 
    function generarCodigosMenu() {
        nuevoMenu = menuCafeteria.map((item, index) => {
            
            return(`Item-${index + 101} - ${item}`);
        });
    };
    
    
    generarCodigosMenu()
    
    //mostrar el menú 
    function menu() {
        nuevoMenu.forEach((item, index) => 
            console.log(item));
    };
    
    menu();
    
};

mostrarMenu();


function mostrarSome(palabra){
    const existeCoincidencia = menuCafeteria.some((coincide) => coincide.toLowerCase().includes(palabra.toLowerCase()));

    if (existeCoincidencia){
        console.log(`existe un item con la palabra ${palabra}`)
    } else{
        console.log("no hay coincidencias")
    }   
}


function mostrarEvery (){
    const poseCuatroLetras = menuCafeteria.every((producto) => producto.length >= 4)

    if(poseCuatroLetras){
        console.log("todos los elementos poseen más de cuatro caráteres")
    } else{
        console.log("no todos los elementos poseen más de cuatro caráteres")
    }
}