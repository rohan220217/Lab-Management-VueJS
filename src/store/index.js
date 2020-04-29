import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null,
    Products: [],
    error: null,
    success: null,
    loading: false,
  },
  mutations: {
    IS_AUTHENTICATED(state) {
      state.isLoggedIn = true
    },
    UPDATE_PRODUCT(state, product) {
      axios
        .post("http://localhost:4000/admin/add-product", product)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    GET_PRODUCT(state) {
      axios
        .get("http://localhost:4000/admin/products")
        .then(res => {
          state.Products = res.data
          console.log(state.Products)
        })
        .catch(err => console.log(err));
    },
    LOGGED_OUT(state) {
      axios.post('http://localhost:4000/logout')
        .then(res => {
          console.log(res)
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },


    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    },
    SET_SUCCESS(state, payload) {
      state.success = payload
    },
    CLEAR_ERROR(state) {
      state.error = null
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_LOGGED_IN(state) {
      state.isLoggedIn = true
    },

  },
  actions: {
    signUser({ commit }, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      axios
        .post("http://localhost:4000/signup", payload)
        .then(res => {
          commit('SET_LOADING', false)
          console.log(res.data);
          router.push("/login");
        })
        .catch(err => {
          commit('SET_LOADING', true)          
          console.log('err');
        });
    },
    loginUser({ commit }, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      axios
        .post("http://localhost:4000/login", payload)
        .then(res => {
          commit('SET_LOADING', false)
          commit('SET_USER', res.data)
          commit('SET_LOGGED_IN')
          commit('SET_SUCCESS',`Logged in as `+ res.data)
          router.push("/");
        })
        .catch(err => {
          commit('SET_LOADING', false)
          commit('SET_ERROR', err.response.data)
          console.log(err);          
        });
    },










    isAuthenticated: (context) => {
      context.commit('IS_AUTHENTICATED')
    },
    userChange: (context, name) => {
      context.commit('USER', name)
    },
    updateProduct: (context, product) => {
      context.commit('UPDATE_PRODUCT', product)
    },
    getProduct: (context) => {
      context.commit('GET_PRODUCT')
    }
  },
  getters: {
    error(state) {
      return state.error
    },
    success(state) {
      return state.success
    },
    loading(state) {
      return state.loading
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    user(state) {
      return state.user
    }
  }
})
