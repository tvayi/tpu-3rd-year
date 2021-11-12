function calculateDifInTime(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date){
        return date2.getTime() - date1.getTime()
    }
    else {
        return 'Invalid input: one of values is not a date'
    }
}

function calculateDifInDays(difInTime) {
    if (Number.isInteger(difInTime)){
        return Math.abs(difInTime / (1000 * 3600 * 24))
    }
    else {
        return 'Invalid input: it is not integer'
    }
}

function calculateDaysBetweenDays(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date){
        let difInTIme = calculateDifInTime(date1, date2)
        return calculateDifInDays(difInTIme)
    }
    else {
        return 'Invalid input: one of values is not a date'
    }
}
let date1 = new Date("06/30/2019");
let date2 = new Date("06/30/2021");
let date3 = new Date("02/14/2019");
let date4 = new Date("02/13/2019");
let date5 = new Date("02/07/2018");

console.log(calculateDaysBetweenDays(date2, date5))
console.log(calculateDaysBetweenDays(3, date5))
console.log(calculateDaysBetweenDays(date1, date1))
console.log(calculateDaysBetweenDays(date3, date4))
