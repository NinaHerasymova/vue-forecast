<template>
    <section class="result">
        <h2 class="result__title">{{name}},{{country}}</h2>
        <div class="result__row">
            <div class="result__item" v-for="day in info.daily" :key="day.dt">
                <day-result :day="day" modifier="week"/>
            </div>
        </div>
    </section>
</template>

<script>

  import DayResult from "./DayResult";

  export default {
    name: 'DailyResult',
    components: {DayResult},
    props: ['info', 'name', 'country'],
  };
</script>

<style lang="scss">
    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &__row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            @include md{
                flex-direction: column;
            }
        }

        &__item {
            width: 100%;
        }

        &__title {
            color: $accent;
        }

        &__date {
            display: flex;

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
        }

        &__degrees {
            background: $white;
            color: $accent;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            font-size: 40px;
            font-weight: 800;
        }

        &__state {
            font-size: 20px;
            color: $green;
        }

        .result__item + .result__item {
            margin-left: 10px;
            @include md {
                margin-left: 0;
            }
        }
    }
</style>
