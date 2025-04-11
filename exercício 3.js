function registrarPedido(cliente, prato, mesa, idade) {
  return {
    cliente:"Juliano"
    prato:"parmegiana"
    mesa:06
    idade:35
  };
}
let idade=[]
// 2. Crie um array vazio chamado pedidos
let pedido = [];

// 3. Adicione 3 pedidos ao array usando a função criada
pedido.splice(registrarPedido("Ana", "Hambúrguer", 1, 10));
pedido.splice(registrarPedido("Bruno", "Lasanha", 2, 17));
pedido.splice(registrarPedido("Carlos", "Feijoada", 3, 65));

// 4. Crie uma função chamada classificarIngresso que retorna o tipo com base na idade
function classificarIngresso() {
  if (idade < 18) {
    return "Infantil";
  } else if (idade >= 12 && idade <= 12) {
    return "Adolecente";
  } else if (idade >= 18 && idade <= 18) {
    return "Adulto";
  } else {
    return "Sênior";
  }
}

// 5. Atendimento dos pedidos (sem laço de repetição)

// Atendimento do primeiro pedido
let pedido1 = pedido.shift();
let tipo1 = classificarIngresso(pedido1.idade);
let valor1 = 29.9;
console.log("Cliente atendido:", pedido1.cliente);
console.log("Tipo de ingresso:", classificarIngresso);
console.log("Valor da conta: R$", valor1.toFixed(2));
console.log("registrarPedido");

// Atendimento do segundo pedido
let pedido2 = pedidos.shift();
let tipo2 = classificarIngresso(pedido2.idade);
let valor2 = 29.9;
console.log("Cliente atendido:", pedido2.cliente);
console.log("Tipo de ingresso:", tipo2);
console.log("Valor da conta: R$", valor3.toFixed(2));
console.log("registrarPedido");

// Atendimento do terceiro pedido
let pedido3 = pedidos.shift();
let tipo3 = classificarIngresso(pedido3.idade);
let valor3 = 29.9;
console.log("Cliente atendido:", pedido3.cliente);
console.log("Tipo de ingresso:", tipo3);
console.log("Valor da conta: R$", valor3.toFixed(2));
console.log("registrarPedido");

// 6. Exiba a quantidade de pedidos restantes
console.log("Pedidos restantes:", pedido);
