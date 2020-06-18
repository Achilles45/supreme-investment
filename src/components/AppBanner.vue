<template>
  <div class="appbanner">
      <div class="row">
          <div class="col-12 text-center">
              <h3>Try Growth Investment today!</h3>
              <router-link to="/signup" class="app__btn">Create a free Account</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.appbanner{
    background: $primary-color;
    color: #fff;
    padding: 5rem 0;
    h3{
        padding-bottom: 3rem;
    }
    .app__btn{
        background: #ccc;
        text-decoration: none;
        padding: 1.2rem 3rem;
        font-weight: bold;
        color: #000;
        border-radius: 4px;
    }
}
</style>