
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
            <div class="card-body">
                <h5 class="card-title bg-primary text-light">${manager.team_manager_name} </br> Manager </h5>
                <p class="card-text bg-seondary">ID:  ${manager.team_manager_employee_ID} </p>
                <p class="card-text bg-secondary">ID:  ${manager.team_manager_email} </p>
                <p class="card-text bg-secondary">ID:  ${manager.team_manager_office_ID} </p>
            </div>
        </div>

     </main>

  </body>

  </html>`


}

module.exports = createHtml;