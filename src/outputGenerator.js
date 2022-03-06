let renderCards = (arrEmployees) => {
    // loop through arrEmployess and build cards
    let cards = '';

    arrEmployees.forEach(employee => {
        switch (employee.getRole()) {
            case 'Manager':
                cards += `<div class="card m-2" style="width: 18rem;">
                <div class="card-body rounded d-flex flex-column flex-nowrap bg-primary text-white">
                    <h2 class="card-title">${employee.name}</h2>
                    <h2 class="card-title"><i class="fa fa-inbox me-3" aria-hidden="true"></i>Manager</h2>
                </div>
                <div class="py-5 px-3 bg-secondary bg-opacity-25">
                    <ul class="list-group">
                        <li class="list-group-item text-black lh-lg fw-light">ID: ${employee.id}</li>
                        <li class="list-group-item text-black lh-lgg fw-light">Email: <a class="text-decoration-none" href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item text-black lh-lgg fw-light">Office Number: ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>`
                break;
            case 'Intern':
                cards += `                <div class="card m-2" style="width: 18rem;">
    <div class="card-body rounded d-flex flex-column flex-nowrap bg-primary text-white">
        <h2 class="card-title">${employee.name}</h2>
        <h2 class="card-title"><i class="fa fa-university me-3" aria-hidden="true"></i>Intern</h2>
    </div>
    <div class="py-5 px-3 bg-secondary bg-opacity-25">
        <ul class="list-group">
            <li class="list-group-item text-black lh-lg fw-light">ID: ${employee.id}</li>
            <li class="list-group-item text-black lh-lgg fw-light">Email: <a class="text-decoration-none" href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item text-black lh-lgg fw-light">School: ${employee.school}</li>
        </ul>
    </div>
</div>`
                break;
            case 'Engineer':
                cards += `                <div class="card m-2" style="width: 18rem;">
    <div class="card-body rounded d-flex flex-column flex-nowrap bg-primary text-white">
        <h2 class="card-title">${employee.name}</h2>
        <h2 class="card-title"><i class="fa fa-cogs me-3" aria-hidden="true"></i>Engineer</h2>
    </div>
    <div class="py-5 px-3 bg-secondary bg-opacity-25">
        <ul class="list-group">
            <li class="list-group-item text-black lh-lg fw-light">ID: ${employee.id}</li>
            <li class="list-group-item text-black lh-lgg fw-light">Email: <a class="text-decoration-none" href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item text-black lh-lgg fw-light">GitHub: ${employee.github}</li>
        </ul>
    </div>
</div>`
            default:
                break;
        }
    });
    return cards;
}

let renderOutput = (arrEmployees) => {
    // build html page
    let cards = renderCards(arrEmployees);

    let output = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@700&family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="./reset.css" />
        <link rel="stylesheet" type="text/css" href="./normalize.css" />
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="container-fluid bg-danger text-light py-5">
            <div class="row">
                <h1 class="text-center">My Team</h1>
            </div>
        </header>
    
        <div class="container p-5">
            <div class="row">
                  <div class="employees m-auto col-12 d-flex justify-content-center flex-wrap">
                    ${cards}
                </div>
            </div>
        </div>
</body>
</html>`

    return output;
}

module.exports.renderOutput = renderOutput;