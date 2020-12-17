<template>
  <div>
    <div>
      <div class="task_title">
        <h2 v-if="diagrams.datas">Графік</h2>
      </div>
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
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
            label: this.diagrams.label,
            data: this.diagrams.datas,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
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
  }
}
</script>

<style lang="scss" scoped></style>
