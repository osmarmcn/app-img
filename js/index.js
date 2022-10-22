
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
    let email = useremail.value.trim()
   let senha = password.value.trim()
   
   fetch(' http://localhost:3000/cadastro?email='+email)
   .then((response) =>{
       return response.json()
       
   })
   .then((data) =>{
       console.log(data)
       if(data.length > 0){
           let usuario = data[0]
           if(data[0].senha === senha){
               alert("usuario logado com sucesso")
               let usuarioTexto = JSON.stringify(usuario)
               localStorage.setItem("token_enxame", usuarioTexto)
               location = "pages/dashboard.html"
           }
       }else{
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



 /*
   let email = useremail.value.trim()
   let senha = password.value.trim()

    fetch(' http://localhost:3000/cadastro?email='+email)
    .then((response) =>{
        return response.json()
        
    })
    .then((data) =>{
        console.log(data)
        if(data.length > 0){
            let usuario = data[0]
            if(data[0].senha === senha){
                alert("usuario logado com sucesso")
            }
        }
    })
    .catch(err => console.log(err));




    $.ajax({
        url:"http://localhost:3000/cadastro?email="+email,
        method:"GET",
        success:(data =>{
            if(data.length > 0){
                let usuario = resultado[0]
                if(data[0].senha === senha){
                    alert("usuario logado com sucesso")

                }
            }

        })

    })
   */







/*function validarUsuario(){
    //let email = useremail.value.trim()
    //let senha = password.value.trim()

    if(email === ''){
        validarError(useremail,'Preencha esse campo' )
    }else{
        validarSucesso(useremail)
    }

    if(senha === ''){
        validarError(password,'Preencha esse campo')
    }

}

function getFetch(){
    var email = useremail.value
    //var senha = password.value.trim()

    fetch(' http://localhost:3000/cadastro?='+email)
    .then((response) =>{
        return response.json()
    })
    .then((json) =>{
        console.log(json)

    })
    .catch(err => console.log(err));


}
*/




