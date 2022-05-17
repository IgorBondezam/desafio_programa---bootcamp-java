import { clientes as dadosClientes } from "../arquivos/clientes.js"
import { produtos as dadosProdutos } from "../arquivos/produtos.js"

window.onload = function () {

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

    const valor_cod_cli = document.getElementById("codigo_cliente")
    const valor_nome_cli = document.getElementById("nome_cliente")
    const data_cli = document.getElementById("data_cliente")

    const valor_cod_pro = document.getElementById("codigo_produto")
    const valor_desc_pro = document.getElementById("desc_produto")
    const valor_preco_pro = document.getElementById("preco_produto")
    const valor_quant_pro = document.getElementById("quantidade_produto")

    const caixa_error = document.getElementById("quadrado-erro")
    const fala_erro = document.getElementById("fala-erro")
    const btn_ok = document.getElementById("btn_ok")
    const lista_lateral = document.getElementById("lista_lateral")
    const div_main = document.getElementById("div_main")


    let i = 0

    //os X dos panels

    const x_cliente = document.getElementById("x-cliente")
    const x_produto = document.getElementById("x-produto")
    const x_pedido = document.getElementById("x-pedido")

    sair.addEventListener("click", function () {
        window.open("index.html", "_parent")

    })


    // passar pelas abas

    clientes.addEventListener("click", function () {
        aba_cliente.classList.remove("desaparecer")
        aba_prod.classList.add("desaparecer")
        aba_ped.classList.add("desaparecer")

        i = 0
        abrir_clientes()

    })

    x_cliente.addEventListener("click", function () {
        aba_cliente.classList.add("desaparecer")
    })


    produto.addEventListener("click", function () {
        aba_prod.classList.remove("desaparecer")
        aba_cliente.classList.add("desaparecer")
        aba_ped.classList.add("desaparecer")

        i = 0
        abrir_produtos()


    })
    x_produto.addEventListener("click", function () {
        aba_prod.classList.add("desaparecer")
    })


    pedido.addEventListener("click", function () {
        aba_ped.classList.remove("desaparecer")
        aba_cliente.classList.add("desaparecer")
        aba_prod.classList.add("desaparecer")

    })
    x_pedido.addEventListener("click", function () {
        aba_ped.classList.add("desaparecer")
    })

    // botoes <   >
        //clientes

    botao_voltar.addEventListener("click", function () {
        try{
            i--
            if (i == -1) throw new Error("Não há cliente abaixo do Código 1")
            abrir_clientes()
            }catch(error){
                causa_error(error)
                i = 0
            }
    })
    botao_avancar.addEventListener("click", function () {
        try{
            i++
            if (i == dadosClientes.length) throw new Error("Não há mais clientes na lista!")
            abrir_clientes()
            }catch(error){
                causa_error(error)
                i = 0
                abrir_clientes()               
            }
    })
    // botoes <   >
            //produtos

    botao_voltar_prod.addEventListener("click", function () {
        try{
            i--
            if (i == -1) throw new Error("Não há produtos abaixo do Código 1")
            abrir_produtos()
            }catch(error){
                causa_error(error)
                i = 0
            }
    })
    botao_avancar_prod.addEventListener("click", function () {
        try{
            i++
            if (i == dadosProdutos.length) throw new Error("Não há mais produtos na lista!")
            abrir_produtos()
            }catch(error){
                causa_error(error)
                i = 0
                abrir_produtos()               
            }
        })

    //Pegar valor
            //CLIENTES

    function abrir_clientes() {
        for (let valor in dadosClientes[i]) {
            if (valor == "codCliente") {
                valor_cod_cli.value = dadosClientes[i][valor]
            }
            if (valor == "nomeCliente") {
                valor_nome_cli.value = dadosClientes[i][valor]
            }
            if (valor == "dataCadCli") {
                data_cli.value = dadosClientes[i][valor]
            }
            console.log(dadosClientes[i][valor])
        }
    }

            //PRODUTOS

    function abrir_produtos() {
        for (let valor in dadosProdutos[i]) {
            if (valor == "codProduto") {
                valor_cod_pro.value = dadosProdutos[i][valor]
            }
            if (valor == "descProduto") {
                valor_desc_pro.value = dadosProdutos[i][valor]
            }
            if (valor == "precoProduto") {
                valor_preco_pro.value = dadosProdutos[i][valor]
            }
            if (valor == "qtdEstoqueProd") {
                valor_quant_pro.value = dadosProdutos[i][valor]
            }
        }
    }


    //mensagem error

    function causa_error(error){
        caixa_error.classList.remove("desaparecer")
        div_main.classList.add("filtro_escuro")
        lista_lateral.classList.add("filtro_escuro")
        fala_erro.innerHTML = error.message
    }

    btn_ok.addEventListener("click", function(){
        caixa_error.classList.add("desaparecer")
        div_main.classList.remove("filtro_escuro")
        lista_lateral.classList.remove("filtro_escuro")

    })
    


}