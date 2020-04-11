<template>
  <div class="container">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item nav__item--brand">
          <router-link class="nav__link" to="/" exact>
            AntiSocial
          </router-link>
        </li>
      </ul>

      <ul class="nav__list" v-if="loggedIn">
        <li class="nav__item">
          <router-link class="nav__link" to="/feed" exact>
            Feed
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/profile" exact>
            Profile
          </router-link>
        </li>
        <li class="nav__item">
          <a class="nav__link" @click="logout()">
            Logout
          </a>
        </li>
      </ul>

      <ul class="nav__list" v-if="!loggedIn">
        <li class="nav__item">
          <router-link class="nav__link" to="/auth/login" exact>
            Login
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/auth/register" exact>
            Register
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/styles/abstracts/_variables" as v;
@use "@/styles/abstracts/_mixins" as mix;

.container {
  padding: 0;
}

.nav {
  align-items: center;
  // box-shadow: 
  //   0 0 16px -6px rgba(map-get(v.$theme, 'stroke'), 0.2),
  //   0 4px 10px -4px rgba(map-get(v.$theme, 'stroke'), 0.3),
  //   inset 0 0 0 1px rgba(map-get(v.$theme, 'stroke'), 0.1);
  border-radius: map-get(v.$sizing, 'radius');
  display: flex;
  justify-content: space-between;
  margin-top: 5.5rem;

  @include mix.e(list) {
    align-items: center;
    display: flex;
  }

  @include mix.e(item) {
    font-size: 1.8rem;

    &:not(:last-of-type) { margin-right: 3rem; }

    @include mix.m(brand) {
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  @include mix.e(link) {
    color: map-get(v.$theme, 'headline');
  }
}

.router-link-active {
  font-weight: 600;
}
</style>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      loggedIn: true,
    }
  },
  methods: {
    logout: () => {
      console.log('logout');
    },
  },
};
</script>