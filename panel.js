window.onload = function(){

    const botao_voltar = document.getElementById("botao_voltar")
    const botao_avancar = document.getElementById("botao_avancar")
    const botao_voltar_prod = document.getElementById("botao_voltar_prod")
    const botao_avancar_prod = document.getElementById("botao_avancar_prod")
    const sair = document.getElementById("sair")


    const clientes = document.getElementById("cliente")
    const produto = document.getElementById("produto")
    const pedido = document.getElementById("pedido")

    const aba_cliente = document.getElementById("aba_cliente")
    const aba_prod = document.getElementById("aba_prod")
    const aba_ped = document.getElementById("aba_ped")
    
    
    //os X dos panels

    const x_cliente = document.getElementById("x-cliente")
    const x_produto = document.getElementById("x-produto")
    const x_pedido = document.getElementById("x-pedido")

    sair.addEventListener("click", function(){
        window.open("index.html", "_parent")

    })


    // passar pelas abas

    clientes.addEventListener("click", function(){
        aba_cliente.classList.remove("desaparecer")
        aba_prod.classList.add("desaparecer")
        aba_ped.classList.add("desaparecer")

    })

    x_cliente.addEventListener("click", function(){
        aba_cliente.classList.add("desaparecer")
    })


    produto.addEventListener("click", function(){
         aba_prod.classList.remove("desaparecer")
         aba_cliente.classList.add("desaparecer")
         aba_ped.classList.add("desaparecer")


    })
    x_produto.addEventListener("click", function(){
        aba_prod.classList.add("desaparecer")
    })


    pedido.addEventListener("click", function(){
        aba_ped.classList.remove("desaparecer")
        aba_cliente.classList.add("desaparecer")
        aba_prod.classList.add("desaparecer")

   })
   x_pedido.addEventListener("click", function(){
    aba_ped.classList.add("desaparecer")
})

    // botoes <   >

    botao_voltar.addEventListener("click", function(){
        aba_ped.classList.remove("desaparecer")
        aba_cliente.classList.add("desaparecer")
    })
    botao_avancar.addEventListener("click", function(){
        aba_cliente.classList.add("desaparecer")
        aba_prod.classList.remove("desaparecer")
    })

    botao_voltar_prod.addEventListener("click", function(){
        aba_cliente.classList.remove("desaparecer")
        aba_prod.classList.add("desaparecer")
    })
    botao_avancar_prod.addEventListener("click", function(){
        aba_ped.classList.remove("desaparecer")
        aba_prod.classList.add("desaparecer")
    })

}