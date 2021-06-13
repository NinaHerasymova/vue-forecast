<template>
    <div>
        <base-dialog :show="!!error" :title="'An error occurred!!!'" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <section>
            Week
        </section>
    </div>
</template>

<script>
  export default {
    name: 'UserAuth',
    data() {
      return {
        error: null
      };
    },
    methods: {
      handleError(){
        this.error = null
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
