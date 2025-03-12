                    // Darsdagi masala, men chiqib ketganim uchun ishlamagandim

                   

// 1.1

// function foo(son : number){
//     return son * son
// }

// console.log(foo(5));

// 2.1

// function foo(bool :boolean)  {
// return bool ? 1 : 0
// }

// console.log(foo(true))

                    


                            // 1-Masala

// function foo(str :string) {
//     return (
//         str[0].toUpperCase()
//     )
//     }

// console.log(foo("John"))
// console.log(foo("Doe"))


                            // 2-masala

// function foo(str :string)  {

// switch(str){
//     case "yes": return true
//         break;
//     case "no": return false
//         break; 
//         default:
//         return null
// }

// }

// console.log(foo("yes"))


                        // 3-masala


// function user(name : string, age : number, isStudent : boolean){
//     if(isStudent){
//         return `${name} is ${age} years old and is a student`;
//     }
//     else{
//         return `${name} is ${age} years old and is not a student`;
//     }
// }

// console.log(user("John", 25, false))



                        // 4-masala

// let input: number | string = 5

// function foo(input) {
//     if(input){
//         return input * input
//     }
//     else{
//         return `Hello ${input}`
//     }
// }

// console.log(foo(input))

// console.log(typeof input)

                        // 5-masala

// let user: [number, string, boolean] = [1, "username", true]

// console.log(user)


                        // 6-masala

// interface Car {brand: string, year: number, isElectiric: boolean}

// let avto: Car = {
//     brand: "Chevrolet",
//     year: 2009,
//     isElectiric: false
// }

// console.log(avto)


                        // 7-masala

// let input: number | string = "Khasan"

// function getLength(input) {
//     if(input  == isNaN){   //string
//         return input.length //uzunligi
//     }
//     else if(input == Array){  //array
//         return input.length
//     }
//     else{
//         return input
//     }
// }

// console.log(getLength(input));

// let str = ["Khasan", "Tursunov", "Frontend"]

// console.log(str.length)


                                    // 8-masala
                                
// let newArr: number[] = []

// function foo(n : number) {
//     for(let i = 1; i <= n; i++){
//         newArr.push(i)
//     }
//     console.log(newArr)
// }

// console.log(foo(8))


                                    // 9-masala
                                
// let newArr: number[] = []

// function foo(k : number, n: number) {
//     for(let i = k; i <= n; i++){
//         if(i % 2 ==0){
//             newArr.push(i)
//         }
//     }
//     console.log(newArr)
// }

// console.log(foo(8, 42))


                                // 10-masala

// function bar(): never{
//     throw new Error("is it throws an error?")
// }



// let i: number = 0

// function recursive(): never{
//     i++
//      recursive()
//      console.log(i)
// }