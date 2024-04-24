// 1-masala


// function middleNumber(params) {
//     let arr = [...params]
//     let NUMBER = 0
//     let number1 = 0
//     let number2 = 0
//     if(arr.length % 2 == 0){
//         number1 = (arr.length / 2)
//         number2 = (arr.length / 2) - 1
//         NUMBER = (arr[number1] + arr[number2]) / 2
//         return NUMBER
//     }else{
//         NUMBER = (arr.length / 2) - 0.5
//         return (arr[NUMBER]);
//     }
// }
// console.log(middleNumber([1,2,3,4,5]));


// 2-masala 


// let arr = []
// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];
// for(let i = 0; i < products.length; i++){
//     if(products[i].id !== 4){
//         arr.push(products[i])
//     }
// }
// console.log(arr);


// 3-masala 



// 4-masala 

// let  animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let obj = {}
// animals.forEach(item =>{
//     if(obj[item]){
//         obj[item]++
//     }else{
//         obj[item] = 1
//     }
// })
// console.log(obj)



// 5-masala 

// 1-usul  

// function item_box (str){
//    return str.split(" ").map(word => word.length);
   
// }
// let input_str = "Hello world";
// let output = item_box(input_str)
// console.log(output);

// 2-usul 

// function main (str){
//     let words = str.split(" ");
//     let item = [];
//     for(let i = 0; i < words.length; i++){
//         item.push(words[i].length);
//     }
//     return item
// }
// let input_str = "Hello world"
// let output = main(input_str);
// console.log(output)




// 6-masala 

// 1-usul


// function item_box (input){
//     const main = input.split(" ");
//     const part = main.some(main => main === "");
//     return part
// }
// // const input = "salom  dunyo"  ikkilasini uttasida 2 ta prabel bulsa ishlayapti 1 ta busa ishlamayapti
// console.log(item_box(input));


// 2-usul 


// function item_box (input){
//     return input.includes(" ")
// }
// const input = "salom dunyo"
// console.log(item_box(input));

// 7-masala 


// function item_box(obj) {
//     let arr = Object.entries(obj);
//     let main = arr.map(([key, value]) => `${key}${value}`);
    
//     return main;
// }

// console.log(item_box({a: 2, b: 5, c: 7}));


// 8-masala 

// const pupils = [
//     { name: "Elbek", protcent: 95 },
//     { name: "Zafar", protcent: 78 },
//     { name: "Aziz", protcent: 83 },
//     { name: "Jasur", protcent: 88 },
//     { name: "Bobur", protcent: 66 },
//     { name: "Kamron", protcent: 75 }
//   ];
  
//   const examResult = pupils.reduce((acc, pupil) => {
//     if (pupil.protcent >= 80) {
//       acc.passed++;
//     } else {
//       acc.failed++;
//     }
//     return acc;
//   }, { passed: 0, failed: 0 });
  
//   console.log("O'tganlar soni:", examResult.passed);
//   console.log("O'ta olmaganlar soni:", examResult.failed);
  

// 9-masala  


// let nums1 = [1,2];
// let nums2 = [3,4];
// let arr = [...nums1,...nums2];
// function middleNumber(params) {
//         let arr = [...params]
//         let NUMBER = 0
//         let number1 = 0
//         let number2 = 0
//         if(arr.length % 2 == 0){
//             number1 = (arr.length / 2)
//             number2 = (arr.length / 2) - 1
//             NUMBER = (arr[number1] + arr[number2]) / 2
//             return NUMBER
//         }else{
//             NUMBER = (arr.length / 2) - 0.5
//             return (arr[NUMBER]);
//         }
//     }
//     console.log(middleNumber(arr));
    