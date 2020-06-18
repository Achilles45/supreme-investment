<template>
    <div class="dashboard">
        <div class="dashboard__wrapper">
           <div class="dashboard__left" id="dashboard__left">
            <div class="heading text-center pt-3">
                    <img src="../assets/images/user.png" class="user__img" alt=""><br>
                       <small>{{id}}</small><br><br>
                       <!-- <h4>{{ first_name }} {{ last_name }}</h4> -->
                         <small>Please refresh the page if no data was loaded as we depend on strong internet connection. Or contact support if you have any issue</small>
            </div>
            <br /><br />
            <ul>
               <li><router-link to="/dashboard/overview"><i class="fa fa-cubes icons"></i>&nbsp;&nbsp; Overview</router-link></li><hr> 
                <li><router-link to="/dashboard/profile"><i class="fa fa-users icons"></i>&nbsp;&nbsp; Profile</router-link></li><hr>
                    <li><router-link to="/dashboard/payment"><i class="fa fa-credit-card icons"></i>&nbsp;&nbsp; Deposit</router-link></li><hr> 
                     <li><router-link to="/dashboard/upload"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Upload Payment</router-link></li><hr>
                 <li><router-link to="/dashboard/withdrawal"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Make Withdrawal</router-link></li><hr> 
               <li @click="logOut()" class="logout"><i class="fa fa-database icons"></i>&nbsp;&nbsp; Logout</li><hr>
            </ul>
            <br><br><br><br>
           </div>
           <div class="dashboard__right ">
              <div class="heading d-flex justify-content-between">
                  <div class="content">
                      <h4>You are logged as </h4>
                      <h2>{{ name }}</h2>
                      <!-- <small>{{ firstCode }}</small> -->
                  <!-- <small>{{ accountNumber }}</small> -->
                  </div>
                    <div @click.prevent="show()" class="navbar__toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <hr>
              </div>
              <div id="dashboard">
             <small>You can now make request to make withdrawal into your local bank when your investment has reached maturity</small>
             <hr>
              <div v-if="verifyuser == 'false'" class="red">
                  You can't make withdrawals because your account or payment has not been verified. Please contact admin or call <a href="tel:07061116827">07061116827</a>
              </div>
               <div class="row">
                   <div class="col-md-8">
                        <form @submit.prevent="withdraw()">
                    <div class="form-group">
                        <input type="text" class="form-control" disabled  v-bind:value="id">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bank_name">Your Bank</label>
                               <input type="text" class="form-control" disabled v-bind:value="user_bank">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="account">Your Account Number</label>
                                <input type="text" class="form-control" disabled v-bind:value="user_account_number">
                            </div>
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="account">Your Account Name</label>
                        <input type="text" class="form-control" disabled v-bind:value="user_bank_name">
                            </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="date" class="form-control" placeholder="When do you want the transfer" v-model="date">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control"  v-bind="amount" placeholder="Amount to withdraw" v-model="amount">
                        </div>
                        </div>
                    </div><div v-if="err" class="alert alert-danger animated slideInRight">
                                {{ err }}
                            </div>
                            <div v-if="success" class="alert alert-success">
                                {{ success }}
                            </div>
                    <button type="submit" class="withraw_btn">Transfer Now</button>
                </form>
                   </div>
               </div>
              </div>
              <br>
           </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    data(){
        return{
            id:null,
            email:null,
            name:null,
            plan:null,
            verifyuser:null,
            //Data for the withdrawal process
            user_bank:null,
            user_bank_name:null,
            user_account_number:null,
            date:null,
            amount:null,
            account_type:null,
            err:null,
            success:null,
            investmentReturns:null
        }
    },
    computed:{
        verifyuser(){
            return this.verifyuser = this.verifyuser
        }
    },
    methods:{
          show:function(){
            const navLeft = document.querySelector('#dashboard__left')
            navLeft.classList.toggle('navLeft')
        },
        //Function for the user to logout
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Signin'})
           })
        },
        //Function for the withdrawal process here
        withdraw(){
           setTimeout(() => {
               // Check if the user has filled the form
           if(!this.user_bank || !this.user_bank_name ||!this.user_account_number|| !this.amount || !this.date){
               this.err = 'Please completely fill the form and try again'
               this.removeAlert()
           }else if(this.amount > this.investmentReturns){
               this.err = 'Transaction failed. You do not have sufficient balance in your wallet';
           }else if(this.verifyuser == 'false'){
               this.err = 'Withdrawal failed. Please contact admin for verification'
           }
           else{
               this.success = 'Your withdrawal request was submitted successful. We will get back to you in 24 hours'
           }
           }, 5000);
        },
         removeAlert(){
        setTimeout(() => {
            document.querySelector('.message').remove()
        }, 5000);
    }
    },
        mounted(){
        //Get current user that just logged in
        let user = firebase.auth().currentUser

        //Now check the database to fetch the details
        db.collection('users').where("user_id", "==", user.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.name = doc.data().name,
                this.email = doc.data().email,
                this.account_type = doc.data().account_type
                this.verifyuser = doc.data().verifyuser
                this.id = doc.data().user_id,
                this.user_bank = doc.data().user_bank,
                this.user_bank_name = doc.data().user_bank_name,
                this.user_account_number = doc.data().user_account_number
            })
        })
    }
    }
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.dashboard{
    width: 100vw;
    .dashboard__wrapper{
    display: grid;
    grid-template-columns:  260px 1fr;
    // grid-gap: 30px;
     .dashboard__left{
        background: #252525;
        padding: 1rem 2rem;
        color:#fff;
        height: 100% !important;
        small{
            opacity: .6;
            font-size: .75rem;
        }
        .user__img{
            max-width: 80px;
            height: auto;
            margin-bottom: 2rem;
        }
        h5{
            opacity: .8;
            font-size: 1.1rem;
            padding-bottom: .5rem;
        }
        ul{
            li a, .logout{
                cursor: pointer !important;
                // border-bottom: 1px solid #ccc;
                line-height: 3;
                font-size: .8rem;
                opacity: .7;
                color: #fff;
                text-decoration: none !important;
                .icons{
                    margin-right: 1rem !important;
                }
            }
        }
    }
    .dashboard__right{
        background: #fafafa;
        padding: 3rem 2.5rem;
        .heading{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  position: relative;
                  .navbar__toggler{
                      color:$primary-color;
                      position: absolute;
                      right: 5%;
                  }
              }
       small{
            color:#627081;
           font-size: .8rem;
           font-weight: bold;
           opacity: .8;
       }
        .summary__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 30px;
            margin-top: 2rem;
            .summary__card{
                display: flex;
                padding: 1.3rem 2rem;
                border-radius: 4px;
                // font-size: .9rem;
                color:#fff !important;
                margin-bottom: 2rem;
                p{
                    color:#fff !important;
                    padding-top: .4rem;
                    opacity: .9;
                    font-size: .7rem;
                    line-height: 1.4rem;

                }
                h5{
                    color:#fff;
                    font-size: 1rem;
                }
            }
            .one{
                    background: #ff808b;
                }
                .two{
                    background: #757afc;
                }
                .three{
                    background: #0facf3;
                }
                .four{
                    background: #251F68;
                }
        }
            //REQUEST FORM
            form{
                 box-shadow: 0px 6px 60px -7px rgba(69,77,89,0.15);
                 padding: 2rem;
                 margin: 2rem 0;
                  .err{
                background: $secondary-color;
                color: #fff;
                border-radius: 3px;
                padding:.9rem 1rem;
                margin-bottom: 1rem;
                font-size: .9rem;
            }
                 h4{
                     font-weight: bold;
                     font-size: 1rem;
                     color:#454545;
                 }
                 small{
                     color:#545454;
                     font-weight: bold;
                     opacity: .7;
                     font-size: .8rem;
                 }
                 label{
                     font-size: .8rem;
                     font-weight: bold;
                     color:#545454;
                     opacity: .7;
                 }
                 input, select{
                     height: 3.5rem;
                     box-shadow: none;
                     border-radius: 0px;
                     font-size: .9rem;
                 }
                 .withraw_btn{
                     background: $primary-color;
                     color:#fff;
                     margin-top: 1.5rem;
                     border-radius: 3px;
                     padding: 1rem 3rem;
                     border: none;
                     font-size: .9rem;
                 }
                 .alert{
                     font-size: .9rem;
                 }
            }
        .invest__img{
            max-height: 50vh;
            width: 100vw;
        }
        h5{
            color:#454545;
            font-weight: bold;
            padding-bottom: 1.2rem;
            padding-top: 1rem;
        }
        p{
            padding-top:1rem;
            color:#545454;
            font-size: .9rem;
        }
    }
}
}
.navbar__toggler{
    display: none
}

.navLeft{
    display: block !important;
    transition: all ease-in-out .5s;
    width: 70%;
    position: absolute;
    z-index: 100;
    bottom: 0 !important;
    top: 0 !important;
}

//MEDIA QUERIES FOR SMALLER SCREENS
@media only screen and (max-width: 600px){
    .dashboard{
        // grid-template-columns: 1fr;
        position: relative;
    }
    .dashboard__left{
        background: #252525 !important;
        display: none;
    }
.dashboard__right{
    width: 100vw !important;
    padding: 3rem 1.2rem !important;
}
.summary__wrapper{
    grid-gap: 5px !important;
}
.navbar__toggler{
    display: block !important;
}
}
.loader{
    max-width: 150px;
    height: auto;
}
.withraw_btn{
    background: $primary-color;
    padding: 1rem 3rem;
    border-radius: 3px;
    border: none;
    color: #FFF;
}
 .red{
            background: rgb(161, 39, 39);
            color: #fff;
            padding: 1rem .5rem;
            border-radius: 3px;
            font-size: .85rem;
            opacity: .9;
            a{
                color:#fff !important;
            }
        }
</style>