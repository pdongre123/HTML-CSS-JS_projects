// // const charcters=[
// //     {
// //         name:"Krishan Iyer",
// //         height:'168',
// //         mass:'84',
// //         eye_color:'brown',
// //         gender:'male',
// //     },
// //     {
// //         name:"Krishna Gada",
// //         height:'156',
// //         mass:'77',
// //         eye_color:'blue',
// //         gender:'fe-male',
// //     },
// //     {
// //         name:"Ashish Deda",
// //         height:'159',
// //         mass:'66',
// //         eye_color:'brown',
// //         gender:'male',
// //     },
// //     {
// //         name:"Krisha Saudi",
// //         height:'144',
// //         mass:'180',
// //         eye_color:'blue',
// //         gender:'male',
// //     },
// //     {
// //         name:"JD Iyer",
// //         height:'188',
// //         mass:'156',
// //         eye_color:'black',
// //         gender:'male',
// //     },

// // ];



// // // get array names

// // // const names=charcters.map((ch)=>{
// // //     return ch.name;
// // // })

// // //const  names2=charcters.map(ch=>ch.name)
// // //console.log(names2);

// // //get height and name from given array as objects
// // // const propertiesOFCh= charcters.map(ch=>{
// // //     return{
// // //         name:ch.name,
// // //         height:ch.height
// // //     }
// // // })
// // //console.log(propertiesOFCh);

// // //get total height of array

// // //const totalH=charcters.reduce((prevH,char)=>{
// //    // return prevH+Number(char.height);
    
// // //},0);

// // //const totalHeight=charcters.reduce(prevHeight,charcter=>prevHeight+Number(charcter.height));
// // // console.log(totalH);

// // //get greater than mass value from array

// // //const geraterThanMass=charcters.filter((ch)=>{
// //   //  return ch.mass > 100
// // //})

// // //const bigThanMass=charcters.filter(ch=>ch.mass>100);

// // //console.log(geraterThanMass);


// // //get all male charcters from given array

// // // const allMale=charcters.filter((ch)=>{
// // //     return ch.gender=='male'
// // // })

// // //const Maleall=charcters.filter(ch=>ch.gender=='male');


// // // console.log(Maleall);

// // //sort by all gender

// // // const sortByGender=charcters.sort((ch1 ,ch2)=>{
// // //     if (ch1.name < ch2.name) {
// // //         return -1;
// // //       }
// // //       if (ch1.name > ch2.name) 
// // //       {
// // //         return 1;
// // //       }
// // //     return 0
    
// // // })
    
// // // console.log(sortByGender);

// // //does every chacter have mass less than 100

// // //console.log(charcters.every((ch)=>ch.mass>100))

// // const massHun=charcters.every((ch)=>{
// //     return ch.mass>100;
// // })
// // //console.log(massHun);

// // //does every charcter have blue eyes

// // //console.log(charcters.every((ch)=>ch.eye_color=='black-brown'))


// // const blackBrownEyes=charcters.every((ch)=>{
// //     return ch.eye_color=='black'
// // })
// // // console.log(blackBrownEyes);

// // console.log(charcters.some((ch)=>ch.height>100))
// // console.log(charcters.some((ch)=>ch.gender=='male'))



// var square={
//     side:5,
// get area(){
//     // return this.side*this.side;
//     return this.side ** 2;
// }
// }

// square.side=10;
// console.log(square.area);


function stringConcat(separator,...strings){
    let returnVal=" ";
    strings.forEach((string,i)=>{
        if(i==strings.length-1){
            returnVal +=string;
        }
        else{
            returnVal+=string+separator;
        }
    })
    return returnVal;
}
console.log(stringConcat("+","this","is","invalid"));




arr=[1,2,3,4,5,6,7,8];
let one=arr[0];
let two=arr[1];
let three=arr[2];
let last=arr.slice(3);

console.log(arr);





let [first,second,third,...other]=[1,2,3,4,5,6,7,8]

console.log(first);
console.log(second);
console.log(third);
console.log(other);


function matchHouse(step){
    if(step===0){
        return 0;
    }
    else{
        return(step*6)-(step-1);
    }
}
console.log(matchHouse(1));
console.log(matchHouse(4));
console.log(matchHouse(87));
