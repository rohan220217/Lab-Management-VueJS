<template>
  <v-container>
    <v-form ref="form">
      <p class="display-3">Edit Product</p>
      <v-text-field v-model="product.title" label="Title" required class="mt-5"></v-text-field>
      <v-text-field v-model="product.category" label="Category" required></v-text-field>
      <v-text-field v-model="product.description" label="Description" required></v-text-field>

      <v-slider v-model="product.in_stock" label="In Stock" class="mt-4" required thumb-label></v-slider>

      <v-btn color="success" class="mr-4" @click="add">Edit Product</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    product: {
      title: "",
      category: "",
      description: "",
      in_stock: ""
    }
  }),
  props: ["id"],
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    add() {
      axios
        .put("http://localhost:4000/admin/edit-product/" + this.id, this.product)
        .then(res => {
          console.log(res);
          this.$router.push("/admin-product");
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    axios
      .get("http://localhost:4000/admin/edit-product/" + this.id)
      .then(res => {
        console.log(res);
        this.product = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>