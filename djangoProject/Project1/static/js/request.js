function myFunction() {
  let elem = document.querySelectorAll("a");
    elem.forEach(e => e.classList.toggle("dropdown-content_box"));
}


function func2(id) {
console.log(id);
let elem = document.querySelector(`#${id}`);
console.log(elem.innerText);
document.querySelector(".search").placeholder = (""+elem.innerText);
myFunction();
let elem2 = document.querySelectorAll("a");
elem2.forEach(e => e.classList.remove("dropdown-content_box"));
let search = document.querySelector(".search");
console.log(search);
search.value = (""+elem.innerText);
search.placeholder = ("Search for team");
}


function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("app");
  a = div.getElementsByTagName("a");
  
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
      a[i].classList.add("dropdown-content_box");
    } else {
      a[i].style.display = "none !important";
      a[i].classList.remove("dropdown-content_box");
    }
  }
}


function myFunction1() {
    let elem = document.querySelectorAll("a");
      elem.forEach(e => e.classList.toggle("dropdown-content_box"));
  }
  
  
  function func21(id) {
  console.log(id);
  let elem = document.querySelector(`#${id}`);
  console.log(elem.innerText);
  document.querySelector(".search1").placeholder = (""+elem.innerText);
  myFunction();
  let elem2 = document.querySelectorAll("a");
  elem2.forEach(e => e.classList.remove("dropdown-content_box"));
  let search = document.querySelector(".search1");
  console.log(search);
  search.value = (""+elem.innerText);
  search.placeholder = ("Search for team");
  }
  
  
  function filterFunction1() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    div = document.getElementById("app1");
    a = div.getElementsByTagName("a");
    
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        a[i].classList.add("dropdown-content_box");
      } else {
        a[i].style.display = "none !important";
        a[i].classList.remove("dropdown-content_box");
      }
    }
  }
  