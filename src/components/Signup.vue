

<template>
<div>
   <Header />


 <br/>
        <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">

                <div class="card p-3">
                    <h2 class="text-center p-3">Sign up</h2>
                       <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" v-model="name" placeholder="Name"  class="form-control" >
                   </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" v-model="email" placeholder="Email"  class="form-control" >
                   </div>
                 <div class="form-group">
                        <label  for="">Password</label>
                        <input type="password" v-model="password" placeholder="Password" class="form-control"  >
                   <span class="text-danger"></span>
                   </div> <br/>

                    <button v-on:click="signupBtn" type="button" class="btn btn-info">Sign Up</button>
                </div>
            </div>
            <div class="col-lg-4"></div>
           
        </div>
    </div>

</template>
<script>

import Header from './Header.vue'
import Home from './Home.vue'
import axios from 'axios'
export default{
    name:'Signup',
        components:{
        Header,
        Home
    },
     data(){
         return {
             name:'',
             email:'',
             password:''
         }
     },

    methods:{
   async signupBtn() 
        {
                let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            if(result.status==201)
            {
                 localStorage.setItem("user-info",JSON.stringify(result.data));
                  this.$routes.push({name:'Home'});
                  
            }
        }
    }
    
 }

</script>