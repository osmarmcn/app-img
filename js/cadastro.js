
const usernome = document.getElementById('usernome')
const useremail = document.getElementById('email')
const password = document.getElementById('password')
const passwordTwo = document.getElementById('passwordTwo')
const form = document.querySelector('#form')
const codigo = document.querySelector('#id')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    enviarFetch()
})

function validarError(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'

}

function validarSucesso(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function enviarFetch(){
    const nome = usernome.value.trim()
    const email= useremail.value.trim()
    const senha = password.value.trim()
    const conSenha = passwordTwo.value.trim()
    const id = codigo.value


    if(nome === ''){
        validarError(usernome, 'Preencha esse campo')
    }else{
        validarSucesso(usernome)

    }

    if(email === ''){
        validarError(useremail,'Preencha esse campo' )
    }else{
        validarSucesso(useremail)
    }

    if(senha === ''){
        validarError(password,'Preencha esse campo')
    }else if(senha.length < 6 ){
        validarError(password,'Preencha esse campo, a senha deve ter mais que 6 numeros')
        
    }else{
        validarSucesso(password)
    }

    if(conSenha === ''){
        validarError(passwordTwo, 'Preencha esse campo')
    }else if(conSenha.length < 6){
        validarError(passwordTwo, 'Senha incorreta, digite novamente')

    }else if(conSenha !== senha ){

        validarError(passwordTwo, 'Senha incorreta, digite novamente')

    }else if(conSenha === '' || nome ==='' || email === '' || senha ===''){
        alert('algo de errado')

    }else{
        validarSucesso(passwordTwo)
    

        const data ={
            
                nome: nome,
                email:email,
                senha:senha,
                conSenha:conSenha,
                id:id.value
        
            }

            fetch('http://localhost:3000/cadastro',{
                        method:"POST",
                        headers:{
                            'Content-Type': 'application/json',

                        },
                        body: JSON.stringify(data)
                }).then((res) =>{
                    return res.json()
                    
                })
                .then((json) =>{
                    console.log(json)
                    alert('cadastro com sucesso')
                })
                .catch((Error) =>{
                    console.log(Error)
                })
        }    
}

    
    








