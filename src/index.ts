// let age: number =10;
// if(age<50){
//     age+=10;
// }
// console.log(age)
// enum Size {Small , Medium , Large}

// let mySize : Size = Size.Medium;

// console.log(mySize)

//can also gives default number taxYear = 2022 instead of taxYear?:number
// function calculateTax(income:number,taxYear?:number):number{
    
//     if((taxYear||2022) < 2022)
//     return income*1.2;
// return income*1.3;
// }
// calculateTax(10000)

// let employee :{
//     readonly id :number,
//     name:string,
//     retire:(date:Date)=>void
// } = {
//     id:0,
//     name:"abeer",
//     retire:(date:Date)=>{
//         console.log(date)
//     }
// }

//type alias
type Employee ={
    readonly id :Number,
    name:string,
    retire:(data:Date) => void
}

let employee:Employee={
    id:0,
    name:"abeer",
    retire:(date:Date)=>{
        console.log(date)
    }
}

function kgsToLbs(weight:number|string):number{
    if(typeof weight === 'number')
    {
        return weight *2.2;
    }
    else return parseInt(weight);

}

//intersection type

type Dragable={
    drag:()=>void
}
type Resizeable={
    resize:()=>void
}
type UIWidget = Dragable & Resizeable

let TextBox : UIWidget = {
    drag:()=>{},
    resize:()=>{}
}
//Literals

type Quantity = 50 |100;

let quantity : Quantity = 50;

type Metric = 'kg' | 'lbs'

let weigth : Metric = 'lbs'

//NULL values

function great (name:string | null | undefined){
    if(name)
    console.log(name.toUpperCase)
    else
    console.log("hola")
}

great(null)