<template>
<div>
<Header/>
            <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">

                <div class="card p-3">
                    <h2 class="text-center p-3">Add Restaurant</h2>
                       <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" v-model="name" placeholder="Name"  class="form-control" >
                   </div>
                    <div class="form-group">
                        <label for="">Address</label>
                        <input type="text" v-model="address" placeholder="Address"  class="form-control" >
                   </div>
                 <div class="form-group">
                        <label  for="">Contact</label>
                        <input type="text" v-model="contact" placeholder="Contact" class="form-control"  >
                   <span class="text-danger"></span>
                   </div> <br/>

                    <button v-on:click="add" type="button" class="btn btn-info">Add Restaurant</button>
                </div>
            </div>
            <div class="col-lg-4"></div>
           
        </div>
</div>


</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name:'add',
    components:{
        Header
    },
    data(){
        return {
            name:'',
            address:'',
            contact:''
        }
    },
    methods:{
        async add () {
            let result = await axios.post("http://localhost:3000/restaurant",{
                name:this.name,
                address:this.address,
                contact:this.contact
            });
            if(result.status=201){
               
                  this.$routes.push({name:'Home'});
            }
        }
    }
}

</script>