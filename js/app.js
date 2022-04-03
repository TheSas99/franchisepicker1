import { createChart } from "scatterplot.js"

function loadData() {
    Papa.parse("movies.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => cleanData(results.data)
    })
}

function cleanData(data) {
    const columns = data.map(movie => ({
        x: movie.imdb_rating,
        y: movie.year,
    }))
    createChart(columns)
}

loadData()
