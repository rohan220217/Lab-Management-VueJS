<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <div v-if="error">
          <app-alert :text="error" ></app-alert>
        </div>
        <div v-if="loading">
          <v-text-field color="success" loading ></v-text-field>
        </div>
        
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                name="email"
                label="Email"
                v-model="user.email"
                prepend-icon="mdi-account"
                type="email"
              />

              <v-text-field
                name="password"
                id="password"
                label="Password"
                v-model="user.password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login" :disabled="loading" :loading="loading">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('loginUser', this.user)
    }
  },
  computed: {
    error(){
      return this.$store.getters.error
    },
    loading(){
      return this.$store.getters.loading
    }
  }
};
</script>