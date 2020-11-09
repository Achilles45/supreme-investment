<template>
  <div class="overlay">
      <div class="container">
          <div class="content">
              <div>
                  <h2>Exceeded Bandwidth</h2>
                  <hr>
              <p>Oops! It seems like you have exceeded the allocated bandwidth resourses for this domain registered on July 7th, 2020 and you may need to add more bandwidth resources to this domain ranging from $50, $100, $200, $500, and $1000 depending on the scale of your application. Sorry for any hitch in service.</p>
              <a href="https://www.namecheap.com/myaccount/signup/" class="button">Purchase Plan</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// @import '../assets/styles/_colors';
.overlay{
    background: #083E9E;
    height: 100vh;
    color: #fff;
    .content{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    padding: 10rem 0;
    h2{
        font-weight: bold;
        padding-bottom: 1.4rem;
    }
    p{
        font-size: .8rem;
        line-height: 2;
        opacity: .7;
        padding-bottom: 2rem;
    }
    .button{
        background: #fff;
        padding: 1rem 2rem;
        border-radius: 4px;
        color: #333;
        font-size: .9rem;
        font-weight: bold;
        text-decoration: none;
    }
}
}
</style>