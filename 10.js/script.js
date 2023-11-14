users = [
    {
        id: 1,
        name: 'Andrey',
        data: '01.01.1993'
    },
    {
        id: 2,
        name: 'Nikolai',
        data: '01.01.1993'
    },
    {
        id: 3,
        name: 'Vitala',
        data: '01.01.1993'
    },
    {
        id: 4,
        name: 'Lev',
        data: '01.01.1993'
    },
    {
        id: 5,
        name: 'Pavel',
        data: '01.01.1993'
    },
    {
        id: 6,
        name: 'Kiril',
        data: '01.01.1993'
    }
]
userOut = users.find(user => user.id == 2);
console.log(userOut)