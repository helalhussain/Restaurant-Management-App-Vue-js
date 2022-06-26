<script>
import axios from 'axios'
export default{
    name:'Signup',
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
          
            if(this.name=="" || this.email=="" || this.password==""){
                alert("Required");
             }
           else{
                let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            if(result.status == 201)
                 localStorage.setItem("user-info",JSON.stringify(result.data))
                  this.$router.push({name:'Home'})
                  
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'});
        }
   }

 }

</script>

<template>
        
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
                   </div> 

                    <button v-on:click="signupBtn" type="button" class="btn btn-info">Sign Up</button>
                </div>
            </div>
            <div class="col-lg-4"></div>
           
        </div>
</template>