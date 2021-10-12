// function digital_root(n){
//     let a =0
//     for (let i =1 ; i <=n.length;i++){
//         a+=n[i]
//     }
//     console.log(a)
// }
// digital_root(19)
// console.log("nowddddfffhhhr")
let arr=[34,56,23,45]

let res = arr.reduce(function(acc, curr){
    acc=acc+curr
    return curr
},0)
console.log(res)
