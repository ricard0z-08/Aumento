const salarioInput = document.getElementById("salario");
const btnCalcular = document.getElementById("calcular");
const btnLimpar = document.getElementById("limpar");

const novoSalarioEl = document.getElementById("novoSalario");
const aumentoEl = document.getElementById("aumento");
const percentualEl = document.getElementById("percentual");

function calcularAumento(salario) {
  let percentual;

  if (salario <= 1000.0) {
    percentual = 20;
  } else if (salario <= 3000.0) {
    percentual = 15;
  } else if (salario <= 8000.0) {
    percentual = 10;
  } else {
    percentual = 5;
  }

  const aumento = salario * (percentual / 100);
  const novoSalario = salario + aumento;

  return { novoSalario, aumento, percentual };
}

btnCalcular.addEventListener("click", () => {
  const valor = parseFloat(salarioInput.value);

  if (Number.isNaN(valor) || valor < 0) {
    alert("Digite um valor de salário válido!");
    return;
  }

  const { novoSalario, aumento, percentual } = calcularAumento(valor);

  novoSalarioEl.textContent = `Novo salario: R$ ${novoSalario.toFixed(2)}`;
  aumentoEl.textContent = `Aumento: R$ ${aumento.toFixed(2)}`;
  percentualEl.textContent = `Porcentagem: ${percentual} %`;
});

btnLimpar.addEventListener("click", () => {
  salarioInput.value = "";
  novoSalarioEl.textContent = "";
  aumentoEl.textContent = "";
  percentualEl.textContent = "";
  salarioInput.focus();
});