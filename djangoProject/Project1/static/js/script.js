

function fetchData(){
  fetch("http://127.0.0.1:8000/teams")
  .then(response=>{
    if(!response.ok){
      throw Error("ERROR");
    }
    return response.json();
  })
  .then(data=>{
    // console.log(data);
    const html=data
    .map(dept=>{
      return `
      <a id="id${dept.ID}" class="myInput1" onClick="func2(this.id)">${dept.NAME}</a>
      `;
    })
    .join("");
        //  console.log(html);
         document.querySelector("#app").insertAdjacentHTML("afterbegin",html);

         const htm=data
         .map(dept=>{
           return `
           <a id="id${dept.ID}" class="myInput2" onClick="func3(this.id)">${dept.NAME}</a>
           `;
         })
         .join("");
          //  console.log("hello111");
              // console.log(htm);
         document.querySelector("#app1").insertAdjacentHTML("afterbegin",htm);
       })
       .catch(error=>{
         console.log(error);
       });
    }
  fetchData();

