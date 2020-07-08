<template>
  <div class="contact">
      <Topbar />
      <Navbar />
        <div class="contact__wrapper">
          <div class="container">
           <div class="row">
             <div class="col-md-5 text">
               <h2>Reach out to us today!</h2>
               <hr>
               <p>We have a dedicated and professional customer success team who is always ready to respond to all your queries!</p>
               <h5><i class="fa fa-home"></i>Head Office</h5>
               <h6>2609 W. Orangethrope Ave, Fullerton, CA 90621m, United States of America</h6><br>
               <h5><i class="fab fa-whatsapp"></i>WhatsApp Only</h5>
               <h6>+19146508213</h6>
             </div>
             <div class="col-md-1"></div>
             <div class="col-md-6">
               <form @submit.prevent="contact()">
                 <div class="form-group">
                   <input type="text" class="form-control" placeholder="*Full Name" v-model="name">
                 </div>
                  <div class="form-group">
                   <input type="tel" class="form-control" placeholder="*Phone Number" v-model="phone">
                 </div>
                  <div class="form-group">
                   <input type="email" class="form-control" placeholder="*Email Address" v-model="email">
                 </div>
                  <div class="form-group">
                   <input type="text" class="form-control" placeholder="*Subject" v-model="subject">
                 </div>
                 <div class="form-group">
                   <textarea name="" id="" cols="10" rows="6" class="form-control" v-model="message"></textarea>
                 </div>
                 <div v-if="success" class="alert alert-success">
                   {{success}}
                 </div>
                   <div v-if="err" class="alert alert-danger">
                   {{err}}
                 </div>
                 <button type="submit" class="form__btn">SEND</button>
               </form>
             </div>
           </div>
          </div>
        </div>
      <Footer />
  </div>
</template>

<script>
import db from "@/firebase/init"
import firebase from 'firebase'
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
components:{
    Topbar,
    Navbar,
    Footer
},
data(){
  return{
    name: null,
    phone: null,
    email: null,
    subject: null,
    message: null,
    success: null,
    err: null
  }
},
methods:{
  contact(){
    if(!this.name || !this.phone || !this.email || !this.subject || !this.message){
      this.err = "Oops! Please completely fill out the form and try again"
    }else{
      db.collection('messages').add({
        name: this.name,
        phone: this.phone,
        email: this.email,
        subject: this.subject,
        message: this.message
      }).then(()=>{
        this.success = "Congratulations. Message was successfully sent and we will process your request immediately"
      })
    }
  }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.contact__wrapper{
    background:linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('../assets/images/section-banner5.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 3rem 0;
  .text{
    h2{
      font-weight: bold;
      color: $secondary-color;
      // padding-bottom: 2rem;
    }
    p{
      font-size: .9rem;
      opacity: .8;
      line-height: 2;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    hr{
      background: #fff;
    }
    .fa-home, .fa-whatsapp{
      color: $secondary-color;
      margin-right: .5rem;
    }
    h5{
      font-size: 1rem;
    }
    h6{
      font-size: .85rem;
      opacity: .8;
      padding-top: 1rem;
      line-height: 1.7;
    }
  }
  form{
    input{
      height: 3rem;
      box-shadow: none;
      border-radius: 0px;
      margin-bottom: .4rem;
      border: none
    }
    .form__btn{
       background: $secondary-color;
        width: 100%;
        border:none;
        padding: .7rem 1rem;
        font-weight: bold;
        font-size: .95rem;
        outline: none;
    }
  }
}
//MEDIA QUERIES
  @media only screen and (max-width: 600px){
    .contact__wrapper{
      padding: 4rem 0;
      p{
        font-size: .9rem;
      }
    }
    .contact__wrappert{
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