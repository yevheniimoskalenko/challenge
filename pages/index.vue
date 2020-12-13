<template>
  <div>
    <div class="task_title">
      <h2>Створити завдання</h2>
    </div>
    <el-card>
      <el-form ref="form" :model="dataForm">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Назва дії">
              <el-input v-model="dataForm.action" placeholder="Біг" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Тип вимірювання">
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
      }
    }
  },
  methods: {
    create() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            this.loadingCreate = true
            await console.log(valid)
          } catch (e) {
          } finally {
            this.loadingCreate = false
          }
        }
      })
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
.task_title {
  padding: 15px 0px;

  h2 {
    font-weight: normal;
    font-size: 24px;
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
