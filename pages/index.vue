<template>
  <div>
    <app-create-task />
    <app-add-task :type-task="typeTask" />
    <div v-if="tasks.length > 0">
      <app-task :tasks="tasks" />
    </div>
    <div>
      <app-diagram />
    </div>
  </div>
</template>

<script>
import appCreateTask from '@/components/create.vue'
import appAddTask from '@/components/add.vue'
import appTask from '@/components/task.vue'
import appDiagram from '@/components/diagram.vue'
export default {
  components: { appCreateTask, appAddTask, appTask, appDiagram },
  data() {
    return {}
  },

  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    typeTask() {
      return this.$store.getters.typeTask
    }
  },
  methods: {},
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
