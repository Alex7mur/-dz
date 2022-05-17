// function III1(it_1, it_2){
//     let mass = 'Hallo'
//     console.log(mass, it_1, it_2)
// }
// III1(10,11)

// function f1() {
//     console.log("kkkk")
// }

// let f1 = () => console.log('hello')

let t1 = 10
let t2 = 20


console.log(t1, t2)

let f11 = () => {console.log('H11111')}
let f22 = () => {console.log('Sum =', t11 +t22)}

let f33 = (t1 < t2) ?
    (tt1, tt2) => console.log('xx1= ', tt1 + tt2) :
    (tt1, tt2) => console.log('xx1= ', tt1 + tt2) ;

f33(30, 40)

function y33(){};

y33.prototype.fast = function (){
    console.log('fast')
}

y33.prototype.green = function (sum, co2) {
    console.log('Green = ', sum, '+', co2)
}

y33.prototype.shih = function (){
    console.log('uuuuuuuuuuuuuuu')
}

let forest = new y33()

forest.fast()
forest.green(4500, 50)
forest.shih()
