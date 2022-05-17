const fs = require('fs')
json_in = fs.open('D:\VKS\group_29_free\!dz\task2.json', 'r', (err, fd) => {
    //fd - это дескриптор файла
  })

console.log("что имеем? " + json_in[0])

// resultArr = []

// for (let i = 0; i < json_in.length; i++) {    
//     for (let j = i + 1; j < json_in.length; j++) {
//         if (json_in[i].name == json_in[j].name) {
//             dubble = 0
//             break
//             } else {
//                 dubble = 1
//             }
//     }
//     if (dubble == 1) {resultArr.push(json_in[i])}    
// }
// console.log('Итого ' + json_in.length)
// console.log('Итого ' + resultArr.length)
// for (let i = 0; i < resultArr.length; i++) { 
// console.log((i + 1)  + ' ' + resultArr[i].name)
// }
