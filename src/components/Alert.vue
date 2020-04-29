<template>
  <v-alert class="text-center" dismissible dense outlined type="error">
    {{text}}
  </v-alert>
</template>
<script>
export default {
    props: ['text']
}
</script>