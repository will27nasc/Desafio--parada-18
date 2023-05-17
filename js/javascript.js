var quantGastos = 0;
var valorTotal = 0;
var saida = '';

let registrarGasto = () => {
    let inDescricao = document.getElementById('descricao');
    let inValor = document.getElementById('valor');
    let listaContas = document.getElementById('listaContas');
    let total = document.getElementById('total');

    let descricao = inDescricao.value;
    let valor = Number(inValor.value);
    
    if(descricao === "" || valor === 0 || isNaN(valor)){
        alert('Informe os dados corretamente!');
        descricao.focus();
        return;
    }

    quantGastos++;
    valorTotal = valorTotal + valor;

    saida = `${saida} ${descricao} - R$ ${valor.toFixed(2)} \n`;
    
    listaContas.textContent = `${saida} --------------------------`;
    total.textContent = `${quantGastos} Gasto(s) - Total R$: ${valorTotal.toFixed(2)}`;

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}

var btRegistrar = document.getElementById('registrar');
btRegistrar.addEventListener('click', registrarGasto);
