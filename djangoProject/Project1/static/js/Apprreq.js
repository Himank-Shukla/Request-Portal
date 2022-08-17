function sendreq() {
    // alert("The form was submitted");
let data = {
    "UID": document.getElementById("id").value,
    "USERNAME":document.getElementById("user").value,
    "GROUP":document.getElementById("steam").value,
    "HIDDEN":document.getElementById("Revoked").value,

 };
 console.log(data);
 const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('http://127.0.0.1:8000/addgrp', options)
    .then(res => res.json())
    .then(res => console.log(res));
}

function sendreqdb() {
    // alert("The form was submitted");
let data = {
    "UID": document.getElementById("id").value,
    "GROUP":document.getElementById("steam").value,
    "START":document.getElementById("starttime").value,
    "END":document.getElementById("endtime").value,
    "WOR":document.getElementById("reference").value,

 };
 console.log(data);
 const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('http://127.0.0.1:8000/archive', options)
    .then(res => res.json())
    .then(res => console.log(res));
}