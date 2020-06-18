<template>
  <div class="counter">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h1>SEE SOME OF OUR NUMBERS</h1>
                  <p>We have worked hard over time to deliver amazing results to our investors</p>
              </div>
          </div>
          <div class="row text-center">
              <div class="col-md-3">
                  <i class="fa fa-users icons"></i>
                  <h3>Over 200+ Investors Currently</h3>
              </div>
              <div class="col-md-3">
                  <i class="fas fa-funnel-dollar icons"></i>
                  <h3>Over &#8358;30,000,000.00 Invested</h3>
              </div>
              <div class="col-md-3">
                 <i class="fas fa-hand-holding-usd icons"></i>
                  <h3>Over &#8358;70,000,000.00 Paid to Investors</h3>
              </div>
              <div class="col-md-3">
                 <i class="fa fa-cubes icons"></i>
                   <h3>Over 100+ Staff Engaged in Different Department</h3>
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
@import '../assets/styles/_colors';
.counter{
    background: linear-gradient(rgba(2,13,38,.5), rgba(2,13,38,.5)), url('../assets/images/home1.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
    padding: 5rem 0;
    .icons{
        color: $secondary-color;
        font-size: 3rem;
    }
    p{
        font-size: .9rem;
        opacity: .8;
        padding-bottom: 5rem;
    }
    h3{
        padding-top: 1.5rem;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.5;
    }
    h1{
        font-weight: bold;
    }
}
</style>