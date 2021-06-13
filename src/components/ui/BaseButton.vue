<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      mode: {
        type: String,
        required: false,
        default: null
      },
      link: {
        type: Boolean,
        required: false,
        default: false
      },
      to: {
        type: String,
        required: false,
        default: '/'
      }
    }
  };
</script>

<style lang="scss" scoped>
    .button{
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        font: inherit;
        background-color: $yellow;
        border: 1px solid $green;
        color: $green;
        cursor: pointer;
        border-radius: 30px;
        display: inline-block;
        transition: all .3s ease-in-out;
        &:hover{
            background-color: $green;
            color: $yellow;
        }
    }
</style>
