students = [
    {
        id: 1,
        name: 'Andrey',
        group: 'Isip-9-21'
    },
    {
        id: 2,
        name: 'Nikolai',
        group: 'Pd-9-22'
    },
    {
        id: 3,
        name: 'Vitala',
        group: 'Dk-1-9-23'
    },
    {
        id: 4,
        name: 'Lev',
        group: 'Ibk-9-21'
    },
    {
        id: 5,
        name: 'Pavel',
        group: 'Isip-9-22'
    },
    {
        id: 6,
        name: 'Kiril',
        group: 'Dk-2-9-23'
    },
    {
        id: 7,
        name: 'Igor',
        group: 'R-11-22'
    },
    {
        id: 8,
        name: 'Nikita',
        group: 'D-9-20'
    },
    {
        id: 9,
        name: 'Tolya',
        group: 'I-9-21'
    },
    {
        id: 10,
        name: 'Yana',
        group: 'Isip-9-21'
    },
    {
        id: 11,
        name: 'Konstantin',
        group: 'Isip-9-22'
    },
    {
        id: 12,
        name: 'Ivan',
        group: 'Isip-2-9-23'
    }
]
studentOut = students.find(student => student.group == 'Isip-9-22');
console.log(studentOut)