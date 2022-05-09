window.onload = function(){

    const body = document.getElementById("body")
    const user = document.getElementById("user")
    const senha = document.getElementById("senha")
    const entrar = document.getElementById("link_panel")
    const quad_erro = document.getElementById("quadrado-erro")
    const btn_erro = document.getElementById("btn_ok")


    entrar.addEventListener("click", function(){
        if(user.value == "admin" && senha.value=="admin"){
            window.open("panel.html", "_parent")
            
        }else{
            body.classList.add("cor_escuro")
            entrar.classList.remove("link_panel")
            user.classList.add("digitar-escuro")
            senha.classList.add("digitar-escuro")
            quad_erro.classList.remove("desaparecer")
            user.setAttribute("disabled", true)
            senha.setAttribute("disabled", true)


        }
    })

    btn_erro.addEventListener("click", function(){
        quad_erro.classList.add("desaparecer")
        user.removeAttribute("disabled")
        senha.removeAttribute("disabled")
        body.classList.remove("cor_escuro")
        entrar.classList.add("link_panel")
        user.classList.remove("digitar-escuro")
        senha.classList.remove("digitar-escuro")
    })

}