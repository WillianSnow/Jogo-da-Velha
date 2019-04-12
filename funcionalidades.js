//seleção de X ou Y
	function escolha(op){
	var res = op;
	return res;
}
//PASSANDO PARAMETRO COM PROMPT DENTRO DO JS
// var op = prompt("Escolha entre X e O para começar");
// var retorno = escolha(op)
// console.log(retorno);

//TESTE NO CONSOLE DO GOOGLE
// var x=t("X");
// console.log(x);


//MATRIZ 3X3 COM UMA UNICA LINHA 
var mat = [[4, 4, 4], [4, 4, 4], [4, 4, 4]];


//alternar x e o;
//recebendo posição do botao clicado;
var aux = true;
function botao(id, Li, Lj) {

	//saber se essa posição já foi clicada - Vai ter que dar um aguardo aí

	//alternar x e o;
	if (aux) {
		id.classList.add("x");
		// console.log(mat[Li][Lj]);
		mat[Li][Lj] = 1;
		//console.log("x");
		aux = false;
	}
	else {
		id.classList.add("bolinha");
		// console.log(mat[Li][Lj]);
		mat[Li][Lj] = 0;
		// console.log("o");
		aux = true;
	}

	//função para identificar quando der algum vencedor
	//linhas
	if (((mat[0][0] + mat[0][1] + mat[0][2]) == 3) || ((mat[0][0] + mat[0][1] + mat[0][2]) == 0)) {
		alert("vencedor");
		res = 1;
	}
	else if (((mat[1][0] + mat[1][1] + mat[1][2]) == 3) || ((mat[1][0] + mat[1][1] + mat[1][2]) == 0)) {
		alert("vencedor");
		res = 1;
	}
	else if (((mat[2][0] + mat[2][1] + mat[2][2]) == 3) || ((mat[2][0] + mat[2][1] + mat[2][2]) == 0)) {
		alert("vencedor");
		res = 1;
	}

	//colunas
	else if (((mat[0][0] + mat[1][0] + mat[2][0]) == 3) || ((mat[0][0] + mat[1][0] + mat[2][0]) == 0)) {
		alert("vencedor");
		res = 1;
	}
	else if (((mat[0][1] + mat[1][1] + mat[2][1]) == 3) || ((mat[0][1] + mat[1][1] + mat[2][1]) == 0)) {
		alert("vencedor");
		res = 1;
	}
	else if (((mat[0][2] + mat[1][2] + mat[2][2]) == 3) || ((mat[0][2] + mat[1][2] + mat[2][2]) == 0)) {
		alert("vencedor");
		res = 1;
	}

	//diagonais
	else if (((mat[0][0] + mat[1][1] + mat[2][2]) == 3) || ((mat[0][0] + mat[1][1] + mat[2][2]) == 0)) {
		alert("vencedor");
		res = 1;
	}
	else if (((mat[0][2] + mat[1][1] + mat[2][0]) == 3) || ((mat[0][2] + mat[1][1] + mat[2][0]) == 0)) {
		alert("vencedor");
		res = 1;
	}
	// else{
	// 	alert("Deu velha :(")
	// }

}
//console.log(mat)

// window.onload = function() {
//     console.log('apareceu')
// }

// function teste(){
//     console.log("chamou")
// }