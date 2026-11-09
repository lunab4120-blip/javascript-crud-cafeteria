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


function agregarAlFinal(item) {
    menuCafeteria.push(item)
};

function agregarAlInicio(item) {
    menuCafeteria.unshift(item)
    
};

function insertarEnPosicion(index, item) {
    menuCafeteria.splice(2, 0, item)
    
};

agregarAlFinal("Brownie de Chocolate");

agregarAlInicio("Café Bombón");

insertarEnPosicion(2, "Licuado de Durazno");


function actualizarProducto(nombreBuscado, nuevoNombre){
    
    const posición = menuCafeteria.findIndex((producto) => (producto.toLocaleLowerCase() === nombreBuscado.toLocaleLowerCase()));
    
    if (posición === -1){
        console.warn("producto no encontrado")
    }
    else{
        menuCafeteria.splice(posición, 1, nuevoNombre)
    };
    
};
actualizarProducto("café espresso clásico", "Café Espresso Vainilla");


function eliminarUltimo(){
    menuCafeteria.pop()

};
eliminarUltimo();

function eliminarPrimero(){
    menuCafeteria.shift()

};
eliminarPrimero();

function eliminarPorNombre(itemEliminar){
    const posición = menuCafeteria.findIndex((producto) => (producto.toLocaleLowerCase() === itemEliminar.toLocaleLowerCase()));
    
    if (posición === -1){
        console.warn("producto no encontrado")
    }
    else{
        menuCafeteria.splice(posición, 1)
    };
};
eliminarPorNombre("Café Doble Ristretto");


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

buscarPrimerMatch("café");

function filtrarPorCategoria(categoria){

    const resultadoFiltrado = menuCafeteria.filter((producto) => (producto.toLowerCase().includes(categoria.toLowerCase())))

    if (resultadoFiltrado === undefined){
        console.log("no hay conicidencias")
    }
    else{
        console.log(resultadoFiltrado)
    }
};

filtrarPorCategoria("café");






function generarCodigosMenu() {
    nuevoMenu = menuCafeteria.map((item, index) => {

        return(`Item-${index + 101} - ${item}`);
    });
};

generarCodigosMenu()


//mostrar el menú 
function mostrarMenu() {
    nuevoMenu.forEach((item, index) => 
        console.log(item));
};

mostrarMenu()