import { clientes as dadosClientes } from "../arquivos/clientes.js"
import { produtos as dadosProdutos } from "../arquivos/produtos.js"

window.onload = function () {

    //data
    let data = new Date()

    // botoes < > e sair
    const botao_voltar = document.getElementById("botao_voltar")
    const botao_avancar = document.getElementById("botao_avancar")
    const botao_voltar_prod = document.getElementById("botao_voltar_prod")
    const botao_avancar_prod = document.getElementById("botao_avancar_prod")
    const sair = document.getElementById("sair")

    //botoes laterais
    const clientes = document.getElementById("cliente")
    const produto = document.getElementById("produto")
    const pedido = document.getElementById("pedido")

    //abas das ações
    const aba_cliente = document.getElementById("aba_cliente")
    const aba_prod = document.getElementById("aba_prod")
    const aba_ped = document.getElementById("aba_ped")

    //form cliente
    const valor_cod_cli = document.getElementById("codigo_cliente")
    const valor_nome_cli = document.getElementById("nome_cliente")
    const data_cli = document.getElementById("data_cliente")

    //form produto
    const valor_cod_pro = document.getElementById("codigo_produto")
    const valor_desc_pro = document.getElementById("desc_produto")
    const valor_preco_pro = document.getElementById("preco_produto")
    const valor_quant_pro = document.getElementById("quantidade_produto")

    //error
    const caixa_error = document.getElementById("quadrado-erro")
    const fala_erro = document.getElementById("fala-erro")
    const btn_ok = document.getElementById("btn_ok")
    const lista_lateral = document.getElementById("lista_lateral")
    const div_main = document.getElementById("div_main")

    //id cliente em pedidos
    const numCliPed = document.getElementById("nCliPed")
    const pedido_cliente = document.getElementById("pedido_cliente")

    //localizar produto em pedidos
    const first_txt = document.getElementById("first_txt")
    const segunda_txt = document.getElementById("segunda_txt")
    const terc_txt = document.getElementById("terc_txt")
    const quart_txt = document.getElementById("quart_txt")
    const btn_lancar_ped = document.getElementById("lancar_ped")

    //botao_novo_salver
    let error_salvar = 0
    const botao_novoCli = document.getElementById("botao_novo")
    const botao_salvarCli = document.getElementById("botao_salvar")
    const botao_novoProd = document.getElementById("botao_novo_prod")
    const botao_salvarProd = document.getElementById("botao_salvar_prod")

    //Tablea ped
    const tabela = document.getElementById("tabela_itensPed")
    let i = 0
    const total = document.getElementById("total")
    let soma = 0

    //os X dos panels
    const x_cliente = document.getElementById("x-cliente")
    const x_produto = document.getElementById("x-produto")
    const x_pedido = document.getElementById("x-pedido")

    sair.addEventListener("click", function () {
        window.open("index.html", "_parent")

    })


    // passar pelas abas laterais

    clientes.addEventListener("click", function () {
        if (!aba_cliente.classList.contains("desaparecer")) {
            aba_cliente.classList.add("desaparecer")
        } else {
            aba_cliente.classList.remove("desaparecer")
            aba_prod.classList.add("desaparecer")
            aba_ped.classList.add("desaparecer")
            valor_nome_cli.setAttribute("disabled", true)

            console.log(!aba_cliente.classList.contains("desaparecer"))

            i = 0



            abrir_clientes()
        }
    })

    x_cliente.addEventListener("click", function () {
        aba_cliente.classList.add("desaparecer")
    })


    produto.addEventListener("click", function () {
        if (!aba_prod.classList.contains("desaparecer")) {
            aba_prod.classList.add("desaparecer")
        } else {
            aba_prod.classList.remove("desaparecer")
            aba_cliente.classList.add("desaparecer")
            aba_ped.classList.add("desaparecer")
            valor_desc_pro.setAttribute("disabled", true)
            valor_preco_pro.setAttribute("disabled", true)
            valor_quant_pro.setAttribute("disabled", true)

            i = 0
            abrir_produtos()

        }
    })
    x_produto.addEventListener("click", function () {
        aba_prod.classList.add("desaparecer")
    })


    pedido.addEventListener("click", function () {
        if (!aba_ped.classList.contains("desaparecer")) {
            aba_ped.classList.add("desaparecer")
        } else {
            aba_ped.classList.remove("desaparecer")
            aba_cliente.classList.add("desaparecer")
            aba_prod.classList.add("desaparecer")
        }
    })
    x_pedido.addEventListener("click", function () {
        aba_ped.classList.add("desaparecer")
    })

    // botoes <   >
    //clientes

    botao_voltar.addEventListener("click", function () {
        try {
            i--
            if (i == -1) throw new Error("Não há cliente abaixo do Código 1")
            error_salvar = 0
            valor_nome_cli.setAttribute("disabled", true)
            abrir_clientes()
        } catch (error) {
            causa_error(error)
            i = 0
        }
    })
    botao_avancar.addEventListener("click", function () {
        try {
            i++
            if (i == dadosClientes.length) throw new Error("Não há mais clientes na lista!")
            error_salvar = 0
            valor_nome_cli.setAttribute("disabled", true)
            abrir_clientes()
        } catch (error) {
            causa_error(error)

            abrir_clientes()
        }
    })
    // botoes <   >
    //produtos

    botao_voltar_prod.addEventListener("click", function () {
        try {
            i--
            if (i == -1) throw new Error("Não há produtos abaixo do Código 1")
            valor_desc_pro.setAttribute("disabled", true)
            valor_preco_pro.setAttribute("disabled", true)
            valor_quant_pro.setAttribute("disabled", true)

            abrir_produtos()
        } catch (error) {
            causa_error(error)
            i = 0
        }
    })
    botao_avancar_prod.addEventListener("click", function () {
        try {
            i++
            if (i == dadosProdutos.length) throw new Error("Não há mais produtos na lista!")
            valor_desc_pro.setAttribute("disabled", true)
            valor_preco_pro.setAttribute("disabled", true)
            valor_quant_pro.setAttribute("disabled", true)
            abrir_produtos()
        } catch (error) {
            causa_error(error)

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
        }
    }

    //PRODUTOS

    function abrir_produtos() {
        error_salvar = 0
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

    function causa_error(error) {
        caixa_error.classList.remove("desaparecer")
        div_main.classList.add("filtro_escuro")
        lista_lateral.classList.add("filtro_escuro")
        fala_erro.innerHTML = error.message

        x_cliente.classList.add("desativar_click")
        x_produto.classList.add("desativar_click")
        x_pedido.classList.add("desativar_click")
        botao_novoCli.setAttribute("disabled", true)
        botao_salvarCli.setAttribute("disabled", true)
        botao_novoProd.setAttribute("disabled", true)
        botao_salvarProd.setAttribute("disabled", true)
        clientes.classList.add("desativar_click")
        produto.classList.add("desativar_click")
        pedido.classList.add("desativar_click")
        botao_voltar.setAttribute("disabled", true)
        botao_avancar.setAttribute("disabled", true)
        botao_voltar_prod.setAttribute("disabled", true)
        botao_avancar_prod.setAttribute("disabled", true)
        sair.classList.add("desativar_click")
        numCliPed.setAttribute("disabled", true)
        first_txt.setAttribute("disabled", true)
        quart_txt.setAttribute("disabled", true)
        btn_lancar_ped.setAttribute("disabled", true)
    }

    btn_ok.addEventListener("click", function () {
        caixa_error.classList.add("desaparecer")
        div_main.classList.remove("filtro_escuro")
        lista_lateral.classList.remove("filtro_escuro")

        x_cliente.classList.remove("desativar_click")
        x_produto.classList.remove("desativar_click")
        x_pedido.classList.remove("desativar_click")
        botao_novoCli.removeAttribute("disabled")
        botao_salvarCli.removeAttribute("disabled")
        botao_novoProd.removeAttribute("disabled")
        botao_salvarProd.removeAttribute("disabled")
        clientes.classList.remove("desativar_click")
        produto.classList.remove("desativar_click")
        pedido.classList.remove("desativar_click")
        botao_voltar.removeAttribute("disabled")
        botao_avancar.removeAttribute("disabled")
        botao_voltar_prod.removeAttribute("disabled")
        botao_avancar_prod.removeAttribute("disabled")
        sair.classList.remove("desativar_click")
        numCliPed.removeAttribute("disabled")
        first_txt.removeAttribute("disabled")
        quart_txt.removeAttribute("disabled")
        btn_lancar_ped.removeAttribute("disabled")


    })


    //ADD NOVO CLIENTE NA LISTA
    botao_novoCli.addEventListener("click", function () {
        valor_cod_cli.value = dadosClientes.length + 1
        valor_nome_cli.value = ""
        data_cli.value = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        error_salvar = 1
        if (error_salvar == 1) {
            valor_nome_cli.removeAttribute("disabled")
            data_cli.removeAttribute("disabled")
        } else {
            valor_nome_cli.setAttribute("disabled", true)
            data_cli.setAttribute("disabled", true)
        }
        i = dadosClientes.length

        botao_salvarCli.addEventListener("click", function () {
            try {
                if (valor_nome_cli.value == "") throw new Error("Adicione um nome antes de salvar!")
                if (error_salvar == 1) {
                    dadosClientes.push({ codCliente: valor_cod_cli.value, nomeCliente: valor_nome_cli.value, dataCadCli: data_cli.value })
                }
                error_salvar = 0
                i = 0
                valor_nome_cli.setAttribute("disabled", true)
                data_cli.setAttribute("disabled", true)
                abrir_clientes()
                throw new Error("Cliente cadastrado com sucesso!")
            } catch (error) {
                causa_error(error)
            }
        })

    })



    //ERRO CLICAR SALVAR SEM CLICAR NOVO
    if (error_salvar != 1) {
        botao_salvarCli.addEventListener("click", function () {
            try {
                if (error_salvar != 1) throw new Error("Crie um novo cliente antes de salvar!")
            } catch (error) {
                error_salvar = 0
                causa_error(error)
            }
        })
    }

    //ADD NOVO PRODUTO NA LISTA
    botao_novoProd.addEventListener("click", function () {
        valor_cod_pro.value = dadosProdutos.length + 1
        valor_desc_pro.value = ""
        valor_preco_pro.value = ""
        valor_quant_pro.value = ""
        error_salvar = 1
        if (error_salvar == 1) {
            valor_desc_pro.removeAttribute("disabled")
            valor_preco_pro.removeAttribute("disabled")
            valor_quant_pro.removeAttribute("disabled")

        }
        i = dadosProdutos.length

        botao_salvarProd.addEventListener("click", function () {
            try {
                if (valor_desc_pro.value == "") throw new Error("Adicione um nome antes de salvar!")
                if (valor_preco_pro.value == "") throw new Error("Adicione um preço antes de salvar!")
                if (valor_quant_pro.value == "") throw new Error("Adicione uma quantidade antes de salvar!")
                if (valor_preco_pro.value != Number(valor_preco_pro.value)) throw new Error("Adicione um preço que seja um número válido!")
                if (error_salvar == 1) {
                    dadosProdutos.push({ codProduto: valor_cod_pro.value, descProduto: valor_desc_pro.value, precoProduto: Number(valor_preco_pro.value), qtdEstoqueProd: Number(valor_quant_pro.value) })
                }
                error_salvar = 0
                i = 0
                valor_desc_pro.setAttribute("disabled", true)
                valor_preco_pro.setAttribute("disabled", true)
                valor_quant_pro.setAttribute("disabled", true)
                abrir_produtos()
                throw new Error("Produto cadastrado com sucesso!")
            } catch (error) {
                causa_error(error)
            }
        })

    })



    //ERRO CLICAR SALVAR SEM CLICAR NOVO
    if (error_salvar != 1) {
        botao_salvarProd.addEventListener("click", function () {
            try {
                if (error_salvar != 1) throw new Error("Crie um novo produto antes de salvar!")
            } catch (error) {
                error_salvar = 0
                causa_error(error)
            }
        })
    }




    //VARIAVEIS QUE SÃO USADAS NA FUNÇÃO DOS PEDIDOS PARA A ITERAÇÃO OU COMPARAÇÃO 
    let conferir_arrayObj = []
    let qtnProdMax = ""
    let valor_uni = ""

    //funções PEDIDOS



    //CODIGO DO CLIENTE
    numCliPed.addEventListener("blur", function () {
        for (let valor in dadosClientes) {
            for (let assunt of valor) {
                try {
                    if (Number(numCliPed.value) > dadosClientes.length || Number(numCliPed.value <= 0)) throw new Error("Digite um número de <strong>código de cliente</strong> existente.")
                    if (numCliPed.value == dadosClientes[assunt]["codCliente"]) {
                        pedido_cliente.value = dadosClientes[assunt]["nomeCliente"]
                    }
                } catch (error) {
                    numCliPed.value = ""
                    pedido_cliente.value = ""
                    causa_error(error)
                }
            }
        }
    })


    //LOCALIZAR PRODUTO VALUE and BUTTON

    first_txt.addEventListener("blur", function () {
        try {
            //VERIRIFICAR SE O CODIGO DO CLIENTE ESTÁ INSERIDO
            if (numCliPed.value == "") throw new Error("Digite um código de cliente válido primeiro.")
            if (first_txt.value > dadosProdutos.length || first_txt.value <= 0) throw new Error("Digite um código de produto válido")
            for (let valor in dadosProdutos) {
                for (let assunt of valor) {
                    //ITERAÇÃO NOS OBJETOS DO ARQUIVO IMPORTADO
                    if (first_txt.value == dadosProdutos[assunt]["codProduto"]) {
                        segunda_txt.value = dadosProdutos[assunt]["descProduto"]
                        terc_txt.value = dadosProdutos[assunt]["precoProduto"].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        return qtnProdMax = dadosProdutos[assunt]["qtdEstoqueProd"], valor_uni = dadosProdutos[assunt]["precoProduto"]
                    }
                }
            }
        } catch (error) {
            first_txt.value = ""
            segunda_txt.value = ""
            terc_txt.value = ""
            quart_txt.value = ""
            causa_error(error)
        }
    })

    //BUTTON LANÇAR NO PEDIDO

    btn_lancar_ped.addEventListener("click", function () {

        //Array para comparar e iterar
        let nomeObj = ""
        let arreyObjetos = []
        let lista_obj = []

        try {
            //CONDIÇÃO DE ERRO
            if (Number(first_txt.value) > dadosProdutos.length || Number(first_txt.value <= 0) || first_txt.value == "") throw new Error("Digite um número de <strong>código de produto</strong> existente.")
            if (numCliPed.value == "") throw new Error("Digite um código de cliente válido primeiro.")
            if (quart_txt.value == "") throw new Error("Adicione uma quantidade do item desejado!")
            if (Number(qtnProdMax) < Number(quart_txt.value)) throw new Error("Essa quantidade não está disponível no estoque!")

            //VERIFICA SE O ID DO PRODUTO JÁ ESTÁ NA LISTA
            for (let verifica_erro = 0; verifica_erro < conferir_arrayObj.length; verifica_erro++) {
                if (conferir_arrayObj[verifica_erro][0] == first_txt.value) {
                    arreyObjetos.pop()

                    throw new Error("Use outro ID, esse já foi adicionado.")
                }
            }

            //COLOCA OS ITENS NO ARRAY PARA INSERIR NA TABELA
            nomeObj = first_txt.value
            lista_obj.push(nomeObj)

            nomeObj = segunda_txt.value
            lista_obj.push(nomeObj)

            nomeObj = terc_txt.value
            lista_obj.push(nomeObj)

            nomeObj = quart_txt.value
            lista_obj.push(nomeObj)

            let sub_total = Number(valor_uni) * Number(quart_txt.value)
            nomeObj = sub_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            lista_obj.push(nomeObj)

            conferir_arrayObj.push(lista_obj)
            arreyObjetos.push(lista_obj)

            //CRIAR TABELA = LINHAS E COLUNAS
            for (let medidor = 0; medidor < arreyObjetos.length; medidor++) {
                let linhaBody = document.createElement("tr")
                for (let secMed = 0; secMed < arreyObjetos[medidor].length; secMed++) {
                    //console.log(arreyObjetos[medidor][secMed])
                    let cel = document.createElement("td")
                    cel.textContent = arreyObjetos[medidor][secMed]
                    linhaBody.appendChild(cel)

                }
                tabela.appendChild(linhaBody)
            }

            //SOMA TOTAL
            soma += Number(sub_total)
            total.innerHTML = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        } catch (error) {
            causa_error(error)
        }
    })


}