<template>
    <div :class="['result', modifier&&`result--${modifier}`]">
        <div v-if="!modifier" class="result__date">
            <span v-text="getDate.day"/>
            <span v-text="getDate.date"/>
            <span v-text="getDate.month"/>
            <span v-text="getDate.year"/>
        </div>
        <div class="result__info">
            <div v-if="modifier==='week'" class="result__date">
                <span v-text="getDate.day"/>
                <span v-text="getDate.date"/>
                <span v-text="getDate.month"/>
            </div>
            <div class="result__info-wrapper">
                <div class="result__degrees">{{getIntegerDegrees}} &#176;C</div>
                <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="">
                <div class="result__state" v-text="day.weather[0].main"/>
            </div>
        </div>

    </div>
</template>

<script>


  export default {
    name: 'DailyResult',
    props: ['day', 'modifier'],
    computed: {
      getIntegerDegrees() {
        return Math.round(this.day.temp.day)
      },
      getDate() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return {
          day: days[new Date(this.day.dt * 1000).getDay()],
          date: new Date().getDate(),
          month: months[new Date().getMonth()],
          year: new Date().getFullYear()
        }
      }
    }
  };
</script>

<style lang="scss">
    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &__title {
            color: $accent;
        }

        &__date {
            display: flex;

            .result--week & {
                font-size: 12px;
                flex-direction: column;
                @include md {
                    font-size: 16px;
                    flex-direction: row;
                    justify-content: center;
                }
            }

            & span {
                margin-right: 5px;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
            background: rgba(255, 255, 255, .5);
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            margin: 10px 0;

            .result--week & {
                padding: 1rem 0.5rem;
                font-size: 25px;
                width: 100%;
                @include md {
                    padding: 1rem;
                }
            }
        }

        &__info-wrapper {

            .result--week & {
                @include md {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-between;
                }
            }
        }

        &__degrees {
            background: $white;
            color: $accent;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            font-size: 40px;
            font-weight: 800;

            .result--week & {
                padding: 0.5rem;
                font-size: 25px;
                @include md{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 100px;
                }
            }
        }

        &__state {
            font-size: 20px;
            color: $green;

            .result--week & {
                font-size: 12px;
                @include md{
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    font-weight: 800;
                }
            }
        }

        &--week {
            width: 100%;
        }
    }
</style>
