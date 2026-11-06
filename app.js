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

// mostrar el menú 
function mostrarMenu() {
    menuCafeteria.forEach((item, index) => 
        console.log(`${index + 1} - ${item}`));
};

mostrarMenu()
