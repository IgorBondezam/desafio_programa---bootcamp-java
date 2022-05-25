window.onload = function () {

    var usuarioCorreto = []
    var senhaCorreta = []

    //Pegar algo em JSON

    let dadosUser = async function (){

        let url = `arquivos/usuario.json`  
        let dadosFetch = await fetch(url)
        let dadosJson = await dadosFetch.json()

        for(let dadosUsuario of dadosJson.users){
                usuarioCorreto.push(dadosUsuario.user)
                senhaCorreta.push(dadosUsuario.pws)
            }

            clickEntrar( usuarioCorreto, senhaCorreta)

        }
    dadosUser(usuarioCorreto, senhaCorreta)

    
    //Pegar os elementos do HTML

    const body = document.getElementById("body")
    const user = document.getElementById("user")
    const senha = document.getElementById("senha")
    const entrar = document.getElementById("link_panel")
    const quad_erro = document.getElementById("quadrado-erro")
    const btn_erro = document.getElementById("btn_ok")
    const escrita_error = document.getElementById("fala-erro")

        //Função erro - mudar o css

    function error_caixa() {
        body.classList.add("cor_escuro")
        entrar.classList.remove("link_panel")
        user.classList.add("digitar-escuro")
        senha.classList.add("digitar-escuro")
        quad_erro.classList.remove("desaparecer")
        user.setAttribute("disabled", true)
        senha.setAttribute("disabled", true)
    }

        //Função saida do erro - volta o css como estava

    function saida_error() {
        quad_erro.classList.add("desaparecer")
        user.removeAttribute("disabled")
        senha.removeAttribute("disabled")
        body.classList.remove("cor_escuro")
        entrar.classList.add("link_panel")
        user.classList.remove("digitar-escuro")
        senha.classList.remove("digitar-escuro")
    }

    //Função clicar no botão e validar login e senha

    function clickEntrar(user_entrar, senha_entrar){
                        //paramentros do arquivo JSON

        entrar.addEventListener("click", function () {
            try {

                let i = 0
                        //Cmparando o array do arquivo JSON com o que está escrito na caixa de txt
                   while(user_entrar[i] != user.value){
                        i++
                       if(i > user_entrar.length){
                           i = 0
                           while(senha_entrar[i] != senha.value){
                               i++
                               if( i > senha_entrar.length){
                                   break
                                }
                            }
                            break
                        }
                    }
                
                //Tratamento de erro com Try Catch

                if (user.value != user_entrar[i] && senha.value != senha_entrar[i]) throw new Error("Usuário e senha inválido! Tente novamente.")
                if (user.value != user_entrar[i]) throw new Error("Usuário inválido! Tente Novamente.")
                if (senha.value != senha_entrar[i]) throw new Error("Senha inválida! Tente novamente.")
                window.open("html/panel.html", "_parent")
            } catch (error) {
                error_caixa()
                escrita_error.innerHTML = error.message
        }
    })
}

    //Botão ok para sair do erro de login.    

    btn_erro.addEventListener("click", function () {
        saida_error()

    })
}