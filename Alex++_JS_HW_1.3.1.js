function verification(age) {
    let age_1 = Number(age)
    let age_2 = 18
    let age_3 = 60
    if (age_1 > 0) {
        if (age_1 < age_2) {
            return("You don\’t have access cause your age is " + age_1 + " It\’s less then")
        } else if (age_1 >= age_2 && age_1 < age_3) {
            return("Welcome !")
        } else if (age_1 > age_3) {
            return("Keep calm and look Culture channel")
        }
    } else return("Technical work")
    }
    console.log(verification('2'))
    console.log(verification(17))
    console.log(verification(18))
    console.log(verification(61))
    console.log(verification(-5))