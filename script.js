//IMC
//1. Capturar valores
//2. Calcular o IMC
//3. Gerar classificação do IMC
//4. Organizar as informações
//5. Salvar os dados na lista
//6. ler a lista com os dados
//7. Renderizar o conteúdo no HTML(tabela)
//8. Botão de limpar os registros (Clear (LocalStorage))




function CapturarValores() {
    const nome = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value;

    const dadosUsuario = {
        nome: nome,
        altura: altura,
        peso: peso
    }

    return dadosUsuario;
}

function CalcularImc(altura, peso) {
    const imc = peso / (altura * altura)

    return imc
}

function ClassificarImc(imc) {
    if (imc < 18.5) {
        return "abaixo do peso!"
    } else if (imc < 25) {
        return "peso normal!"
    } else if (imc < 30) {
        return "sobrepeso!"
    } else {
        return "obesidade"
    }
}

function OrganizarDados(dadosUsuario, valorImc, classificacaoImc) {
    const dataHoraAtual = Intl.DateTimeFormat('pt-BR', {timeStyle: 'long', dateStyle: 'short'}).format(Date.now())
    ...dadosUsuario
    const dadosUsuarioCompleto = {
        imc: valorImc.toFixed(2),
        classificacaoImc: classificacaoImc,
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioCompleto;
}


