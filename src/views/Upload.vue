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
                 <li><router-link to="/dashboard/withdrawal"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Make Withdrawal</router-link></li><hr>
                 <li><router-link to="/dashboard/upload"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Upload Payment</router-link></li><hr>  
               <li @click="logOut()" class="logout"><i class="fa fa-database icons"></i>&nbsp;&nbsp; Logout</li><hr>
            </ul>
            <br><br><br><br>
           </div>
           <div class="dashboard__right">
               <div class="dashoard__heading d-none d-md-block">
                 <div class="heading__content d-flex justify-content-between">
                      <div class="toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <div class="email__holder">
                      <h6>{{email}}</h6>
                  </div>
                 </div>
               </div>
              <div class="right__wrapper">
                  <div class="heading d-flex justify-content-between">
                  <div class="content">
                   <h5>Welcome Back!</h5>
                      <h4>{{ name }}</h4>
                      <!-- <small>{{ firstCode }}</small> -->
                  <!-- <small>{{ accountNumber }}</small> -->
                  </div>
                    <div @click.prevent="show()" class="navbar__toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <hr>
              </div>
              <div id="dashboard">
             <small>This is a summary of your activities on this platform</small>
             <hr>
              <div>
                  <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/tickers/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX_IDC%3AEURUSD%22%7D%2C%7B%22description%22%3A%22GBP%2FUSD%22%2C%22proName%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22description%22%3A%22USD%2FJPY%22%2C%22proName%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22description%22%3A%22NZD%2FUSD%22%2C%22proName%22%3A%22FX%3ANZDUSD%22%7D%2C%7B%22description%22%3A%22AUD%2FUSD%22%2C%22proName%22%3A%22FX%3AAUDUSD%22%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A72%2C%22utm_source%22%3A%22cryptomorefx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%7D" style="box-sizing: border-box; height: 72px; width: 100%;"></iframe>
              </div>
              <div v-if="verifyuser == 'false'" class="red">
                  Your account has not been verified. Please make your payment for verification or call <a href="tel:07061116827">07061116827</a>
              </div>
                        <div >
                        <p>Upload Your Proof of Payment:</p>
                        <input type="file" @change="previewImage" accept="image/*" >
                        </div>
                        <div>
                        <p>Progress: {{uploadValue.toFixed()+"%"}}
                        <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
                        </div>
                        <div v-if="imageData!=null">
                            <img class="preview" :src="picture">
                            <br>
                        <button @click="onUpload" class="upload__btn">Upload Proof</button>
                        </div>
              </div>
              <hr>
              <p class="note">Kindly note that your investment lifecycle will only begin to count when you have been verified to have made payment for your selected plan. Your returns of 60% of your investment and your capital would be paid back in 5 working days. Also, should you find any difficulties in using the platform, kindly use livechat widget to send a message and our customer success team will respond as soon as possible. Happy investing.</p>
              </div>
            <!--End of Dashboard
            =========================-->
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
            email:null,
            name:null,
            account_type:null,
            id:null,
            available_balance:null,
            verifyuser:null,
            imageData:null,
            picture:null,
            uploadValue: 0
        }
    },
    computed:{
        available(){
            return this.available_balance * 0.6
        }
    },
     methods:{
        previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        //   this.picture =url;
        });
      }
      );
    },
    show:function(){
            const navLeft = document.querySelector('#dashboard__left')
            navLeft.classList.toggle('navLeft')
        },
        //Remove the left section of the dashbord
        shiftLeft(){
            const navLeft = document.querySelector('#dashboard__left')
            const toggler = document.querySelector('.toggler');
            toggler.addEventListener('click', ()=>{
                navLeft.classList.remove()
            })

        },
         //Function for the user to logout
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Signin'})
           })
        },
    },
        mounted(){
        //Get current user that just logged in
        let user = firebase.auth().currentUser

        //Now check the database to fetch the details
        db.collection('users').where("user_id", "==", user.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.name = doc.data().name,
                this.email = doc.data().email,
                this.available_balance = doc.data().available_balance,
                this.account_type = doc.data().account_type,
                this.verifyuser = doc.data().verifyuser
                this.id = doc.data().user_id
            })
        })
    }
    }
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.upload__btn{
    background: #000;
    border:none;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 3px;
    font-size: .8rem;
}
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
            font-size: .7rem;
        }
        .user__img{
            max-width: 80px;
            height: auto;
            margin-bottom: 2rem;
        }
        h5{
            opacity: .8;
            font-size: 1rem;
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
        background: #F4F6F9;
        // padding: 3rem 2.5rem;
        .right__wrapper{
              padding: 2rem 2rem;
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
        }
       small{
            color:#627081;
           font-size: .8rem;
           font-weight: bold;
           opacity: .8;
       }
       .dashoard__heading{
           background-color: #FBAE1C;
           padding: 1.2rem 2rem;
           display: flex;
           justify-content: space-between;
          h6{
               font-size: .9rem;
               color: #fff;
          }
       }
        .note{
            color: #627081 !important;
            font-size: .8rem;
            line-height: 1.7;
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
     .right__wrapper{
              padding: 1rem .5rem !important;
        }
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
</style>