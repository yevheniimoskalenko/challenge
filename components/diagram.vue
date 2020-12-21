<template>
  <div>
    <div>
      <div class="task_title">
        <h2 v-if="diagrams.datas">Графік</h2>
      </div>
      <canvas ref="canvas"></canvas>
      <div v-if="diagrams.datas" class="footer">
        <!-- <el-button :loading="loading" @click="allLoad">Показати все</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data() {
    return { loading: false }
  },
  computed: {
    diagrams() {
      return this.$store.getters.createDiagram
    }
  },
  watch: {
    diagrams(val, old) {
      const data = {
        labels: this.diagrams.labels,
        datasets: [
          {
            label: this.diagrams.label + ' ' + this.diagrams.total,
            data: this.diagrams.datas,
            backgroundColor: this.diagrams.color,
            borderColor: this.diagrams.color,
            borderWidth: 1
          }
        ]
      }
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
      this.renderChart(data, options)
    }
  },
  methods: {
    async allLoad() {
      try {
        await this.$store.dispatch('allLoad')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
}
</style>
