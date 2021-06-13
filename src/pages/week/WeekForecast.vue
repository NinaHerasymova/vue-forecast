<template>
    <section class="week container">
        <div class="week__inner inner">
            <city-field/>
        </div>
        <h2 class="week__title title" v-if="location.name&&location.country&&!errors">{{location.name}}, {{location.country}}</h2>
        <div class="week__row" v-if=info.daily&&!errors >
            <div class="week__item" v-for="day in info.daily" :key="day.dt">
                <day-result :day="day" modifier="week"/>
            </div>
        </div>
        <error-message v-else :errors="errors" class="inner"/>
    </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  import ErrorMessage from "../../components/common/ErrorMessage";
  import CityField from "../../components/common/CityField";
  import DayResult from "../../components/common/DayResult";

  export default {
    name: 'WeekForecast',
    components: {DayResult, ErrorMessage, CityField},
    computed:{
      ...mapGetters({
        info:'getForecast',
        location:'getLocation',
        errors: 'getErrors'
      })
    }
  };
</script>

<style lang="scss">
    .week {
        margin-top: 20px;
        &__row{
            display: flex;
            justify-content: space-between;
            width: 100%;
            @include md{
                flex-direction: column;
            }
        }
    }
</style>
