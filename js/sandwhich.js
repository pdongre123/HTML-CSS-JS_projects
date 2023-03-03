// // let bread1=prompt("Which bread would you like to have :- ");
// // let veggies1=prompt("What are your favorite veggies");
// // let sauce1=prompt("which sauce would you like to have:- ");

// // function makeSandwich(bread,veggies,sauce){
// //     let sandwich=bread+"bread"+veggies +" "+sauce +" sandwich is ready";
// //     return sandwich;
// // }
// // let vegSandwich=makeSandwich(bread1,veggies1,sauce1);
// // console.log(vegSandwich);

// // var favshow="My Fav show is Shinchan";
// // console.log(favshow[0]);
// // console.log(favshow[favshow.length-1]);
// // console.log(favshow.indexOf("is"));
// // console.log(favshow.slice(5,7));



// // let animal={
// //   name:"COW",
// //   legs:4
// // }
// // console.log(animal);
// // console.log(animal.name);


// // let legsProp="legs"
// // console.log(animal[legsProp]);

// //let selectBooks=["Invisible Man","Positive thinking","home alone","power rangers"];
// // console.log(selectBooks[2]);
// //console.log(selectBooks.splice);

// function addition(a,b){
//   return a+b;
// }
// console.log(addition(4,6));

// function subtraction(a,b){
//   return a-b;
// }
// console.log(subtraction(4,6));


// let num=10;
// let num_1=num;
// num=15;
// console.log(num);
// console.log(num_1);


// let obj={number:20};
// let obj2=obj;
// obj.number=25;
// console.log(obj);
// console.log(obj2);




// const course={
//   title:'JS',
//   enroll(){
//     console.log('you are enrolled');
//   }
// }
// const course_1={...course}
// course_1.title='c++';


// const product={
//   itemName:"Scoppy",
//   price:30,
//   discount:5,
//   itemCode:'P303',
// }

// //factory function


// const product={
//   itemName:"Scoopy",
//   price:30,
//   discount:5,
//   itemCode:'P303',
//   buyProduct(){
//     console.log("How to buy this product");

  //}
// }
// product.buyProduct();

// function createProductDetails(itemName,price,discount,itemCode){
//   return{
//     itemName:itemName,
//     price:price,
//     discount:discount,
//     itemCode:itemCode,
//   }
// }
// const productDetail= createProductDetails("Scoppy",50,5,'P303');




function ProductD(name,code,price,discount){
  this.itemName=name;
  this.itemCode=code;
  this.price=price;
  this.discount=discount;
  this.discountValue=function(){
    return price * discount/100;
  }
}

const ProductDS=new ProductD('Fruit','P302',230,40);

class Product1 {
  constructor(itemName,price,discount,itemCode){
    this.itemCode=itemCode;
    this.itemName=itemName;
    this.price=price;
    this.discount=discount;
  }
}

const pencil= new Product1('p-10','Apsara',30,5)


const Product2=class{
  constructor(itemName,price,discount,itemCode){
    this.itemCode=itemCode;
    this.itemName=itemName;
    this.price=price;
    this.discount=discount;
  }

    get getDiscountValue(){
        return this.discount;
      }
    set setDiscountValue(value){
        this.discount=value;
      }

}
const lens= new Product2('l-200','Titan',50,3500)