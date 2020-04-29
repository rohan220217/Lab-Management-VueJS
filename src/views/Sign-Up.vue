<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container>
        <v-layout v-if="loading">
          <v-flex>
            <v-alert outlined type="success" text text-center>User Created Succesfully.</v-alert>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 sm5 offset-sm3>
            <v-card>
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="https://aniportalimages.s3.amazonaws.com/media/details/JNU_logo.jpg"
                    alt="Jnu Logo"
                    height="180px"
                  />
                  <h1 class="flex my-4 primary--text">User Sign Up</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="mdi-account"
                    name="User"
                    label="User Name"
                    type="text"
                    v-model="user.name"
                    :error="error"
                    :rules="[rules.required]"
                  />

                  <v-text-field
                    append-icon="mdi-email"
                    name="Email"
                    label="Email"
                    type="email"
                    v-model="user.email"
                    :error="error"
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'mdi-eye-off' : 'mdi-eye'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="user.password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="signup" :loading="loading">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      },
      loading: false,
      hidePassword: true,
      error: false,
      result: "",
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    signup() {
      this.loading = true;
      const vm = this;
      if (!vm.user.email || !vm.user.password) {
        vm.result = "Email and Password can't be null.";
        vm.showResult = true;
        return;
      }
      this.$store.dispatch("signUser", this.user);
    }
  }
};
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
