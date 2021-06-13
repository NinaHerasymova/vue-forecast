<template>
    <div class="city-field">
        <div class="city-field__controls">
            <label class="city-field__label" for="city">Enter the city: </label>
            <input class="city-field__input" v-model="location.cityName" type="text" id="city">
            <base-button @click="setCity" v-text="'Get'"/>
        </div>
        <p class="error" v-if="emptyField">Enter some city name, please</p>
    </div>
</template>

<script>

  export default {
    name: 'DailyForecast',
    data() {
      return {
        location: {
          cityName: this.$store.getters.getCity ?? '',
          country: '',
        },
        lat: null,
        lon: null,
        emptyField: false,
      };
    },
    methods: {
      setCity() {
        if (this.location.cityName) {
          this.emptyField = false
          const city = this.location.cityName.replace(/ /ig, '+')

          this.$store.dispatch('setCity', city);
          this.$store.commit('setError', '');

          this.axios
          .get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.$store.getters.getCity}&limit=1&appid=6f0a1b5a6791d33a1557b49542c3e112`)
          .then(response => {
            if (response.data.length===0) {
              this.$store.commit('setError', 'It seems you entered your imaginary city) Let`s try one more time)')
            }
            this.lat = response.data[0].lat;
            this.lon = response.data[0].lon;
            this.location.name = response.data[0].name;
            this.location.country = response.data[0].country;
            this.$store.dispatch('setLocation', this.location);

            this.axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly&appid=6f0a1b5a6791d33a1557b49542c3e112&units=metric`)
            .then(response => this.$store.dispatch('setForecast', response.data))
            .catch(res => {

              if(res.response.status === 404){

                this.$store.commit('setError', 'Something went wrong! Let`s try one more time:)');
              }
            })
          })
          .catch(res => {
            if(res.response.status === 404){
              this.$store.commit('setError', 'Something went wrong! Let`s try one more time:)');
            }
          });
          this.location.cityName = ''
        } else {
          this.emptyField = true
          this.$store.commit('setError', '');
        }
      }

    },
  };
</script>

<style lang="scss">
    .city-field {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        &__controls {
            width: 100%;
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

            @include sm {
                margin: 0 10px 0 0;
                min-width: 190px;
            }

            @include xs {
                margin: 0;
                flex-grow: unset;
            }
        }
    }
</style>
