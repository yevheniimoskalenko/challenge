<template>
  <div>
    <div class="task_title">
      <h2>Створити завдання</h2>
    </div>
    <el-card>
      <el-form ref="form" :model="dataForm" :rules="roles">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="Назва дії:" prop="action">
              <el-input v-model="dataForm.action" placeholder="Біг" />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="Тип вимірювання:" prop="measurement">
              <el-input v-model="dataForm.measurement" placeholder="Метри" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="Колір">
              <el-color-picker
                v-model="dataForm.color"
                show-alpha
                color-format="rgb"
              ></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="task-footer">
          <el-button
            :loading="loadingCreate"
            type="primary"
            plain
            @click="create"
            >Створити</el-button
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
        measurement: '',
        color: null
      },
      roles: {
        measurement: [{ required: true, message: 'Заповніть буль-ласка поле' }],
        action: [{ required: true, message: 'Заповніть буль-ласка поле' }]
      }
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
              color: this.dataForm.color
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
