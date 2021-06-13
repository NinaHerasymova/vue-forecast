<template>
        <section class="daily container">
            <div class="daily__inner inner">
                <city-field @setCity="setCity"/>
                <daily-result v-if=info&&!emptyField :info="info"/>
                <error-message v-else-if="!info&&!emptyField" :errors="errors"/>
            </div>
        </section>
</template>

<script>

  import DailyResult from "../../components/common/DailyResult";
  import ErrorMessage from "../../components/common/ErrorMessage";
  import CityField from "../../components/common/CityField";

  export default {
    name: 'DailyForecast',
    components: {DailyResult, ErrorMessage, CityField},
    data() {
      return {
        info: null,
        errors: null,
        emptyField: false
      };
    },
    methods: {
      setCity(cityName, emptyField) {
        this.emptyField = emptyField
        if (cityName) {
          this.errors = null
          const city = cityName.replace(/ /ig, '+')

          this.$store.dispatch('setCity', city);
          this.axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.$store.getters.getCity}&appid=6f0a1b5a6791d33a1557b49542c3e112&units=metric`)
          .then(response => this.info = response.data)
          .catch(res => res.response.status === 404 ? this.errors = 'Something went wrong! Let`s try one more time:)' : null);
        }
      }
    },
  };
</script>

<style lang="scss">
    .daily {
        margin-top: 20px;
    }
</style>
