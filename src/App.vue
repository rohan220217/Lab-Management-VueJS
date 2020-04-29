<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/" style="text-decoration: none">Home</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="isLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-wallet-travel</v-icon>
          </v-list-item-action>

          <v-list-item-content v>
            <v-list-item-title>
               <router-link to="/activity" style="text-decoration: none">Activity</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="isLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-clipboard-account</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/admin-product" style="text-decoration: none">Admin Product</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="isLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-clipboard-plus</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/add-product" style="text-decoration: none">Add Product</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="isLoggedIn">
        <div class="pa-2">
          <v-btn rounded block class="error--text" @click="logOut">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="cyan" dark dense app>
      <v-toolbar-title>JNU_LIB </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="isLoggedIn">Welcome: {{ user }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn rounded text class="primary--text" v-if="!isLoggedIn">
        <router-link to="/sign-up" style="text-decoration: none">Sign Up</router-link>
      </v-btn>

      <v-btn rounded text class="success--text" v-if="!isLoggedIn">
        <router-link to="/login" style="text-decoration: none">Login</router-link>
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    
    <v-content>
      <div  v-if="success">
       
        <app-success :text="success" ></app-success>
      </div>
      
      <router-view></router-view>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  components: {
    appFooter: Footer
  },

  data: function () {
    return {
      drawer: null
    }
  },
   computed: {
    isLoggedIn(){
      return  this.$store.state.isLoggedIn
    },
    success(){
      return this.$store.getters.success
    },
    user(){
      return this.$store.getters.user
    }
  },
  methods:{
    logOut(){
      
    }
  }
};
</script>
