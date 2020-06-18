<template>
  <div class="process" id="process">
      <div class="container">
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8 text-center">
                  <h2>HOW WE GENERATE OUR INCOME</h2>
                  <p>We invest in high profit yielding and secured investment opportunities</p>
              </div>
               <div class="col-md-2"></div>
          </div><br>
          <div class="row">
              <div class="col-md-6 pt-4">
                   <img src="../assets/images/img1.jpg" class="img-fluid process__img" alt="">
              </div>
              <!-- <div class="col-md-1"></div> -->
              <div class="col-md-5 pt-4">
                  <div class="content d-flex">
                      <div class="icons">
                          <!-- <i class="fa fa-cubes"></i> -->
                      </div>
                      <div class="text">
                          <h3>Crowdfunding</h3>
                          <hr>
                          <p>The company deals with various high growth and secured investment opportunities. Some of the products and services we deal on includes</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Buying and Selling of Bitcoins</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Buying of Chemical Products</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Import and Export of Agro Alied Products</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp;  General cryptocurrencies Trading</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Lending to other companies</p>
                      </div>
                  </div><br>
                  <!-- <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-clone"></i>
                      </div>
                      <div class="text">
                          <h4>Maturity & Payout</h4>
                          <p>That's the product we deal on that makes us generate the money to pay investors in three days time and also the promo package for new members in the platform.</p>
                      </div>
                  </div> -->
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                    <p>These are some of the product we deal on that helps the company generate quick returns to pay investors in four working days for initial investment and in 12 hours for the promo package. Want to grow your money, give us a try today!</p>
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
.process{
    padding: 5rem 0;
    h2{
        font-weight: bolder;
        color: #000;
        padding-bottom: .3rem;
    }
    .process__img{
        border-radius: 5px;
    }
    h3{
        color: #000;
        font-weight: bold;
    }
    .content{
        .icons{
            // padding-right: 2rem;
            font-size: 2rem;
            color: $primary-color;
        }
        .text{
            h4{
                font-weight: bold;
                padding-bottom: .5rem;
                color:#2b2b2b;
            }
            p{
                color: #627081;
                font-size: .95rem;
                // opacity: .8;
                line-height: 1.8;
            }
        }
    }
     p{
        color: #627081;
        font-size: .95rem;
        // opacity: .8;
        line-height: 1.8;
    }
}

//Media Queries
@media only screen and (max-width: 600px){
    h2{
        font-size: 1.5rem !important;
        line-height: 1.6;
    }
}
</style>