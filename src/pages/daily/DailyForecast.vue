<template>
    <section class="daily container">
        <div class="daily__inner inner">
            <div class="daily__controls">
                <label class="daily__label" for="city">Enter the city: </label>
                <input class="daily__input" v-model="cityName" type="text" id="city">
                <base-button @click="setCity">Get!</base-button>
            </div>
            <p class="error" v-if="emptyField">Enter some city name, please</p>
            <daily-result v-if=info&&!emptyField :info="info" :errors="errors"/>
        </div>
    </section>
</template>

<script>

  import DailyResult from "./DailyResult";

  export default {
    name: 'DailyForecast',
    components: {DailyResult},
    data() {
      return {
        cityName: '',
        info: null,
        errors: null,
        emptyField: false
      };
    },
    methods: {
      setCity() {
        if (this.cityName) {
          this.emptyField = false
          this.errors = null
          this.$store.dispatch('setCity', this.cityName);
          this.cityName = ''
          this.axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.$store.getters.getCity}&appid=6f0a1b5a6791d33a1557b49542c3e112&units=metric`)
          .then(response => this.info = response.data)
          .catch(error => this.errors = error.message || 'Something went wrong! Let`s try one more time:)');
        } else {
          this.emptyField = true
        }
      }
    },
  };
</script>

<style lang="scss">
    .daily {
        margin-top: 20px;

        &__controls {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include sm {
                flex-wrap: wrap;
            }
        }

        &__label {
            @include sm {
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        &__input {
            flex-grow: 1;
            padding: 0.75rem 1.5rem;
            margin: 0 10px;
            border-radius: 30px;
            border: none;
            &:focus {
                outline: none;
            }
            @include sm{
                margin: 0 10px 0 0;
            }
        }
    }
</style>
