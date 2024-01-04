function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mtable").deleteRow(i);
}

var x = document.getElementById("row");

const pattern = /K/;

for (let i = 0; i < x.length; i++) {

    if (pattern.test(x[i].cells[1].innerText)) {

        x[i].style.color = "red";
    }

        
}
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

function myFunction() {
    // Declare variables
    var input, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    ul = document.getElementById("mtable");
    li = ul.getElementsByTagName("tr");
    var filter = input.value.toUpperCase();

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
        var row = li[i];
        var cells = row.getElementsByTagName("td");
        var match = false;

        // Loop through cells of current row
        for (var j = 0; j < cells.length; j++) {
            var cell = cells[j];
            if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // If current cell matches filter, highlight row and set match flag to true
                row.style.backgroundColor = "red";
                match = true;
                break;
            }
        }

        // If current row doesn't match filter, reset background color
        if (!match) {
            row.style.backgroundColor = "";
        }
    }

    // Reset highlighting after 3 seconds
    setTimeout(function () {
        var rows = ul.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            rows[i].style.backgroundColor = "";
        }
    }, 3000);
}

document.getElementById("submit").addEventListener("click", myFunction);

function saveTable() {
    var table = document.getElementById("mtable");
    var data = [];

    // Loop through rows of table
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var rowData = {};

        // Get item name and quantity from cells of current row
        rowData.item = row.cells[0].innerText;
        rowData.quantity = row.cells[1].innerText;

        // Add current row data to data array
        data.push(rowData);
    }

    // Save data array to localStorage
    localStorage.setItem("tableData", JSON.stringify(data));

    alert("Changes saved!");
}

// Retrieve saved data from localStorage on page load
window.onload = function () {
    var data = JSON.parse(localStorage.getItem("tableData"));

    if (data) {
        var table = document.getElementById("mtable");

        // Loop through saved data and update table cells
        for (var i = 0; i < data.length; i++) {
            var item = data[i].item;
            var quantity = data[i].quantity;

            for (var j = 1; j < table.rows.length; j++) {
                var row = table.rows[j];
                var itemName = row.cells[0].innerText;

                if (itemName === item) {
                    row.cells[1].innerText = quantity;
                    break;
                }
            }
        }
    }
}

function Retrievedata() {
    var data = JSON.parse(localStorage.getItem("tableData"));

    if (data) {
        var table = document.getElementById("mtable");

        // Loop through saved data and update table cells
        for (var i = 0; i < data.length; i++) {
            var item = data[i].item;
            var quantity = data[i].quantity;

            for (var j = 1; j < table.rows.length; j++) {
                var row = table.rows[j];
                var itemName = row.cells[0].innerText;

                if (itemName === item) {
                    row.cells[1].innerText = quantity;
                    break;
                }
            }
        }
    }
}

function Clear() {
    localStorage.clear();
}
