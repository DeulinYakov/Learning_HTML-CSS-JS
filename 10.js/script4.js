products = [
    {
        position:'Помидор',
        weight: '1кг',
        price: 200,
        selected: true
    },
    {
        position:'Огурец',
        weight: '1кг',
        price: 150,
        selected: true
    },
    {
        position:'Зелень',
        weight: '100г',
        price: 70,
        selected: true
    },
    {
        position:'Лук',
        weight: '1кг',
        price: 60,
        selected: true
    },
    {
        position:'Картошка',
        weight: '1кг',
        price: 40,
        selected: true
    },
    {
        position:'Свекла',
        weight: '1кг',
        price: 30,
        selected: true
    }
]

let totalPrice = products.reduce((total, product) => {
    if (product.selected == true) {
        return total + product.price;
    }
    else {
        return total;
    }
}, 0);

console.log(totalPrice)