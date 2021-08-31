// decalare a variable
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
//d3.select is telling javascript to look for the <tbody> tags in the HTML

// build a table using a function and pass in "data" as the argument.
function buildTable(data) {
    // clear the data in the table before creating a new one
    // tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build
    //The parentheses with empty quotes (("");) is an empty string
    tbody.html("");

    // add data to the table using a forEach loop
    //forEach can only be used with an array
    // forEach can be combined with arrow functions
    data.forEach((datarow) => {
        // create a variable that will append a row to the table body
        let row = tbody.append("tr");
        

    // loop through the data rows
    // Object.values tells js to reference one object from the array
    // (datarow) as the argument is saying we want the values into the datarow
    //forEach((val) specifys we want one object per row
        Object.values(dataRow).forEach((val) => {

    
    
            //create a variable to append data to a table
            let cell = row.append("td");
            //this is the variable that holds only each value from the object
            cell.text(val);
            }
        );
    });
};

// create a function to begin adding filters to our page
//add a date function so the page can be filtered by date
function handleClick() {
    // .select will select the very first element that matches our string selector "#datetime"
    // d3.select("#datetime") we're tellig d3 to look for the #datetime ID in the HTML tags
    // by chaining .property("value") we're telling d3 to actually grab the information and hold it in the date value
    let date = d3.select("#datetime").property("value");
    // By setting the filteredData variable to our raw data, we're basically using it as a blank slate
    // this is the default filter
    //If no date has been entered as a filter, then all of the data will be returned instead.
    let filteredData = tableData;
    //if a (date is entered) {
        // filter the default data to show only the date entered
    //};
    if (date) {
        // this line applies the filter to the tabledata
        // the triple === tests for equality, meaning the data in the table has to match the ffilter exactly
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
};

// listen for the click from the handleClick function so the code knows a click happened
d3.selectAll("filter-btn").on("click", handleClick);
// the selector string "filter-btn" is the html ID that tells our code a button has been clicked
// .on("click", handleClick); is telling D3 to execute the handleClick function when the button is clicked

//build the final table
buildTable(tableData);


