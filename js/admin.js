const ctx = document.getElementById('myChart')
const products = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
const ingresos = [1200, 1500, 1800, 2000, 2200, 2500]
const gastos = [800, 900, 1000, 1100, 1200, 1300]

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: products,
    datasets: [
      {
        label: 'Ingresos',
        data: ingresos,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Gastos',
        data: gastos,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

