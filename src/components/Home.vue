
<template>
    <div>
       <Header/>
       <br/>

      <div class="container">
         <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Update</th>
                <th>Delate</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td scope="row">{{item.id}}</td>
                <td scope="row">{{item.name}}</td>
                <td scope="row">{{item.address}}</td>
                <td scope="row">{{item.contact}}</td>
                <td><router-link :to="'/update/'+item.id" class="btn btn-dark">Update</router-link></td>
                <td><button v-on:click="delete(item.id)" class="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
       </table>
       
      </div>
    </div>
</template>

<script>
   import Header from './Header.vue'
   import axios from 'axios'
export default{
    name:'Home',
    components:{
        Header
    },
    data(){
        return {
            name:'',
            restaurants:''
        }
    },
    methods:{
        delete(id){
            alert("ccc");
            console.warn(id);
        }
    },
    async mounted(){
 
        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurants=result.data
        
    }
}

</script>