<template>
    <header class="header">
        <div class="header__inner inner">
            <nav class="header__nav">
                <div class="header__logo">
                    <router-link class="header__logo-link" to="/">
                        <img class="header__logo-img" src="@/assets/images/sun.png"/>
                        <h1 class="header__logo-title">RealForecast</h1>
                    </router-link>
                </div>
                <ul class="header__menu">
                    <li class="header__menu-item">
                        <router-link class="header__menu-link" to="/daily" v-text="'Daily'"/>
                    </li>

                    <li>
                        <router-link class="header__menu-link" to="/week" v-text="'Week'"/>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'TheHeader',
  };
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 5rem;
        background-color: $green;
        display: flex;
        justify-content: center;
        align-items: center;

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__nav {
            width: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__logo-link {
            display: flex;
            align-items: center;
        }

        &__logo-title {
            margin: 0;
            color: $white;
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border: 1px solid transparent;
            @include sm {
                padding: 0.75rem .5rem;
            }
        }

        &__logo-img {
            width: 40px;
            height: 40px;
            object-fit: cover;
        }

        &__menu {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__menu-item {
            margin: 0 1rem;
        }
    }

</style>
