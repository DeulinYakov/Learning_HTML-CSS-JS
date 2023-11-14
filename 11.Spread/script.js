
const user = { 
    name: "Andrey", 
    age: 35, 
    car: { 
        mark: "Subaru", 
        model: "Forester", 
        engine: 2.0 
    } 
} 

const newUser = { 
    ...user,  
    name: "Egor", 
    car: { 
        ...user.car, 
        engine:3.0 
    } 
    
} 
console.log(newUser) 


// 2 ds 

tr = { 
    a: 3, 
    b:4, 
    c:5 
} 
const {a ,b, c} = tr; 
const isRightTriangle = a*a + b*b === c*c  
? true 
: false 

console.log(isRightTriangle) 

const area = (isRightTriangle)  
? (0.5 * a * b)  
: null;  
console.log(area);