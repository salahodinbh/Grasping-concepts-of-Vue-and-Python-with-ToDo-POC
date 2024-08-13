<template>
  <div>
    <h1>{{ message }}</h1>
    <h1>{{ message_two }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      message_two: "yikes"
    };
  },
  mounted() {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => {
        this.message = data;
      });
    fetch("/api")
    .then((response) => response.text())
    .then((data) => {
        this.message_two = data;
      });
  },
};


</script>