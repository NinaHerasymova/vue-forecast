<template>
    <div class="city-field">
        <div class="city-field__controls">
            <label class="city-field__label" for="city">Enter the city: </label>
            <input class="city-field__input" v-model="cityName" type="text" id="city">
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
        cityName: this.$store.getters.getCity ?? '',
        emptyField: false
      };
    },
    methods: {
      setCity() {
        if(this.cityName){
          this.emptyField = false
          this.$emit('setCity', this.cityName)
          this.cityName = ''
        }else{
          this.emptyField = true
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
        &__controls{
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
