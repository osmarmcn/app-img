
const form = document.querySelector('#form')
const useremail = document.querySelector('#useremail')
const password = document.querySelector('#password')




const token = localStorage.getItem("token_enxame")

    if(token){
        window.location = "pages/dashboard.html"
    }

form.addEventListener('submit', (e) =>{
    e.preventDefault()  
    getFetch()
    
})


function getFetch(){
    var email = useremail.value.trim()
   var senha = password.value.trim()
   
   fetch(' http://localhost:3000/cadastro?email='+email)
   .then((response) =>{
       return response.json()
       
   })
   .then((data) =>{
       console.log(data)
       if(data.length > 0){
           let usuario = data[0]
           if(data[0].email === email){
                validarSucesso(useremail)
           }

           if(data[0].senha === senha){
            validarSucesso(password)
               alert("usuario logado com sucesso")
               let usuarioTexto = JSON.stringify(usuario)
               localStorage.setItem("token_enxame", usuarioTexto)
               location = "pages/dashboard.html"
           }
       }else{
        validarError(useremail,'campo incorreto' )
        validarError(password,'campo incorreto')
        alert("login ou senha incorretos")
       }
   })
   .catch(err => console.log(err))
}

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



 






