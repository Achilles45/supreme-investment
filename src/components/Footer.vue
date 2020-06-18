<template>
  <footer class="footer">
      <div class="main__content">
          <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <h5>Company</h5>
                  <p class="intro">This commission was created to help and  support it's registered members financially and also to help increase economic growth in the  society as well. Our intentions are genuie and pure.</p>
              </div>
               <div class="col-md-4">
                  <h5>Our Location & Contact</h5>
                <h6><i class="fa fa-home"></i> Head Office</h6>
                <p>NO.12 Unity Close, Ijokoro Sango, Otta, Ogun State, Nigeria.</p>
                 <h6><i class="fa fa-envelope"></i>Email Address</h6>
                <p>support@supremeinvestment.cash</p>
                 <h6><i class="fa fa-phone"></i>Phone</h6>
                <p><a href="tel:09056704960"> 09056704960</a></p>
              </div>
              <div class="col-md-4">
                  <h5>Payment Method</h5>
                  <p>You can make payment online or through direct bank deposit</p>
                  <h5>We Accept</h5>
                  <img src="../assets/images/payment.png" class="img-fluid" alt="">
              </div>
          </div>
      </div>
      </div>
      <div class="footer__bottom">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <p>Gateway Investment Limited &copy; All Right Reserved, 2020</p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
footer{
    .main__content{
        background: #0A0A0A;
        padding: 4rem 0;
    }
    color: #fff;
    h5{
        padding-top: 1rem;
        font-weight: bold;
        font-size: 1rem;
        padding-bottom: 1.5rem;
        opacity: .8;
        text-transform: uppercase;
    }
    h6{
        opacity: .95;
        padding-bottom: .5rem;
    }
    p{
        font-size: .8rem;
        opacity: .7;
        line-height: 1.8;
    }
    .fa-home, .fa-envelope, .fa-phone{
        color: $secondary-color;
        margin-right: .5rem;
    }
    // .intro{
    //     text-transform: capitalize;
    // }
    .footer__bottom{
        background: #090909;
        color: #fff;
        padding: 1rem 0;
         p{
        font-size: .8rem;
        opacity: .7;
        line-height: 1.8;
    }
    }
    a{
        color: #fff;
    }
}
</style>