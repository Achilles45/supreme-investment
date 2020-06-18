<template>
  <div class="about">
    <Topbar />
    <Navbar />
    <div class="about__wrapper">
      <div class="container">
        <div class="text text-right">
          <h1>About Us</h1>
        <p>Find out more about what we do, how we do it and what we offer!</p>
        </div>
      </div>
    </div>
    <div class="about__content">
      <div class="container">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10 heading text-center">
            <h1>We provide you with investment opportunities</h1>
            <p>Supreme Investment Company was created with the aim of eliminating poverty and hardship from Nigeria. It's a reliable and genuine platform created for the benefit of every Nigerian to achieve wealth and happiness by investing and getting back your investment in 4 days and 12hours for the promo plan without any delay or stress in payment.</p>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
    <div class="reason">
     <div class="container">
        <div class="col-12">
        <h3 class="text-center">SEE WHY OUR INVESTORS TRUSTS US</h3>
        <div class="reason__wrapper">
          <div class="reason__card">
            <img src="../assets/images/chart.svg" class="icons" alt="">
            <h5>Growth & Consistency</h5>
            <p>Our team has proved to be very efficient and reliable in delivering consistence results over time, so we can pay our investors without stories.</p>
          </div>
           <div class="reason__card">
            <img src="../assets/images/wallet.svg" class="icons" alt="">
            <h5>Secure Withdrawals</h5>
            <p>You can request for withdrawals after your investment has reached maturity and it will be paid directly into your local bank account.</p>
          </div>
           <div class="reason__card">
            <img src="../assets/images/lock.svg" class="icons" alt="">
            <h5>Ultimate Security</h5>
            <p>Our systems are developed with security in mind as we use the latest and safest encryption technology to make sure all your transactions on the platform are safe and secured.</p>
          </div>
           <div class="reason__card">
            <img src="../assets/images/support.svg" class="icons" alt="">
            <h5>24/7 Customer Care</h5>
            <p>We've got a passionte customer success team that is always handy to repond to your queries. You should get your queries responded to in at most 24 hours.</p>
          </div>
           <div class="reason__card">
            <img src="../assets/images/bitcoin.svg" class="icons" alt="">
            <h5>Multi Currency Support</h5>
            <p>The team is working on a feature that will allow anyone to transact with us using a variety of currencies including crytocurrencies such as bitcoin and others...</p>
          </div>
           <div class="reason__card">
            <img src="../assets/images/chart.svg" class="icons" alt="">
            <h5>Referral Program</h5>
            <p>Once this feature is launched, you will be able to even make more money just by referring a  friend who registers and invest through us.</p>
          </div>
        </div>
      </div>
     </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Topbar,
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.about__wrapper{
  background: linear-gradient(rgba(2,13,38,.7), rgba(2,13,38,.7)), url('../assets/images/home1.jpg');
  background-position: center;
  background-size: cover;
  color: #fff;
  padding: 5rem 0;
  .text{
    h1{
      font-weight: 900;
    }
    p{
      // font-size: .9rem;
      opacity: .8;
    }
  }
}
 .about__content{
    .heading{
      padding-top: 3rem;
      h1{
        font-weight: bold;
        color: #000;
        padding-bottom: 1rem;
        padding-top: 1rem;
      }
      p{
        color: #627081;
        line-height: 1.9;
        font-size: .86rem;
      }
    }
  }
  .reason{
    padding: 3rem 0;
    h3{
      font-weight: bold;
      color: $primary-color;
    }
    .reason__wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      grid-gap: 20px;
      margin-top: 3rem;
      margin-bottom: 3rem;
      .reason__card{
        box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
        padding: 2rem;
        .icons{
          max-width: 50px;
          height: auto;
        }
        h5{
          font-weight: bold;
          color: #2b2b2b;
          padding: .7rem 0;
        }
        p{
          // opacity: .95;
          // padding-top: .4rem;
          font-weight: 400;
          line-height: 1.7;
          color:#627081;
          font-size: .93rem;
        }
      }
    }
  }

  //MEDIA QUERIES
  @media only screen and (max-width: 600px){
    .about__wrapper{
      padding: 4rem 0;
      p{
        font-size: .9rem;
      }
    }
    .about__content{
      .heading {
        h1{
          font-size: 1.8rem;
        }
        p{
          font-size: 1rem;
          color: #627081;
        }
      }
    }
  }
</style>