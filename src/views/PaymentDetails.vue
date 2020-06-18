<template>
  <div class="signin__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-7">
                  <h4 class="pt-5"><router-link to="/" class="logo">Home page</router-link></h4>
                  <div class="text">
                      <h1>Account Details!</h1>
                      <h5>Please make sure you only make payment to accounts provided here as anything outside of this is at your own risk.</h5>
                  </div>
                  <div class="row details">
                      <div class="col-md-6 wrapper">
                        <h6>Bank Name: First Bank of Nigeria PLC</h6>
                        <hr>
                          <p>Account Name: Efe Eloho</p>
                          <p>Account Number: 3150203415</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase';
export default {
    name: 'PaymentDetails',
    data(){
        return{
            name:null,
            email:null,
            phone:null,
            err:null,
            loading: false,
            success:null
        }
    },
    methods:{
        redirec(){
            setTimeout(() => {
                this.$router.push({name: 'PaymentDetails'})
            }, 4000);
        },
        signin(){
            this.loading = true;
            //Check if the user has filled out the form
            if(!this.name || !this.email || !this.phone){
                this.loading = false
                this.err = 'Please fill out the form first before submitting!'
            }else{
                db.collection('signals').add({
                    name:this.name,
                    email:this.email,
                    phone:this.phone
                }).then(()=>{
                    this.loading = false
                    this.success = 'Your subcription was successful. Please make your payment into the provided accounts'
                    this.redirec();
                })
                
                .catch(err=>{
                    this.loading = false
                    this.err = err.message
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signin__wrapper{
    background: $primary-color;
    // color: #fff;
    height: 100vh;
    .logo{
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
    .text{
        padding-top: 5rem;
        color: #fff;
        h1{
            font-weight: 900;
            font-size: 3rem;
            padding-bottom: 1.2rem;
        }
        h5{
            font-weight: 400;
            font-size: .9rem;
            opacity: .8;
            letter-spacing: .5px;
            line-height: 1.6;
        }
    }
    .details{
        padding-top: 3rem;
        .wrapper{
            h6{
                color: #fff;
                opacity: .8;
            }
             p{
                color: #fff;
                opacity: .8;
                font-size: .9rem;
            }
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .signin__wrapper{
        height: 100% !important;
        padding: 4rem 0;
        h1{
             font-size: 2rem !important;
         }
    }
     .form__wrapper{
         margin-top: 2rem !important;
         margin-bottom: 1rem;
         form{
             .signin__btn{
                 width: 100% !important;
             }
         }
     }
}
</style>