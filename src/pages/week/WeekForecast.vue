<template>
    <section class="week container">
        <div class="week__inner inner">
            <city-field @setCity="setCity"/>
        </div>
        <week-daily-result v-if=info&&!emptyField :info="info" :name="name" :country="country"/>
        <error-message :errors="errors"/>
    </section>
</template>

<script>

  import ErrorMessage from "../../components/common/ErrorMessage";
  import CityField from "../../components/common/CityField";
  import WeekDailyResult from "../../components/common/WeekDailyResult";

  export default {
    name: 'WeekForecast',
    components: {WeekDailyResult, ErrorMessage, CityField},
    data() {
      return {
        cityName: '',
        lat: null,
        lon: null,
        info: null,
        name: '',
        country: '',
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
          .get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.$store.getters.getCity}&limit=1&appid=6f0a1b5a6791d33a1557b49542c3e112`)
          // .then(response => this.info = response.data)
          .then(response => {
            this.lat = response.data[0].lat;
            this.lon = response.data[0].lon;
            this.name= response.data[0].name;
            this.country= response.data[0].country;
            this.axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=current,minutely,hourly&appid=6f0a1b5a6791d33a1557b49542c3e112&units=metric`)
            .then(response => this.info = response.data)
            .catch(res => res.response.status === 404 ? this.errors = 'Something went wrong! Let`s try one more time:)' : null)
          })

          .catch(res => res.response.status === 404 ? this.errors = 'Something went wrong! Let`s try one more time:)' : null);
        }
      }

    },
  };
</script>

<style lang="scss">
    .week {
        margin-top: 20px;
    }
</style>
