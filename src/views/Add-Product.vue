<template>
  <v-container>
    <v-form ref="form">
      <p class="display-3">Add Product</p>
      <div class="text-center">
  
      </div>
      <v-text-field v-model="product.title" label="Title" required class="mt-5"></v-text-field>
      <v-text-field v-model="product.category" label="Category" required></v-text-field>
      <v-text-field v-model="product.description" label="Description" required></v-text-field>

      <v-slider v-model="product.in_stock" label="In Stock" class="mt-4" required thumb-label></v-slider>

      <v-btn color="success" class="mr-4" @click="add">Add Product</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: function() {
    return {
      product: {
        title: "",
        category: "",
        description: "",
        in_stock: ""
      },
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();

    },
    add() {
      this.$store.dispatch("updateProduct", this.product);
      this.$router.push("/");
    }
  }
};
</script>