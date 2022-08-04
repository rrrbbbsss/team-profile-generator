const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// using binary operators since if is not an expression
const cardTemplate = (employee) => {
    return `
<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">${employee.getName()}</h2>
        <h3 class="card-subtitle bg-primary">${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: ${employee.getId()}
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">
                ${(employee instanceof Manager &&
            "Office number: " + employee.getOfficeNumber())
        ||
        (employee instanceof Engineer &&
            'GitHub: <a href="https://github.com/' + employee.getGithub() + '" target="_blank">' + employee.getGithub() + '</a>')
        ||
        (employee instanceof Intern &&
            'School: ' + employee.getSchool())}
            </li>
        </ul>
    </div>
</div>
`
}



const top = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
    <title>Team Profile</title>
</head>

<body>
    <header class="bg-danger text-white p-5 text-center">
        <h1>My Team</h1>
    </header>
    <main class="container">
        <section class="row justify-content-evenly">
`

const bottom = `</section>
    </main>

</body>

</html>
`
const htmlTemplate = (data) => {
    return top + data.map((x) => cardTemplate(x))
            .join('\n') + bottom;
};

module.exports = { htmlTemplate, top, bottom};