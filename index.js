fetch('https://jsonplaceholder.typicode.com/users') .then((data)=>{
return data.json();
}).then((objectData)=>{
    console.log(objectData[0].name);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<div class="card">
        <p>Name : ${values.name}</p>
        <p>Mail : ${values.email}</p>
        <p>Street : ${values.address.street}</p>
        <p>City : ${values.address.city}</p>
    </div>`
    });
    document.getElementById("tcontent").innerHTML=tableData;
})
//watch video https://www.youtube.com/watch?v=vvjaRIM4Bjs
   
