<template>
  <div>
    <app-create-task />
    <app-add-task :type-task="typeTask" />
    <app-task :tasks="tasks" />
    {{ works }}
  </div>
</template>

<script>
import appCreateTask from '@/components/create.vue'
import appAddTask from '@/components/add.vue'
import appTask from '@/components/task.vue'
export default {
  components: { appCreateTask, appAddTask, appTask },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    typeTask() {
      return this.$store.getters.typeTask
    },
    works() {
      return this.$store.getters.works
    }
  },
  head() {
    return {
      title: 'Виклик для самого себе!'
    }
  }
}
</script>

<style lang="scss" scoped>
/* *-enter елемент з'явився */ /* *-leave елемент з'явився */
/* *-enter-active елемент час анімації */ /*-enter-leave елемент з'явився */
/* *-enter-to фінальне властивість */ /*-to-leave елемент з'явився */
</style>
