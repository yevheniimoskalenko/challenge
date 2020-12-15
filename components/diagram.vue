<template>
  <div>
    <div class="task_title">
      <h2>Графік</h2>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  computed: {},
  mounted() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
</script>

<style lang="scss" scoped></style>
