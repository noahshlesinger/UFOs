// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filters = []

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
  let elementCity = d3.select("#city").property("element")
  let elementState = d3.select("#state").property("element")
  let elementCountry = d3.select("#country").property("element")
  let elementShape = d3.select("#shape").property("element")
    // 4b. Save the value that was changed as a variable.
  let valueState = d3.select("#city").property("value")
  let valueCity = d3.select("#state").property("value")
  let valueCountry = d3.select("#country").property("value")
  let valueShape = d3.select("#shape").property("value")
    // 4c. Save the id of the filter that was changed as a variable.
  let filterId = d3.select("#city").property("id")
  let filterState = d3.select("#state").property("id")
  let filterCountry = d3.select("#country").property("id")
  let filterShape = d3.select("#shape").property("id")
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (element) { 
    filters = filters.append(row =>row.city === elementCity)
    filters = filters.append(row =>row.state === elementState)
    filters = filters.append(row =>row.country === elementCountry)
    filters = filters.append(row =>row.shape === elementShape)


          


  }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(filters);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (element) {
      filters = filters.filter( row => row.city === elementCity);
    }
  
    // 10. Finally, rebuild the table using the filtered data
    let filteredData = tableData;
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#filter-btn").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
