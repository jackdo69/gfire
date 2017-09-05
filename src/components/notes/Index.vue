<template>
  <div class="notes">
      <note v-for="note in notes" :note="note.title" >
      </note>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import Note from './Note'
  export default {
    components: {
      Note
    }
  }
</script>

<style>
  .notes{
    padding: 0 100px;
  }
</style>
