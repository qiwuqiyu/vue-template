<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.$store);
    console.log(this.$router.currentRoute);
    this.$store.commit("increment", {
      title: "更改名称"
    });
  }
};
</script>
<style scoped>
</style>
