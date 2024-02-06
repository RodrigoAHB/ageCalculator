export function calculateAge(day, month, year){
    // VARIABLES
    let ageDays = 0;
    let ageMonths = 0;
    let ageYears = 0;
    const date = new Date()
    const dayNow = date.getDate();
    const monthNow = date.getMonth()+1;
    const yearNow = date.getFullYear();
    let days;

    // DAYS IN THE CURRENT MONTH
    switch (monthNow){
        case 1:
            days = 31
            break
        case 2:
            days = 28
            break
        case 3:
            days = 31
            break
        case 4:
            days = 30
            break
        case 5:
            days = 31
            break
        case 6:
            days = 30
            break
        case 7:
            days = 31
            break
        case 8:
            days = 31
            break
        case 9:
            days = 30
            break
        case 10:
            days = 31
            break
        case 11:
            days = 30
            break
        case 12:
            days = 31
            break
        default:
            console.log('ERROR')
            break
    }             

    if ( month > monthNow){
            ageYears = (yearNow - year) - 1
        if (day > dayNow){
            ageDays = (days - day + dayNow)
            ageMonths = 11 - (month - monthNow)
        } else if ( day < dayNow){
            ageDays = (dayNow - day)
            ageMonths = 12 - (month - monthNow)
        } else {
            ageDays = 0
            ageMonths = 12 - (month - monthNow)
        }
    } else if (month == monthNow) {
        if (day < dayNow){
            ageYears = (yearNow - year)
            ageMonths = 0
            ageDays = (dayNow - day)
        } else if (day > dayNow) {
            ageYears = (yearNow - year) - 1
            ageMonths = 11
            ageDays = ageDays = (days - day + dayNow)
        } else {
            ageYears = (yearNow - year)
            ageMonths = 0
            ageDays = 0
        }
    } else {
        ageYears = (yearNow - year)
        if (day < dayNow){
            ageMonths = (monthNow - month)
            ageDays = (dayNow - day)
        } else if (day > dayNow) {
            ageMonths = 0
            ageDays = ageDays = (days - day + dayNow)
        } else {
            ageMonths = (monthNow - month)
            ageDays = 0
        }
    }

    return [ageYears, ageMonths, ageDays, true]
}

