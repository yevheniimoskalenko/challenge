<template>
  <div>
    <div class="task_title">
      <h2>Створити завдання</h2>
    </div>
    <el-card>
      <el-form ref="form" :model="dataForm" :rules="roles">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Назва дії" prop="action">
              <el-input v-model="dataForm.action" placeholder="Біг" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Тип вимірювання" prop="measurement">
              <el-input v-model="dataForm.measurement" placeholder="Метри" />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="task-footer">
          <el-button
            :loading="loadingCreate"
            type="primary"
            plain
            @click="create"
            >Стврити</el-button
          >
        </div>
      </el-form>
    </el-card>
    <div class="task_title">
      <h2>Мої завдання</h2>
    </div>
    <div v-for="(task, index) in tasks" :key="index" class="task">
      <el-card>
        <div class="task-wrapper">
          <div class="task_active">
            <h3>Тип дії: {{ task.action }}</h3>
            <span> Вимірювання в: {{ task.measurement }}</span>
          </div>
          <div class="task_delete">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteTask(index, task.id)"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingCreate: false,
      dataForm: {
        action: '',
        measurement: ''
      },
      roles: {
        measurement: [{ required: true, message: 'Заповніть буль-ласка поле' }],
        action: [{ required: true, message: 'Заповніть буль-ласка поле' }]
      }
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  },
  methods: {
    create() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            this.loadingCreate = true
            const DataForm = {
              action: this.dataForm.action,
              measurement: this.dataForm.measurement,
              id: Date.now().toString()
            }
            await this.$store.dispatch('createTask', DataForm)
          } catch (e) {
          } finally {
            this.dataForm.action = ''
            this.dataForm.measurement = ''
            this.loadingCreate = false
          }
        }
      })
    },
    async deleteTask(id) {
      await this.$store.dispatch('deleteTask', id)
    }
  },
  head() {
    return {
      title: 'Виклик для себе!'
    }
  }
}
</script>

<style lang="scss" scoped>
.task-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task {
  padding: 10px 0;
}
.task_title {
  padding: 20px 0px;

  h2 {
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }
}
.task-footer {
  display: flex;
  justify-content: center;
}
.el-button--primary.is-plain {
  width: 100%;
}
</style>
