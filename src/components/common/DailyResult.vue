<template>
    <section :class="['result', modifier&&`result--${modifier}`]">
        <div class="result__success">
            <h2 class="result__title">{{info.name}},{{info.sys.country}}</h2>
            <div class="result__date">
                <span v-text="getDate.day"/>
                <span v-text="getDate.date"/>
                <span v-text="getDate.month"/>
                <span v-text="getDate.year"/>
            </div>
            <div class="result__info">
                <div class="result__degrees">{{getIntegerDegrees}} &#176;C</div>
                <img :src="`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`" alt="">
                <span class="result__state" v-text="info.weather[0].main"/>
            </div>
        </div>
    </section>
</template>

<script>


  export default {
    name: 'DailyResult',
    props: ['modifier','info'],
    computed:{
      getIntegerDegrees(){
        return Math.round(this.info.main.temp)
      },
      getDate(){
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']
        return {
          day: days[new Date().getDay()],
          date: new Date().getDate(),
          month: months[new Date().getMonth()],
          year: new Date().getFullYear()
        }
      }
    }
  };
</script>

<style lang="scss">
    .result{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        &__success{
            display: flex;
        }
        &__title{
            color: $accent;
        }
        &__date{
            display: flex;
            & span {
                margin-right: 5px;
            }
        }
        &__info{
            display: flex;
            flex-direction: column;
            background: rgba(255, 255, 255, .5) ;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            margin: 10px 0;
        }
        &__degrees{
            background: $white ;
            color: $accent;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            font-size: 40px;
            font-weight: 800;

        }
        &__state{
            font-size: 20px;
            color: $green;
        }
    }
</style>
