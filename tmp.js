function log(text) {
    console.log(text)
}

// for (let i = 0; i < json_in.length; i++) {    
//     for (let j = i + 1; j < json_in.length; j++) {
//         if (json_in[i].name == json_in[j].name) {
//             dubble = 0
//             console.log('Break ' + i + '-'+ j)
//             break
//             } else {
//                 dubble = 1
//                 console.log('Verno!!! ' + i + '-'+ j)
//             }
//     }
//     console.log('первый цикл - ' + i)
//     console.log("добл " + dubble)
//     if (dubble == 1) {resultArr.push(json_in[i])}
//     dubble = 1
// }
// console.log('Итого ' + json_in.length)
// console.log('Итого ' + resultArr.length)
// for (let i = 0; i < resultArr.length; i++) { 
// console.log(resultArr[i].name)
// }

function sum(a, b) {
    return a + b
}

log(sum(2,3))

// eXtensible Markup Language – расширяемый язык разметки
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <!—Коментарий -->
    <books count="2">
        <book pages="246" price="548">
            <title>Рефакторинг</title>
            <author>Мартин Фаулер</author>
</book>
</books>
</root>
