<template>
    <section>
        <base-card>
            <h2>Page not found</h2>
            <p>Something went wrong...Maybe you want to get some <router-link to="/daily">Daily Forecast</router-link> ?</p>
        </base-card>
    </section>
</template>

<script>
    import BaseCard from '../components/ui/BaseCard';

  export default {
    name: 'NotFound',
    components: { BaseCard }
  }
</script>
