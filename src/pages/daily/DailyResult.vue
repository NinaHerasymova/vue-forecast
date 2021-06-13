<template>
    <section class="result">
        <div class="result__success">
            <h2 class="result__title">{{info.name}},{{info.sys.country}}</h2>
            <div class="result__date">
                <span>{{getDate.day}}</span>
                <span>{{getDate.date}}</span>
                <span>{{getDate.month}}</span>
                <span>{{getDate.year}}</span>
            </div>
            <div class="result__info">
                <div class="result__degrees">{{getIntegerDegrees}} &#176;C</div>
                <span>{{info.weather[0].main}}</span>
            </div>
        </div>
        <p v-if="errors" class="error ">
            {{errors}}
        </p>
    </section>
</template>

<script>


  export default {
    name: 'DailyResult',
    props: ['info', 'errors'],
    computed:{
      getIntegerDegrees(){
        return Math.round(this.info.main.temp)
      },
      getDate(){
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']
        const todayDay = {
          day:days[new Date().getDay()],
          date: new Date().getDate(),
          month: months[new Date().getMonth()],
          year: new Date().getFullYear()
        }
        return todayDay
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
        }
        &__degrees{
            background: $white ;
            color: $accent;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            font-size: 40px;
            font-weight: 800;
            margin: 10px 0;
        }
    }
</style>
