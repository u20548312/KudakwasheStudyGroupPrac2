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

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("td")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}