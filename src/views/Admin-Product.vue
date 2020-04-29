<template>
  <v-container>
    <v-alert
      dense
      type="warning"
      outlined
      dismissible
      v-model="value"
      transition="slide-x-reverse-transition"
    >
      The product is 
      <strong>Deleted</strong>
    </v-alert>
    <v-row>
      <v-col v-for="product in products" col="12" xs="6" sm="6" md="4" lg="3">
        <v-card color="grey lighten-4" hover shaped>
          <v-card-title>{{product.title}}</v-card-title>
          <v-card-subtitle>{{product.category}}</v-card-subtitle>
          <v-card-text>{{product.description}}</v-card-text>
          <v-card-subtitle>{{product.in_stock}}</v-card-subtitle>
          <v-card-text v-show="false" value></v-card-text>
          <v-card-actions>
            <v-btn :to="`/edit-product/${product._id}`" left small rounded color="yellow">Edit</v-btn>
            <v-btn @click="deleted(product._id)" right small rounded color="red accent-2">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: function(){
    return{
      value: false
    }
  },
  computed: {
    products() {
      return this.$store.state.Products;
    }
  },
  methods: {
    deleted(id) {
      axios
        .delete("http://localhost:4000/admin/delete-product/" + id)
        .then(res => {
          console.log(res);
          this.value = true
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
