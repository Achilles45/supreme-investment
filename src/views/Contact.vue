<template>
  <div class="contact">
      <Topbar />
      <Navbar />
      <div class="contact__wrapper">
          <div class="container">
            <div class="text text-right">
            <h1>Contact Us</h1>
            <p>Do you have any difficulties using the platform, talk to us now!</p>
        </div>
        </div>
      </div>
      <div class="contact__details">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <div class="info__wrapper d-flex align-items-center">
                        <div class="icon__wrapper">
                                <p><i class="fa fa-envelope"></i></p>
                        </div>
                        <p class="pl-3">  support@supremeinvestment.cash</p>
                    </div>
                  </div><br>
                   <div class="col-md-4">
                      <div class="info__wrapper d-flex align-items-center">
                     <div class="icon__wrapper">
                            <p><i class="fa fa-home"></i></p>
                     </div>
                        <p class="pl-3">NO.12 Unity Close, Ijokoro Sango, Otta, Ogun State, Nigeria.</p>
                    </div>
                  </div>
                  <br>
              </div>
              <div class="row heading">
                  <div class="col-md-2"></div>
                  <div class="col-md-8 text-center">
                      <h1>Contact Us</h1>
                      <h6>Feel free to call us for enquiries or for any form of information and or complaints. Fill the form below and our support team will reach out to you shortly</h6>
                      <div class="col-md-2"></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                       <form @submit.prevent="sendMessage()">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <!-- <label for="">First Name</label> -->
                                      <input type="text" class="form-control" placeholder="Your First Name" v-model="first_name">
                                  </div>
                                   <div class="form-group">
                                        <!-- <label for="">Last Name</label> -->
                                      <input type="text" class="form-control" placeholder="Your Last Name" v-model="last_name">
                                  </div>
                                   <div class="form-group">
                                        <!-- <label for="">Email Address</label> -->
                                      <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone_number">
                                  </div>
                              </div>
                              <div class="col-md-6">
                                   <!-- <label for="">Your Message</label> -->
                                  <textarea name="" id="" cols="20" rows="6" class="form-control" placeholder="Your Message" v-model="message">
                                  </textarea><br><br>
                                   <div v-if="loading" class="loading">
                                      <img src="../assets/images/loader.gif" class="loader__img" alt="">
                                  </div>
                                  <div v-if="err" class="alert alert-danger">
                                      {{ err }}
                                  </div>
                                  <div v-if="success" class="alert alert-success">
                                      {{ success }}
                                  </div>
                                  <button type="submit" class="message__btn">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
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
        first_name:null,
        last_name: null,
        phone_number: null,
        message: null,
        err: null,
        success: null,
        loading:false
    }
},
methods:{
    sendMessage(){
        //Check if all the fields has been filled out
        if(!this.first_name || !this.last_name || !this.phone_number || !this.message){
            this.err = "Please completely fill out the form and try again"
        }else{
            this.loading = true
            db.collection('messages').add({
                first_name:this.first_name,
                last_name: this.last_name,
                phone_number: this.phone_number,
                message: this.message
            }).then(()=>{
                this.loading = false;
                this.success = "Your message was successfully sent. We will get back to you shortly."
            }).catch(err=>{
                this.err = err.message
            })
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.contact__wrapper{
    background: linear-gradient(rgba(4,9,30,.9), rgba(4,9,30,.9)), url('../assets/images/banner4.jpeg');
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 7rem 0;
  .text{
    h1{
      font-weight: 900;
    }
  }
}
.contact__details{
    padding: 5rem 0;
    background: #fff;
    .info__wrapper{
        box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
        background: #fff;
         p{
        // color: #627081;
        font-size: .9rem;
    }
        .icon__wrapper{
            background: $primary-color;
            color: #fff;
            padding: 1.5rem;
        }
        .pl-3{
            font-size: .8rem;
        }
    }
    .heading{
        padding: 3rem 0;
        h1{
            font-weight: 900;
            padding-bottom: .5rem;
        }
         h6{
        color: #627081;
        font-size: .95rem;
        // opacity: .8;
        line-height: 1.8;
    }
    }
    form{
        // background: #fff;
        padding: 2rem;
        border-radius: 3px;
        label{
            font-weight: bold;
            color: #627081;
            font-size: .8rem;
        }
        input{
            height: 3.5rem;
            // margin-bottom: 2rem;
            border-radius: 4px;
            box-shadow: none;
            outline: none;
            border: none !important;
            color: #627081;
            background: #F7F7F7;
            margin-bottom: 2rem;
            &::placeholder{
                color: #627081;
                font-weight: bold;
                font-size: .9rem;
                opacity: .7;
            }
        }
        textarea{
            background: #F7F7F7;
            box-shadow: none;
            outline: none;
            border: none !important;
             color: #627081;
              &::placeholder{
                color: #627081;
                font-weight: bold;
                font-size: .9rem;
                opacity: .7;
            }
        }
        .message__btn{
            background: $secondary-color;
            color: #fff;
            border:none;
            border-radius: 50px;
            // width: 100%;
            padding: 1rem 2rem;
            outline: none;
            &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
    }
}
.loader__img{
    max-width: 150px;
    height: auto;
}
</style>