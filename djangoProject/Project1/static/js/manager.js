function ismanager(role){

          if (role==1){
            document.getElementById("manager").style.display="block";
            }

            let x=0;
        function notif(){
            fetch("http://127.0.0.1:8000/change")
            .then(response=>{
              if(!response.ok){
                throw Error("ERROR");
              }
              return response.json();
            })
            .then(data=>{

            const html=data.map(treq=>{
            if(treq.APPROVAL<0){
                x++;}});
              console.log(data.length);
              document.getElementById('mydiv').innerHTML = x;
              })
                .catch(error=>{
                  console.log(error);
                });
              }
            notif();
            function notif2(){
            fetch("http://127.0.0.1:8000/addgrp")
            .then(response=>{
              if(!response.ok){
                throw Error("ERROR");
              }
              return response.json();
            })
            .then(data=>{

            const html=data.map(treq=>{
            if(treq.APPROVAL<0){
                x++;}});
              console.log(data.length);
              document.getElementById('mydiv').innerHTML = x;
              })
                .catch(error=>{
                  console.log(error);
                });
              }
            notif2();
             function notif3(){
            fetch("http://127.0.0.1:8000/archive")
            .then(response=>{
              if(!response.ok){
                throw Error("ERROR");
              }
              return response.json();
            })
            .then(data=>{

            const html=data.map(treq=>{
            if(treq.APPROVAL<0){
                x++;}});
              console.log(data.length);
              document.getElementById('mydiv').innerHTML = x;
              })
                .catch(error=>{
                  console.log(error);
                });
              }
            notif3();
}