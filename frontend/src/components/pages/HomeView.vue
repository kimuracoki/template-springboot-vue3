<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";

const data = reactive({
  message: "",
});
const getData = async () => {
  let result = await axios.get("http://localhost:8080/template-springboot-vue3/api/getSample");
  data.message = result.data.data;
};
</script>

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img
    ><button @click="getData">Request</button>
    <hr />
    {{ data.message }}
  </div>
</template>
