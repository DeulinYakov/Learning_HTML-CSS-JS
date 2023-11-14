products = [
    {
        position:'Помидор',
        weight: '1кг',
        price: 200
    },
    {
        position:'Огурец',
        weight: '1кг',
        price: 150
    },
    {
        position:'Зелень',
        weight: '100г',
        price: 70
    },
    {
        position:'Лук',
        weight: '1кг',
        price: 60
    },
    {
        position:'Картошка',
        weight: '1кг',
        price: 40
    },
    {
        position:'Свекла',
        weight: '1кг',
        price: 30
    }
]
cheque = products.map(product => product.price - (product.price * 0.1))

console.group(cheque)