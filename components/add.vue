<template>
  <div>
    <div class="task_title">
      <h2>Додати значення</h2>
    </div>
    <el-card>
      <el-form ref="formAdd" :model="controler">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Виконана дія:">
              <el-autocomplete
                v-model="controler.work"
                :fetch-suggestions="querySearchAsync"
                placeholder="Дія"
                @select="handleSelect"
              >
              </el-autocomplete>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Скільки:">
              <el-input v-model="controler.amount" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12"> </el-col>
        </el-row>
        <div class="task-footer">
          <el-button :loading="loadingValue" type="primary" plain @click="add"
            >Додати</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    typeTask: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      controler: { work: '', amount: 1, id: 0 },
      loadingValue: false
    }
  },
  methods: {
    filterAdd() {
      return !!this.typeTask.find((e) => e.value === this.controler.work)
    },
    querySearchAsync(queryString, cb) {
      const list = this.typeTask
      const results = queryString
        ? list.filter(this.createFilter(queryString))
        : list
      cb(results)
    },
    createFilter(queryString) {
      return (list) => {
        return list.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(item) {
      this.controler.id = item.id
    },
    add() {
      this.$refs.formAdd.validate(async (valid) => {
        if (valid && this.typeTask.length > 0 && this.filterAdd() === true) {
          try {
            const dataAdd = {
              amount: this.controler.amount,
              time: Date.now(),
              id: this.controler.id
            }
            await this.$store.dispatch('addWork', dataAdd)
            this.$message({
              message: 'Значення добавлено!',
              type: 'success'
            })
          } catch (e) {
            console.log(e)
          } finally {
            this.controler.work = ''
            this.controler.amount = 0
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
