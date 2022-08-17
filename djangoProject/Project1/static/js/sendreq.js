function sendreq() {
let data = {
    "FNAME": document.getElementById("firstname").value,
    "LNAME":document.getElementById("lastname").value,
    "OLDTEAM":document.getElementById("steam").value,
    "NEWTEAM":document.getElementById("nteam").value,
    "MANAGER":document.getElementById("Managers").value,
    "COMMENTS":document.getElementById("comment").value,
    "APPROVAL": -1
 };
// console.log(data);
 const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('http://127.0.0.1:8000/change', options)
    .then(res => res.json())
    .then(res => console.log(res));
}
function approval(id,idd,f,l,o,n,m,c) {

    let x=-1;
   if(id=="appr"){
        x=1;
        alert("The request has been approved");
    }else{
        x=0;
        alert("The request has been declined");
    }
let data = {
    "ID":idd,
    "FNAME":f,
    "LNAME":l,
    "OLDTEAM":o,
    "NEWTEAM":n,
    "MANAGER":m,
    "COMMENTS":c,
    "APPROVAL": x
 };
// console.log(data);
// console.log(x);
 const options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('http://127.0.0.1:8000/change', options)
    .then(res => res.json())
    .then(res => console.log(res));
}
















function approval2(id,idd,uid,u,g,h) {

    let x=-1;
   if(id=="appr"){
        x=1;
        alert("The request has been approved");
    }else{
        x=0;
        alert("The request has been declined");
    }
let data = {
    "ID":idd,
    "UID":uid,
    "USERNAME":u,
    "GROUP":g,
    "HIDDEN":h,
    "APPROVAL": x
 };
 console.log(data);
 console.log(x);
 const options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('http://127.0.0.1:8000/addgrp', options)
    .then(res => res.json())
    .then(res => console.log(res));
}





function approval3(id,idd,uid,g,s,e,w) {
    let x=-1;
   if(id=="appr"){
        x=1;
        alert("The request has been approved");
    }else{
        x=0;
        alert("The request has been declined");
    }
let data = {
    "ID":idd,
    "UID":uid,
    "GROUP":g,
    "START":s,
    "END":e,
    "WOR":w,
    "APPROVAL": x
 };
 console.log(data);
 console.log(x);
 const options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('http://127.0.0.1:8000/archive', options)
    .then(res => res.json())
    .then(res => console.log(res));
}