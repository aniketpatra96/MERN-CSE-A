//21BCSE30 | ANIKET PATRA

function prevent(e){
  e.preventDefault();
}

async function searchStudent() {
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("studentTable");
  tr = table.getElementsByTagName("tr");
 
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2]; // Assuming the student name is in the first column
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
