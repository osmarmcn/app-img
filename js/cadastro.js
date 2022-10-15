

let btn = document.querySelector('#btn')
let res = document.querySelector('#res')




    btn.addEventListener('click', function(e){
        e.preventDefault()
        alert('parou')

        let nome = document.querySelector("#nome").value.trim()
        let email = document.querySelector('#email').value.trim()
        let senha = document.querySelector('#senha').value.trim()
        let conSenha = document.querySelector('#conSenha').value.trim()
        let codigo = document.querySelector('#codigo').value.trim()

        console.log(nome)

        let data = {
            nome:nome,
            email:email,
            senha:senha,
            conSenha:conSenha
        }
        //alert(data[{nome,email,senha}.value])
        //console.log(data)

        if(nome === '') {
            // mostrar erro
            // add classe
            setErrorFor(username, 'Preencha esse campo')
        } else {
            // adicionar a classe de sucesso
            setSuccessFor(nome)
        }
    
        if(emailV === '') {
            // mostrar erro
            // add classe
            setErrorFor(email, 'Preencha esse campo')
        } else if (!isEmail(emailV)) {
            setErrorFor(email, 'Email inválido')
        } else {
            // adicionar a classe de sucesso
            setSuccessFor(email)
        }
       
        if(senha === '') {
            // mostrar erro
            // add classe
            setErrorFor(senha, 'Preencha esse campo')
    
        } else if(conSenha.length < 8) { 
            setErrorFor(senha, 'Senha deve ter mais que 8 caracteres')
        } else {
            // adicionar a classe de sucesso
            setSuccessFor(senha)
        }

        if(conSenhaValue === '') {
            // mostrar erro
            // add classe
            setErrorFor(conSenhaValue, 'Preencha esse campo')
    
        } else if(senha !== conSenhaValue) { 
            setErrorFor(conSenha, 'Senhas não tão iguais')
        } else {
            // adicionar a classe de sucesso
            setSuccessFor(conSenha)
        }

        

        if(codigo.value === ""){
            fetch(" http://localhost:3000/cadastro",{
                método : 'POST' ,
                body : JSON . stringify ( data ),
                headers : {
                        'Content-Type' : 'application/json'
                }
            })
            .then((resposta) =>{
                return resposta.json()
            })
            .then((json) =>{
                console.log(json)
            })
            .catch((error) =>{
                console.log(error)

            })
        }else {
            fetch(` http://localhost:3000/cadastro/${codigo}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(resposta){
                return resposta.json();
            })
            .then(function(json){
                console.log(json); 
               
            })
            .catch(function(error){
                console.error(error);
            });
        }

    })

    function setErrorFor(input, message) {
        const ajuste = input.parentElement;
        const small = ajuste.querySelector('small')
    
        small.innerText = message
    
        ajuste.className = 'ajuste error'
    }
    
    function setSuccessFor(input) {
        const ajuste = input.parentElement;
    
        ajsutes.className = 'ajuste success'
    }
    function isEmail(email){
        return
    }
        
    








