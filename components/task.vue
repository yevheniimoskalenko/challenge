<template>
  <div>
    <div class="task_title">
      <h2>Мої завдання</h2>
    </div>
    <div v-for="task in tasks" :key="task._id" class="task">
      <el-card>
        <div class="task-wrapper">
          <div class="task_active">
            <h3>Тип дії: {{ task.action }}</h3>
            <span> Вимірювання в: {{ task.typeAction }}</span>
          </div>
          <div class="task_delete">
            <el-button
              type="primary"
              icon="el-icon-s-data"
              circle
              @click="createDiagram(task._id)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteTask(task._id)"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    async deleteTask(id) {
      await this.$store.dispatch('deleteTask', id)
    },
    createDiagram(id) {
      this.$store.dispatch('createDiagram', id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
