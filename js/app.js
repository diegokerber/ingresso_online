function comprar() {
    let tipo = document.getElementById('tipo-ingresso');              //Recupera valores da página html
    let qtd = parseInt(document.getElementById('qtd').value);                  //Recupera valores da página html

    //alert(tipo.value);                //testa a recuperação dos valores
    //alert(qtd.value);                 //testa a recuperação dos valores

    if (tipo.value=='pista') {
        comprarPista(qtd);
    } else if (tipo.value=='superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }

}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponível para Pista');

    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');

    }

}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para Superior');

    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');

    }

}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para Inferior');

    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');

    }

}