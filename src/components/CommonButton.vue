<template>
    <div class="p-4">
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        {{text}}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommonButton',
    props: {
      text: String
    }	
  }
  </script>
