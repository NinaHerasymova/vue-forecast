<template>
        <section class="daily container">
            <div class="daily__inner inner">
                <city-field/>
                <h2 class="daily__title title" v-if="location.name&&location.country&&!errors">{{location.name}},{{location.country}}</h2>
                <day-result v-if=info.current&&!errors :day="info.current"/>
                <error-message v-else :errors="errors"/>
            </div>
        </section>
</template>

<script>

    import {mapGetters} from 'vuex'

  import DayResult from "../../components/common/DayResult";
  import ErrorMessage from "../../components/common/ErrorMessage";
  import CityField from "../../components/common/CityField";

  export default {
    name: 'DailyForecast',
    components: { CityField, DayResult, ErrorMessage},
    computed:{
      ...mapGetters({
        info:'getForecast',
        location: 'getLocation',
        errors: 'getErrors'
      })
    }
  };
</script>

<style lang="scss">
    .daily {
        margin-top: 20px;
    }
</style>
