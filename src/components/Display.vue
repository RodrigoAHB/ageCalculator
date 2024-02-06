<script setup>

const props = defineProps(['ageYears', 'ageMonths', 'ageDays', 'isVoid'])

</script>

<template>
    <div class="display">
        <p><span v-if="isVoid">- -</span><span v-else>{{ ageYears }}</span> years</p>
        <p><span v-if="isVoid">- -</span><span v-else>{{ ageMonths }}</span> months</p>
        <p><span v-if="isVoid">- -</span><span v-else>{{ ageDays }}</span> days</p>
    </div>
</template>

<style lang="scss" scoped>
    .display{
        p{
            font-size: 80px;
            font-weight: 700;
            font-style: italic;
            line-height: 1.1em;
        }

        span{
            color: $purple;
        }
    }
</style>