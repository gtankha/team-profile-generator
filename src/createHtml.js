const generateEmpCard = emplData => {

let returnText = '';

emplData.forEach(element => {
   
 if ((element.team_member) ==  'Engineer') { 

 // html content for engineer   
 returnText = returnText +  ` 
 <div class="card border-dark">  
    <div class="card-body bg-light">
       <div class="card-header bg-primary text-light"><b>${element.engineer_name}</b> </br> <span class="material-icons align-bottom">
       engineering </span><b> Engineer</b> </div>
        <ul class="list-group list-group-flush bg-light m-6">
            <li class="list-group-item">ID: ${element.engineer_ID}</li>
            <li class="list-group-item">E-mail:<a href="mailto:${element.engineer_email}" target="_blank"> ${element.engineer_email}</a> </li>
            <li class="list-group-item">gitHub:<a href="https://github.com/${element.engineer_gitHub}" target="_blank"> ${element.engineer_gitHub}</a></li>
        </ul>
    </div>
</div>`

}  
if ((element.team_member) ==  'Intern') { 
    //html content for Intern
    returnText = returnText +  `
    <div class="card border-dark">   
       <div class="card-body bg-light">
          <div class="card-header bg-primary text-light"><b>${element.intern_name}</b> </br> <span class="material-icons align-bottom">
          school </span><b> Intern</b> </div>
           <ul class="list-group list-group-flush bg-light m-6">
               <li class="list-group-item">ID: ${element.intern_ID}</li>
               <li class="list-group-item">E-mail:<a href="mailto:${element.intern_email}" target="_blank"> ${element.intern_email}</a> </li>
               <li class="list-group-item">School: ${element.intern_school}</li>
           </ul>
       </div>
    </div>`
   }

}
)
return returnText;
};

/* ----------------------------- FUNCTION TO GENERATE HTML FILE FOR TEAM-------------------------------------*/

const createHtml = data => {

    const manager = data.managerResponse;
    const team = data.teamResponse;


// return html content
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>

  <body>
     <header>
        <h1 class = "bg-danger text-light text-center font-weight-bold mt-2"> <span class pt-6 pb-6> My Team </span> </h1>   
     </header>

     <main>
     <div class = "card-columns m-5">
        
     
        <div class="card border-dark">
            <div class="card-body bg-light">
               <div class="card-header bg-primary text-light"><b>${manager.team_manager_name}</b> </br> <span class="material-icons align-bottom">
               local_cafe </span> <b> Manager</b> </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.team_manager_employee_ID}</li>
                    <li class="list-group-item">E-mail:<a href="mailto:${manager.team_manager_email}" target="_blank"> ${manager.team_manager_email}</a> </li>
                    <li class="list-group-item">Office Number: ${manager.team_manager_office_ID}</li>
                </ul>
            </div>
        </div>
    
      

        ${generateEmpCard(team)}

       

    </div>
    
        
   

     </main>

  </body>

  </html>`


}

module.exports = createHtml;