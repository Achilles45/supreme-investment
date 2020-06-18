<template>
  <div class="signup">
        <div class="form__wrapper">
           <h4 class="text-center">Create an Account</h4>
           <P class="text-center">It is simple and can be completed in a minute!</P>
           <hr>
           <form @submit.prevent="signup()">
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Username" v-model="name">
               </div>
                <div class="form-group">
                   <input type="email" class="form-control" placeholder="Enter your email address" v-model="email">
               </div>
                <div class="form-group">
                   <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
               </div>
               <div class="form-group">
                      <small id="passwordHelpBlock" class="form-text text-muted">Select your account type</small>
                  <select class="form-control" id="inlineFormCustomSelect" v-model="account_type">
                            <option value="20,000">&#8358;20,000 to &#8358;32,000</option>
                            <option value="30,000">&#8358;30,000 to &#8358;52,000</option>
                            <option value="40,000">&#8358;40,000 to &#8358;70,000</option>
                            <option value="50,000">&#8358;50,000 to &#8358;89,000</option>
                            <option value="60,000">&#8358;60,000 to &#8358;106,000</option>
                            <option value="70,000">&#8358;70,000 to &#8358;124,000</option>
                            <option value="80,000">&#8358;80,000 to &#8358;142,000</option>
                            <option value="90,000">&#8358;90,000 to &#8358;160,000</option>
                            <option value="100,000">&#8358;100,000 to &#8358;180,000</option> 
                             <option value="50,000">&#8358;50,000 to &#8358;150,000 (Promo plan)</option>
                            <option value="100,000">&#8358;100,000 to &#8358;300,000 (Promo plan)</option>
                            <option value="150,000">&#8358;150,000 to &#8358;450,000 (Promo plan)</option>
                            <option value="200,000">&#8358;200,000 to &#8358;600,000 (Promo plan)</option>
                            <option value="250,000">&#8358;250,000 to &#8358;750,000 (Promo plan)</option>
                         </select>
               </div>
               <div class="form-group">
                    <small id="passwordHelpBlock" class="form-text text-muted">Select your Bank</small>
                   <select class="form-control " id="bank" v-model="user_bank">
<option selected>Choose</option>
<option value="access">Access Bank</option>
          <option value="citibank">Citibank</option>
          <option value="diamond">Diamond Bank</option>
          <option value="ecobank">Ecobank</option>
          <option value="fidelity">Fidelity Bank</option>
          <option value="firstbank">First Bank</option>
          <option value="fcmb">First City Monument Bank (FCMB)</option>
          <option value="gtb">Guaranty Trust Bank (GTB)</option>
          <option value="heritage">Heritage Bank</option>
          <option value="keystone">Keystone Bank</option>
          <option value="polaris">Polaris Bank</option>
          <option value="providus">Providus Bank</option>
          <option value="stanbic">Stanbic IBTC Bank</option>
          <option value="standard">Standard Chartered Bank</option>
          <option value="sterling">Sterling Bank</option>
          <option value="suntrust">Suntrust Bank</option>
          <option value="union">Union Bank</option>
          <option value="uba">United Bank for Africa (UBA)</option>
          <option value="unity">Unity Bank</option>
          <option value="wema">Wema Bank</option>
          <option value="zenith">Zenith Bank</option>
</select>
               </div>
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Account Number" v-model="user_account_number">
               </div>
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Account Name" v-model="user_bank_name">
               </div>
               <div class="form-group">
                   <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
               </div>
                <div class="form-group">
                   <input type="password" class="form-control" placeholder="Repeat Password" v-model="repeat_password">
               </div>
                 <div v-if="err" class="alert alert-danger animated slideInRight">
                   {{ err }}
               </div>
                <div v-if="loading" class="loading text-center">
                              <img src="../assets/images/loader.gif" class="loader" alt="">
                          </div>
               <button type="submit" class="signup__btn">Create Account</button>
               <div class="bottom text-center pt-4">
                   <p>Have an account already? <router-link to="/signin">Sign In</router-link></p>
               </div>
           </form>
        </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    data(){
        return{
            name: null,
            email: null,
            phone: null, 
            account_type:null,
            password: null,
            repeat_password: null,
            err: null,
            loading:false,
            available_balance:null,
            verifified: 'false',
            user_bank:null,
            user_account_number:null,
            user_bank_name:null,
        }
    },
    methods:{
        signup(){
            this.loading = true
            //Check if the user has filled out all the required details
            if(!this.name || !this.email || !this.phone || !this.account_type || !this.user_bank || !this.user_account_number || !this.user_bank_name || !this.password || !this.repeat_password){
                this.loading = false
                this.err = 'Registration failed. Please fill out the form and try again!'
            }else if (this.password != this.repeat_password){
                //Check to see if the passwords are same
                this.loading = false
                this.err = 'Oops! Your password did not match'
            }else{
                //Signup the user
                this.loading = true
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((cred)=>{
                     db.collection('users').add({
                        name:this.name,
                        phone:this.phone,
                        email:this.email,
                        account_type:this.account_type,
                        user_id:cred.user.uid,
                        available_balance:'0',
                        verifyuser:'false',
                        bank_name: '',
                        account_number:'',
                        account_name:'',
                        wallet_address:'',
                        user_bank:this.user_bank,
                        user_bank_name:this.user_bank_name,
                        user_account_number:this.user_account_number

                })
                this.loading = false
                this.$router.push({name: 'dashboard'})
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signup{
    background: $primary-color;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form__wrapper{
        background: #fff;
        border-radius: 4px;
        padding: 2rem;
        margin: 4rem 1rem;
         width: 500px;
         max-width: 100%;
         h4{
                font-weight: bold;
                color: #000;
                padding-top: 1rem;
                text-transform: uppercase;
            }
            p{
                padding-bottom: 1rem;
                color: #627081;
                font-size: .9rem;
            }
        form{
            input, select{
                height: 3.2rem;
                border-radius: 0px;
                box-shadow: none;
                // border:1px solid #000;
                &::placeholder{
                    text-transform: uppercase;
                    font-size: .7rem;
                    color: #627081;
                }
                 .small{
                color: #000 !important;
                font-weight: bold !important;
            }
            }
             .loader{
                max-width: 250px;
                height: 100px;
            }
            .signup__btn{
                background: $secondary-color;
                color: #fff;
                padding: .8rem 2rem;
                border: 1px solid $secondary-color;
                width: 100%;
                border-radius: 4px;
            }
        }
    }
}
</style>