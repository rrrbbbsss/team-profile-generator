const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
jest.mock('../lib/Intern');
jest.mock('../lib/Manager');
jest.mock('../lib/Engineer');
const genTemplate = require('../src/genTemplate');




test("validate making an intern card", () => {
    const intern = new Intern();
    const result = genTemplate.htmlTemplate([intern]);

    expect(result).toBe(genTemplate.top + 
`
<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">Bob</h2>
        <h3 class="card-subtitle bg-primary">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: 2
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:blah@blah.com">blah@blah.com</a>
            </li>
            <li class="list-group-item">
                School: blah
            </li>
        </ul>
    </div>
</div>
` + genTemplate.bottom)
})


test("validate making an engineer card", () => {
    const engineer = new Engineer();
    const result = genTemplate.htmlTemplate([engineer]);

    expect(result).toBe(genTemplate.top + 
`
<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">Bob</h2>
        <h3 class="card-subtitle bg-primary">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: 2
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:blah@blah.com">blah@blah.com</a>
            </li>
            <li class="list-group-item">
                GitHub: <a href="https://github.com/blah" target="_blank">blah</a>
            </li>
        </ul>
    </div>
</div>
` + genTemplate.bottom)
})

test("validate making a manager card", () => {
    const manager = new Manager();
    const result = genTemplate.htmlTemplate([manager]);

    expect(result).toBe(genTemplate.top + 
`
<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">Bob</h2>
        <h3 class="card-subtitle bg-primary">Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: 2
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:blah@blah.com">blah@blah.com</a>
            </li>
            <li class="list-group-item">
                Office number: 10
            </li>
        </ul>
    </div>
</div>
` + genTemplate.bottom)
})

test("validate making a list of cards", () => {
    const intern = new Intern();
    const engineer = new Engineer();
    const manager = new Manager();
    const result = genTemplate.htmlTemplate([intern,engineer,manager]);

    expect(result).toBe(genTemplate.top + 
`
<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">Bob</h2>
        <h3 class="card-subtitle bg-primary">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: 2
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:blah@blah.com">blah@blah.com</a>
            </li>
            <li class="list-group-item">
                School: blah
            </li>
        </ul>
    </div>
</div>
` + `

<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">Bob</h2>
        <h3 class="card-subtitle bg-primary">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: 2
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:blah@blah.com">blah@blah.com</a>
            </li>
            <li class="list-group-item">
                GitHub: <a href="https://github.com/blah" target="_blank">blah</a>
            </li>
        </ul>
    </div>
</div>
` + `

<div class="card col-3 m-3 p-0">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title bg-primary text-white">Bob</h2>
        <h3 class="card-subtitle bg-primary">Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Id: 2
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:blah@blah.com">blah@blah.com</a>
            </li>
            <li class="list-group-item">
                Office number: 10
            </li>
        </ul>
    </div>
</div>
` + genTemplate.bottom)
})
