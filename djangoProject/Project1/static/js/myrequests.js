function fetchreq(f){
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
      let x=treq.APPROVAL;
      var appr;
      var status;
      var color;
      var fontc="white";
      if(x==0){
        appr="Declined";
        status="Declined";
        color="red";
      }else if(x==1){
      appr="Approved";
      status="Approved";
      color="#28a745";
      }else{
      appr="Pending";
      status="Pending";
      color="#ffc107";
      fontc="black";
      }
        if(treq.FNAME==f){
          // var f=treq.FNAME;
        return `
        <a href="#id${treq.ID}" class="list-group-item" data-toggle="collapse">
                   Request Ticketid : ${treq.ID}
                    <input class="btn btn-primary" type="submit" value="View" id="result" style="float: right;outline:none;"><span class="badge" style="background-color:${color}; margin:0.5rem 2rem;padding:5px; color:${fontc}">${status}</span>
</input>
                </a>
                  <div class="list-group collapse" id="id${treq.ID}">
                    <a href="#item-1-3" class="list-group-item" data-toggle="collapse">
                      Name: ${treq.FNAME} ${treq.LNAME}<br>
                      Current Team: ${treq.OLDTEAM}<br>
                      New Team: ${treq.NEWTEAM}<br>
                      Manager: ${treq.MANAGER}<br>
                      Comments: ${treq.COMMENTS}<br>
                      Status: ${appr}<br>
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
//    fetchreq();












 function addgrpreq(uid){
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
      let x=treq.APPROVAL;
      var appr;
      var status;
      var color;
      var fontc="white";
      if(x==0){
        appr="Declined";
        status="Declined";
        color="red";
      }else if(x==1){
      appr="Approved";
      status="Approved";
      color="#28a745";
      }else{
      appr="Pending";
      status="Pending";
      color="#ffc107";
      fontc="black";
      }
        if(treq.UID==uid){
          // var f=treq.FNAME;
        return `
        <a href="#grp${treq.ID}" class="list-group-item" data-toggle="collapse">
                   Request Ticketid : ${treq.ID}
                    <input class="btn btn-primary" type="submit" value="View" id="result" style="float: right;outline:none;"><span class="badge" style="background-color:${color}; margin:0.5rem 2rem;padding:5px; color:${fontc}">${status}</span>
</input>
                </a>
                  <div class="list-group collapse" id="grp${treq.ID}">
                    <a href="#item-1-3" class="list-group-item" data-toggle="collapse">
                      UID: ${treq.UID}<br>
                      User: ${treq.USERNAME}<br>
                      Group: ${treq.GROUP}<br>
                      Is Hidden: ${treq.HIDDEN}<br>
                      Status: ${appr}<br>
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
//    addgrpreq();




    function archivereq(uid){
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
       let x=treq.APPROVAL;
      var appr;
      var status;
      var color;
      var fontc="white";
      if(x==0){
        appr="Declined";
        status="Declined";
        color="red";
      }else if(x==1){
      appr="Approved";
      status="Approved";
      color="#28a745";
      }else{
      appr="Pending";
      status="Pending";
      color="#ffc107";
      fontc="black";
      }
        if(treq.UID==uid){

          // var f=treq.FNAME;
        return `
        <a href="#arc${treq.ID}" class="list-group-item" data-toggle="collapse">
                   Request Ticketid : ${treq.ID}
                    <input class="btn btn-primary" type="submit" value="View" id="result" style="float: right;outline:none;"><span class="badge" style="background-color:${color}; margin:0.5rem 2rem;padding:5px; color:${fontc}">${status}</span>
</input>
                </a>
                  <div class="list-group collapse" id="arc${treq.ID}">
                    <a href="#item-1-3" class="list-group-item" data-toggle="collapse">
                      UID: ${treq.UID}<br>
                      Group: ${treq.GROUP}<br>
                      Start Time: ${treq.START}<br>
                      End Time: ${treq.END}<br>
                      WO Reference: ${treq.WOR}<br>
                      Status: ${appr}<br>
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
