<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner4.jpeg" alt="First slide" />
          <div class="carousel-caption">
            <h1 class="animate__animated animate__bounceIn">EARN 80% of YOUR <span class="orange">INITIAL INVESTMENT IN 4 DAYS</span></h1>
            <p>You can grow your initial investment to as much as 80% in 4 days or in 24 hours when you select our promo plans. This applies to only new members. No stories, no stress.</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner5.jpg" alt="Second slide" />
           <div class="carousel-caption">
            <h1 class="animated slideInDown animate3d">YOUR INVESTMENT IS <span class="orange">SAFE & SECURED</span></h1>
            <p
              class="animated slideInRight animate3d"
            >We leverage bank grade security to encrypt all our investors data to make sure their investments is 100% safe and secured</p>
             <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/bsnner2.jpeg" alt="Third slide" />
          <div class="carousel-caption">
            <h1 class="animated slideInDown animate3d">Helping you make <span class="orange">smart investments</span></h1>
            <p
              class="animated slideInRight animate3d"
            >Our investment plans provides equall investment opportunities for everyone. You can begin with as little as &#8358;10,000.00. Why not join the winning team!</p>
             <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4,9,30,.9);
  }
  .carousel-img {
    width: auto;
    height: 90vh;
    display: block !important;
    width: 100vw;
  }
   .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 20%;
    transform: translateX(-50%, -50%);
    width: 50%;
    text-align: left;
    color:#fff;
    h1 {
      font-weight: 900;
      font-size: 2.9rem;
      padding-bottom: 1.2rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      text-shadow: 0.01em 0.01em 0.05em;
      line-height: 1.3;
      border-color: rgba(0, 0, 0, 0.26);
      color: rgb(255, 255, 255);
      transform: perspective(600px);
    }
    .text-color{
      color: $primary-color;
      text-shadow: 0.02em 0.02em 0.03em $primary-color;
    }
    p {
      // letter-spacing: 1px;
      font-size: .95rem;
      padding-bottom: 3rem;
      opacity: 0.7;
      line-height: 1.8;
    }
    .orange{
      color: $secondary-color;
    }
    .fa-long-arrow-alt-right{
      margin-left: 0rem;
      animation-name: animate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .carousel-btn {
      color: #fff;
      background: $secondary-color;
      padding: 1.3rem 2.5rem;
      text-align: center;
      font-size: .9rem;
      font-weight: normal;
      text-decoration: none;
      border-radius: 50px;
      border: 1px solid $primary-color;
      text-transform: capitalize;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
}

@media only screen and (max-width: 600px){
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(4,9,30,.85) !important;
  }
    .carousel-caption{
      position: absolute;
      top: 10%;
      transform: translateX(-50%, -50%);
      width: 70% !important;
      text-align: center !important;
      h1{
        text-align: center !important;
        font-weight: 700;
        font-size: 1.5rem !important;
        padding-bottom: 1rem;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        text-shadow: 0.03em 0.03em 0.05em #fff;
        line-height: 1.3;
      }
      p{
        font-size: .8rem !important;
      }
    }
     .carousel-img {
    width: auto;
    height: 80vh !important;
    display: block !important;
    width: 100vw;
  }
}
//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(20px);
        opacity: 1;
    }
}
</style>