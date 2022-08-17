function fetchreq(){
    fetch("http://127.0.0.1:8000/change")
    .then(response=>{
      if(!response.ok){
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data=>{
      console.log(data);
      const html=data
      .map(treq=>{
        if(treq.APPROVAL<0){
          // var f=treq.FNAME;
        return `
        <a href="#id${treq.ID}" class="list-group-item" data-toggle="collapse">
                   Request Ticketid : ${treq.ID}
                    <input class="btn btn-primary" type="submit" value="View" id="result" style="float: right;outline:none;"></input>
                </a>
                  <div class="list-group collapse" id="id${treq.ID}">
                    <a href="#item-1-3" class="list-group-item" data-toggle="collapse">
                      Name: ${treq.FNAME} ${treq.LNAME}<br>
                      Current Team: ${treq.OLDTEAM}<br>
                      New Team: ${treq.NEWTEAM}<br>
                      Manager: ${treq.MANAGER}<br>
                      Comments: ${treq.COMMENTS}<br>
                      <button  id="decl" onclick='approval(this.id,${treq.ID},\"${treq.FNAME}\",\"${treq.LNAME}\",\"${treq.OLDTEAM}\",\"${treq.NEWTEAM}\",\"${treq.MANAGER}\",\"${treq.COMMENTS}\")'>Decline</button>
                      <button  id="appr" onclick='approval(this.id,${treq.ID},\"${treq.FNAME}\",\"${treq.LNAME}\",\"${treq.OLDTEAM}\",\"${treq.NEWTEAM}\",\"${treq.MANAGER}\",\"${treq.COMMENTS}\")'>Approve</button>
                    </a>
                </div>
        `;}
      })
      .join("");
        //    console.log(html);
           document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
           })
         .catch(error=>{
           console.log(error);
         });
      }
    fetchreq();















    function addgrpreq(){
    fetch("http://127.0.0.1:8000/addgrp")
    .then(response=>{
      if(!response.ok){
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data=>{
//      console.log(data);
      const html=data
      .map(treq=>{
        if(treq.APPROVAL<0){
          // var f=treq.FNAME;
        return `
        <a href="#grp${treq.ID}" class="list-group-item" data-toggle="collapse">
                   Request Ticketid : ${treq.ID}
                    <input class="btn btn-primary" type="submit" value="View" id="result" style="float: right;outline:none;"></input>
                </a>
                  <div class="list-group collapse" id="grp${treq.ID}">
                    <a href="#item-1-3" class="list-group-item" data-toggle="collapse">
                      UID: ${treq.UID}<br>
                      User: ${treq.USERNAME}<br>
                      Group: ${treq.GROUP}<br>
                      Is Hidden: ${treq.HIDDEN}<br>
                      <button  id="decl" onclick='approval2(this.id,${treq.ID},\"${treq.UID}\",\"${treq.USERNAME}\",\"${treq.GROUP}\",\"${treq.HIDDEN}\")'>Decline</button>
                      <button  id="appr" onclick='approval2(this.id,${treq.ID},\"${treq.UID}\",\"${treq.USERNAME}\",\"${treq.GROUP}\",\"${treq.HIDDEN}\")'>Approve</button>
                    </a>
                </div>
        `;}
      })
      .join("");
        //    console.log(html);
           document.querySelector("#add").insertAdjacentHTML("afterbegin",html);
           })
         .catch(error=>{
           console.log(error);
         });
      }
    addgrpreq();




    function archivereq(){
    fetch("http://127.0.0.1:8000/archive")
    .then(response=>{
      if(!response.ok){
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data=>{
//      console.log(data);
      const html=data
      .map(treq=>{
        if(treq.APPROVAL<0){
          // var f=treq.FNAME;
        return `
        <a href="#arc${treq.ID}" class="list-group-item" data-toggle="collapse">
                   Request Ticketid : ${treq.ID}
                    <input class="btn btn-primary" type="submit" value="View" id="result" style="float: right;outline:none;"></input>
                </a>
                  <div class="list-group collapse" id="arc${treq.ID}">
                    <a href="#item-1-3" class="list-group-item" data-toggle="collapse">
                      UID: ${treq.UID}<br>
                      Group: ${treq.GROUP}<br>
                      Start Time: ${treq.START}<br>
                      End Time: ${treq.END}<br>
                      WO Reference: ${treq.WOR}<br>
                      <button  id="decl" onclick='approval3(this.id,${treq.ID},\"${treq.UID}\",\"${treq.GROUP}\",\"${treq.START}\",\"${treq.END}\",\"${treq.WOR}\")'>Decline</button>
                      <button  id="appr" onclick='approval3(this.id,${treq.ID},\"${treq.UID}\",\"${treq.GROUP}\",\"${treq.START}\",\"${treq.END}\",\"${treq.WOR}\")'>Approve</button>
                    </a>
                </div>
        `;}
      })
      .join("");
        //    console.log(html);
           document.querySelector("#arc").insertAdjacentHTML("afterbegin",html);
           })
         .catch(error=>{
           console.log(error);
         });
      }
    archivereq();