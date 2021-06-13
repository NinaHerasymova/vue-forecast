<template>
    <p class="error">{{errors}}</p>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    props: ['errors'],
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

            & span {
                margin-right: 5px;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
        }

        &__degrees {
            background: $white;
            color: $accent;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            font-size: 40px;
            font-weight: 800;
            margin: 10px 0;
        }
    }
</style>
