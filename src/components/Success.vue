<template>
  <v-alert class="text-center" dismissible dense text type="success">{{text}}</v-alert>
</template>
<script>
export default {
  props: ["text"]
};
</script>