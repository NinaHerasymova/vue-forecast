<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <section>
            <label for="city">Enter the city: </label>
            <input v-model="cityName" type="text" id="city">
            <button @click="getForecast">Get!</button>
            <div v-if="cityName">
                <h2>Weather in {{info.name}}:</h2>
                <span>Temperature: {{info.main.temp}}</span>
            </div>

        </section>
    </div>
</template>

<script>


  export default {
    name: 'CoachesList',
    data() {
      return {
        info: {},
        cityName: '',
        error: null,
      };
    },
    methods: {
      handleError() {
        this.error = null;
      },
      getForecast(){
        this.axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=6f0a1b5a6791d33a1557b49542c3e112&units=metric`)
        .then(response => this.info=response.data);
      }

    },

  };
</script>

