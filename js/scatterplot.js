const canvas = document.getElementById('myChart')
let myChart

export function createChart(columns) {
    const config = {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Franchise movies',
                data: columns,
                backgroundColor: 'rgb(99, 99, 255)'
            }]
        },
        options: {
            scales: {
                x: {
                    title: { display: true, text: 'Rating' }
                },
                y: {
                    title: { display: true, text: 'Year' }
                }
            },
            layout: {
                padding: 30
            }
        }
    }

    myChart = new Chart(canvas, config)
}

export function updateChart(label, data) {
    myChart.data.datasets.push({
        label,
        data,
        backgroundColor: 'rgb(255, 99, 55)'
    })
    myChart.update()
}
