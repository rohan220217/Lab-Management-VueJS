<template>
  <v-container>
    <v-row>
  
      <v-col v-for="product in products" col="12" xs="6" sm="6" md="4" lg="3">
        <v-card color="grey lighten-4" hover shaped>
          <v-card-title>{{product.title}}</v-card-title>
          <v-card-subtitle>{{product.category}}</v-card-subtitle>
          <v-card-text>{{product.description}}</v-card-text>
          <v-card-subtitle>{{product.in_stock}}</v-card-subtitle>
          <v-card-actions>
            <v-btn  left small rounded color="primary accent-2">Info</v-btn>
            <v-btn @click="issue(product._id)" right small rounded color="green lighten-2" v-if="isLoggedIn">Issue</v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.$store.dispatch('getProduct')
  },
  computed: {
    products(){
      return this.$store.state.Products;
    },
    isLoggedIn(){
      return  this.$store.state.isLoggedIn
    }
  
  },
  methods: {
    issue(id){
      axios
        .post('http://localhost:4000/admin/cart/'+id)
        .then(res => {
          console.log(res);
          this.$router.push('/activity')
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
