// Validar o preenchimento do input nome e email e emitir uma msg

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const valNome = document.getElementById('valNome')
const form = document.getElementById('form')

function ValidarDados (){
    if (nome == null){
        valNome = 'Preencha seu Nome' }
    }

form.addEventListener ('submit', evento => {ValidarDados()})