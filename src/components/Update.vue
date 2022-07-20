<template>
<div>
<Header/><br/>
            <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">

                <div class="card p-3">
                    <h2 class="text-center p-3">Update Restaurant</h2>
                       <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" v-model="restaurant.name" placeholder="Name"  class="form-control" >
                   </div>
                    <div class="form-group">
                        <label for="">Address</label>
                        <input type="text" v-model="restaurant.address" placeholder="Address"  class="form-control" >
                   </div>
                 <div class="form-group">
                        <label  for="">Contact</label>
                        <input type="text" v-model="restaurant.contact" placeholder="Contact" class="form-control"  >
                   <span class="text-danger"></span>
                   </div> <br/>

                    <button v-on:click="update" type="button" class="btn btn-info">Update Restaurant</button>
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
        name:'update',
        components:{
            Header
        },
        data(){
            return {
               restaurant:{
                name:'',
                address:'',
                contact:''
               }
                
            }
        },
        methods:{
          async update(){
                let  res = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                    name:this.restaurant.name,
                    address:this.restaurant.address,
                    contact:this.restaurant.contact


                });
            }
        },
      async mounted(){
            const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
            this.restaurant=result.data
      }
    }
</script>