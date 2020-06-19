<template>
  <div class="features">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h2>See why our investors trust us</h2>
                  <p>We have consistently delivered amazing results to our investors</p>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <img src="../assets/images/card.svg" class="icons" alt="">
                  <h3>QUICK AND EASY DEPOSIT</h3>
                  <p>We offer our investors a variety of payment options to make the whole process convinient and quick.</p>
                  <router-link to="/signup" class="card__btn">Get Started</router-link><br><br>
              </div>
               <div class="card__content">
                  <img src="../assets/images/growth.svg" class="icons" alt="">
                  <h3>AMAZING GROWTH OPPORTUNITIES</h3>
                  <p>You will get profit of 80% ROI in 4 days on your initial investment. No stress, no stories!</p>
                   <router-link to="/signup" class="card__btn">Get Started</router-link><br><br>
              </div>
               <div class="card__content">
                  <img src="../assets/images/cash.svg" class="icons" alt="">
                  <h3>FAST AND EASY WITHDRAWAL</h3>
                  <p>We provide you with an easy way to withdraw your money straight to your bank account.</p>
                   <router-link to="/signup" class="card__btn">Get Started</router-link><br><br>
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
.features{
    background: #F6F7FF;
    padding: 5rem 0;
    h2{
        font-weight: bold;
        color: #000;
        text-transform: capitalize;
    }
    p{
        color: #627081;
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        margin-top: 3rem;
        .card__content{
            text-align: center;
             box-shadow: 0 7px 20px -10px rgba(0,0,0,.17);
            padding: 1.8rem 2rem;
            border-radius: 4px;
            .icons{
                max-width: 60px;
                height: auto;
            }
            h3{
                font-size: 1rem;
                font-weight: bold;
                padding-top: 1rem;
                padding-bottom: .7rem;
                color: #000;
                line-height: 1.5;
            }
            p{
                color: #2b2b2b;
                font-size: .9rem;
                opacity: .7;
                padding-bottom: 2rem;
                line-height: 1.9;
            }
            .card__btn{
                padding: 1rem 2rem;
                border-radius: 4px;
                text-decoration: none;
                font-weight: normal;
                background: $secondary-color;
                color: #fff;
                font-size: .8rem;
            }
        }
    }
}
</style>