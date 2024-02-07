<script setup>
  import FormContent from './components/FormContent.vue'
  import Display from './components/Display.vue'
  import { ref } from 'vue';
  import { calculateAge  } from './functions.js'

  let yearI = ref();
  let monthI = ref();
  let dayI = ref();
  const ageReturn = ref([]);
  const year = ref()
  const month = ref()
  const day = ref()
  const isVoid = ref(true)

  function inputs(dayInput, monthInput, yearInput){
    yearI = yearInput;
    monthI = monthInput;
    dayI = dayInput;

    ageReturn.value = calculateAge(dayI.value, monthI.value, yearI.value)

    year.value = ageReturn.value[0]
    month.value = ageReturn.value[1]
    day.value = ageReturn.value[2]
    isVoid.value = false
  }

  function voidToApp(){
    isVoid.value = true
  }

</script>

<template>
  <div class="container">
    <FormContent @sendToApp="inputs" @sendVoidToApp="voidToApp"/>
    <Display :ageYears="year" :ageDays="day" :ageMonths="month" :isVoid="isVoid" />
  </div>
</template>

<style lang="scss" scoped>
.container{
  width: 720px;
  background-color: $white;
  margin: auto;
  height: 500px;
  border-radius: 20px 20px 200px 20px;
  padding: 30px 45px;
}

@media screen and (max-width: 720px){
  .container{
    width: 92%;
    padding: 60px 0 0 0;
    border-radius: 20px 20px 100px 20px;
    min-width: 345px;
  }
}
</style>
