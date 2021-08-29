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
}

