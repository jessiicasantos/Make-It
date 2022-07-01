let products = [
    {
        id: 'LipTint Boca Rosa',
        category: 'LipTint',
        image: '../img/liptint_boca-rosa.jpg',
        price: `R$${parseInt(10)},00`,
    },
    {
        id: 'LipTint Maçã Do Amor',
        category: 'LipTint',
        image: '../img/liptint_maca-amor.jpg',
        price: `R$${parseInt(10)},00`,
    },    
    {
        id: 'Rímel-id',
        image: '../img/rimel_the-colossal.jpg',
        category: 'Rímel',
        price: 'R$20,00',
    },
    {
        id: 'Sombra-id',
        image: '../img/sombra_colourful.jpg',
        category: 'Sombra',
        price: 'R$45,00',
    },
    {
        id: 'Blush-id',
        image: '../img/blush_pink.png',
        category: 'Blush',
        price: 'R$31,00',
    },
    {
        id: 'Lapis-id',
        image: '../img/lapis-olho_payot.png',
        category: 'Lápis',
        price: 'R$6,00',
    }
];

export function getProducts() {
    // console.log(products);
    return products;
};