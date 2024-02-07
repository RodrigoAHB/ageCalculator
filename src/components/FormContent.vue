<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['sendToApp', 'sendVoidToApp']);

    // VARIABLES
    const date = new Date()
    const yearNow = date.getFullYear();
    const monthNow = date.getMonth()+1
    const dayNow = date.getDate()
    const dayInput = ref();
    const monthInput = ref();
    const yearInput = ref();
    const inputHasError = ref(false)
    const yearErrorMessage = ref(false)
    const monthErrorMessage = ref(false)
    const dayErrorMessage = ref(false)
    const dayEmptyError = ref(false)
    const monthEmptyError = ref(false)
    const yearEmptyError = ref(false)
    const future = ref(false)

    async function checkInputs(ev){
        ev.preventDefault()
        const returnCheckBirthDate = checkBirthDate(dayInput.value, monthInput.value, yearInput.value)
        if (returnCheckBirthDate === true) {
            dayEmptyError.value = false
            dayErrorMessage.value = false
            yearEmptyError.value = false
            yearErrorMessage.value = false
            monthEmptyError.value = false
            monthErrorMessage.value = false
            emit('sendToApp', dayInput, monthInput, yearInput)

        } else {
            inputHasError.value = true 
            emit('sendVoidToApp', true)
        }
    }

    function checkDay(day){
        if((day === undefined) || (day === '')){
                dayEmptyError.value = true
                dayErrorMessage.value = false
                return false
        } else{
            if ((day <= 0) || (day > 31)){
                dayEmptyError.value = false
                dayErrorMessage.value = true
                return false
            } else {
                dayEmptyError.value = false
                dayErrorMessage.value = false
            }
        }
    }

    function monthIsCorrect(){
        monthErrorMessage.value = false
        monthEmptyError.value = false
    }

    function checkMonth(month){
        if ((monthInput.value === undefined) || (monthInput.value === '')){
            monthErrorMessage.value = false
            monthEmptyError.value = true
            checkDay(dayInput.value)
            return false
        } else {
            switch (monthInput.value){
                case 1:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break
                case 2:
                    monthIsCorrect()
                    if ((dayInput.value <= 28) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break
                case 3:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break    
                case 4:
                    monthIsCorrect()
                    if ((dayInput.value <= 30) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break
                case 5:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break    
                case 6:
                    monthIsCorrect()
                    if ((dayInput.value <= 30) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break
                case 7:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break    
                case 8:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break
                case 9:
                    monthIsCorrect()
                    if ((dayInput.value <= 30) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break    
                case 10:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break
                case 11:
                    monthIsCorrect()
                    if ((dayInput.value <= 30) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break    
                case 12:
                    monthIsCorrect()
                    if ((dayInput.value <= 31) && (dayInput.value >= 1)) {
                        dayErrorMessage.value = false
                        dayEmptyError.value = false
                        return true
                    } else{
                        dayErrorMessage.value = true
                        dayEmptyError.value = false
                        return false 
                    }
                    break 
                default:
                    monthErrorMessage.value = true
                    dayErrorMessage.value = true
                    dayEmptyError.value = false
                    return false
                    break
            }
        }
    }

    function checkBirthDate(day, month, year) {
        if((yearInput.value === undefined) || (yearInput.value === '')){
            yearEmptyError.value = true
            yearErrorMessage.value = false
            checkMonth(monthInput.value)
            return false
        } else if (yearInput.value > yearNow){
            yearEmptyError.value = false
            yearErrorMessage.value = true
            checkMonth(monthInput.value)
            return false
        } else {
            if(yearInput.value === yearNow){
                if(monthInput.value > monthNow){
                    future.value = true
                    yearErrorMessage.value = true
                    return false
                } else if (monthInput.value === monthNow){
                    if(dayInput.value > dayNow){
                        future.value = true
                        yearErrorMessage.value = true
                        return false
                    }
                }
            } 
            future.value = false
            yearEmptyError.value = false
            yearErrorMessage.value = false
            const isMonthCorret = checkMonth(monthInput.value)
            if (isMonthCorret){
                return true
            } else{
                return false
            }
        }
    }
</script>

<template>
        <form @submit="checkInputs">
            <div class="form__labels">
                <label for="day" :class="{form__label: (!dayErrorMessage || !dayEmptyError), form__label__error: (dayEmptyError || dayErrorMessage || future)}">DAY</label>
                <label for="month" :class="{form__label: !monthErrorMessage, form__label__error: (monthEmptyError || monthErrorMessage || future)}">MONTH</label>
                <label for="year" :class="{form__label: (!yearEmptyError || !yearErrorMessage), form__label__error: (yearEmptyError || yearErrorMessage)}">YEAR</label>
            </div>
            <div class="form__inputs">
                <input type="number" name="day" id="day" placeholder="DD" v-model="dayInput" :class="{form__input: (!dayEmptyError || !dayErrorMessage), form__input__error: (dayEmptyError || dayErrorMessage || future)}">
                <input type="number" name="month" id="month" placeholder="MM" v-model="monthInput" class="form__input" :class="{form__input: (!monthEmptyError || !monthErrorMessage), form__input__error: (monthEmptyError || monthErrorMessage || future)}">
                <input type="number" name="month" id="year" placeholder="YYYY" v-model="yearInput"
                class="form__input" :class="{form__input: (!yearEmptyError || !yearErrorMessage), form__input__error: (yearEmptyError || yearErrorMessage)}">
            </div>
            <div v-if="inputHasError" class="form__inputs--error">
                <p v-if="dayErrorMessage">Must be a valid day</p>
                <p v-else-if="dayEmptyError">This field is required</p>
                <p v-else-if="future">Must be in the past</p>
                <p v-else></p>
                <p v-if="monthErrorMessage">Must be a valid month</p>
                <p v-else-if="monthEmptyError">This field is required</p>
                <p v-else-if="future">Must be in the past</p>
                <p v-else></p>
                <p v-if="yearErrorMessage">Must be in the past</p>
                <p v-else-if="yearEmptyError">This field is required</p>
                <p v-else></p>
            </div>
            <div class="form__button">
                <hr/>
                <button>
                    <img src="../assets/icon-arrow.svg" alt="Arrow">
                </button>
            </div>
        </form>
</template>

<style lang="scss" scoped>
.form__labels, .form__inputs, .form__inputs--error{
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
}

.form__labels{
    label{
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 600;
    }

    .form__label{
        color: $smokeGray;
    }

    .form__label__error{
        color: $lightRed;
    }
}


.form__inputs{
    input{
        width: 140px;
        height: 62px;
        border-radius: 10px;
        font-size: 32px;
        font-weight: 700;
        padding-left: 20px;
        caret-color: $purple;

        &:focus{
            outline: 1px solid $purple;
        }
    }
    .form__input{
        border: 1px solid $lightGray;
    }

    .form__input__error{
        border: 1px solid $lightRed;
    }
}

.form__inputs--error{
    margin-top: 8px;
    font-size: 12px;
    color: $lightRed;
    font-style: italic;
    font-weight: 200;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.form__button{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: center;

    hr{
        border: 1px solid $lightGray;
        margin-top: 40px;
        width: 87%;
    }

    button{
        border-radius: 50%;
        height: 80px;
        width: 80px;
        background-color: $purple;
        border: none;
        cursor: pointer;

        img{
            height: 40px;
        }

        &:hover{
            background-color: $offBlack;
        }
    }
}

@media screen and (max-width: 720px){   
    .form__labels, .form__inputs, .form__inputs--error{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
        padding-left: 1.3rem;
    }

    .form__inputs{
        input{
            width: 90px;
            padding-left: 10px;
            font-size: 28px;
            height: 54px;
        }
    }

    .form__button{
        margin-top: 16px;
        display: block;

        hr{
            width: 80%;
            min-width: 300px;
            position: absolute;
            margin-left: 22px;
        }

        button{
            position: relative;
            top: 8px;
            height: 65px;
            width: 65px;

            img{
                height: 30px;
            }
        }
    }

    .form__inputs--error{
    margin-top: 8px;
    font-size: 10px;
    color: $lightRed;
    font-style: italic;
    font-weight: 200;
    }
}
</style>