// from data.js
var tableData = data;

// YOUR CODE HERE!

//crude and build quick table
let tBody = d3.select('tbody')

// this is your function called renderTable()
function renderTable(subsetData) {
    subsetData.map(ufo_sighting => {
        let newTr = tBody.append('tr');
        Object.values(ufo_sighting).forEach(x => {
            newTr.append('td').text(x)
        })
    })
}
renderTable(tableData);


    d3.select('#filter-btn').on('click', function(e) {
        // clear any table that exists
        d3.select('tbody').html('')
        d3.event.preventDefault();
        console.log('clicked')
        let dateVal = d3.select('#datetime').node().value;
        var filteredData = tableData.filter(ufo_sighting => ufo_sighting.datetime === dateVal);
        renderTable(filteredData)  
            
    })

    // call renderTable
    // use an array filter method
    // to get the value in the form field
    // and filter the array of objects against it





// // event listener to handle change and click
// dateInputText.on("change", clickSelect)
// button.on("click", clickSelect)