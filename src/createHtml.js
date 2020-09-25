const generateEmpCard = emplData => {

let returnText = '';

emplData.forEach(element => {
   
 if ((element.team_member) ==  'Engineer') { 

    
 returnText = returnText +  `   
    <div class="card-body border border-dark m-4 p-2">
       <div class="card-header bg-primary text-light border border-dark m-0"><b>${element.engineer_name}</b> </br> <b>Engineer</b> </div>
        <ul class="list-group list-group-flush bg-light m-6">
            <li class="list-group-item">ID: ${element.engineer_ID}</li>
            <li class="list-group-item">E-mail:  ${element.engineer_email} </li>
            <li class="list-group-item">gitHub: ${element.engineer_gitHub}</li>
        </ul>
    </div>`
}  
if ((element.team_member) ==  'Intern') { 
    
    returnText = returnText +  `   
       <div class="card-body border border-dark m-4 p-2">
          <div class="card-header bg-primary text-light border border-dark m-0"><b>${element.intern_name}</b> </br> <b>Intern</b> </div>
           <ul class="list-group list-group-flush bg-light m-6">
               <li class="list-group-item">ID: ${element.intern_ID}</li>
               <li class="list-group-item">E-mail:  ${element.intern_email} </li>
               <li class="list-group-item">School: ${element.intern_school}</li>
           </ul>
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  </head>

  <body>
     <header>
        <h1 class = "bg-danger text-center font-weight-bold mt-2"> <span class pt-6 pb-6> My Team </span> </h1>   
     </header>

     <main>
        <div class="card" style="width: 18rem">
            <div class="card-body border border-dark m-4 p-2">
               <div class="card-header bg-primary text-light border border-dark m-0"><b>${manager.team_manager_name}</b> </br> <b>Manager</b> </div>
                <ul class="list-group list-group-flush bg-light m-6">
                    <li class="list-group-item">ID: ${manager.team_manager_employee_ID}</li>
                    <li class="list-group-item">E-mail:  ${manager.team_manager_email} </li>
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