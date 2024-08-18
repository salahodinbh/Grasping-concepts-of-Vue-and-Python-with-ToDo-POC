<template>
  <div>
    <!-- <h1>{{ message }}</h1> -->
    <LoadingInit/>
    <div v-if="!loading">
      <h1>To-Do List POC</h1>
      <div v-for="(task, index) in tasks" :key="index" class="flex items-center mb-2">
        <p>{{ task }}</p>
        <CommonButton text="Remove" @click="removeTask(index)" />
      </div>
      <div class="flex items-center">
        <input v-model="newTask" @keydown.enter="addTask" placeholder="Add a new task" />
        <CommonButton text="Add" @click="addTask" />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import CommonButton from './components/CommonButton.vue';
import LoadingInit from './components/LoadingInit.vue';

export default {

  data() {
    return {
      //message: ""
      tasks: [],
      newTask: "",
      loading: true
    };
  },
  mounted() {
    /**fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => {
        this.message = data;
      });
      */
    this.fetchTasks();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        fetch("http://localhost:5000/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ task: this.newTask })
        })
          .then(() => {
            this.fetchTasks();
            this.newTask = "";
          });
      }
    },
    removeTask(index) {
      fetch(`http://localhost:5000/tasks/${index}`, {
        method: "DELETE"
      })
        .then(() => {
          this.fetchTasks();
        })
    },
    fetchTasks() {
      fetch("http://localhost:5000/tasks")
        .then((response) => response.json())
        .then((data) => {
          this.tasks = data;
        });
    }
  },
  components: {
    CommonButton,
    LoadingInit,
  }
};
</script>