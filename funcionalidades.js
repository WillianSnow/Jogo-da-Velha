// window.onload = escolha
function escolha(){
	op = prompt("Escolha entre 'x' e 'o' para começar");
	console.log(op);
	return op;
	
}
var op = escolha();

function again(){
	var again = prompt("Deseja jogar novamente? [s/n]");
	return again;
}

//MATRIZ 3X3 COM UMA UNICA LINHA 
var mat = [[4, 4, 4], [4, 4, 4], [4, 4, 4]];

//alternar x e o;
//recebendo posição do botao clicado;


//vencedorY
function vencedorY(){
	alert("Parabens O, você foi o vencedor :)");
	var res = again();
	console.log(res);
	if(res == 's'){
		return document.location.reload();
	}
	else{
		alert("Foi muito bom ter você aqui comigo, volte sempre :)");
		return window.close();
	}
}

//vencedorX
function vencedorX(){
	alert("Parabens X, você foi o vencedor :)");
	var res = again();
	console.log(res);
	if(res == 's'){
		return document.location.reload();
	}
	else{
		alert("Foi muito bom ter você aqui comigo, volte sempre :)");
		return window.close();
	}
}
var somaX = 0;
var somaY = 0;
var aux = op;
function botao(element, Li, Lj) {
	
	//alternar x e o;
	if(mat[Li][Lj] == 4){
		if (aux == 'x') {
			element.classList.add("x");
			// console.log(mat[Li][Lj]);
			mat[Li][Lj] = 1;
			//console.log("x");
			aux = 'bolinha';
			somaX = somaX + 1;
		}
		else {
			element.classList.add("bolinha");
			// console.log(mat[Li][Lj]);
			mat[Li][Lj] = 0;
			// console.log("o");
			aux = 'x';
			somaY = somaY + 1;
		}
	}
	else{
		return;
	}
	//função para identificar quando der algum vencedor
	//linhas
	if ((mat[0][0] + mat[0][1] + mat[0][2]) == 3){
		vencedorX();
	}
	else if((mat[0][0] + mat[0][1] + mat[0][2]) == 0){
		vencedorY();
	}
	else if((mat[1][0] + mat[1][1] + mat[1][2]) == 3){
		vencedorX();
	}
	else if((mat[1][0] + mat[1][1] + mat[1][2]) == 0){
		vencedorY();
	}
	else if((mat[2][0] + mat[2][1] + mat[2][2]) == 3){
		vencedorX();
	}
	else if((mat[2][0] + mat[2][1] + mat[2][2]) == 0){
		vencedorY();
	}

	//colunas
	else if((mat[0][0] + mat[1][0] + mat[2][0]) == 3){
		vencedorX();
	}
	else if((mat[0][0] + mat[1][0] + mat[2][0]) == 0){
		vencedorY();
	}
	else if((mat[0][1] + mat[1][1] + mat[2][1]) == 3){
		vencedorX();
	} 
	else if((mat[0][1] + mat[1][1] + mat[2][1]) == 0){
		vencedorY();
	}
	else if((mat[0][2] + mat[1][2] + mat[2][2]) == 3){
		vencedorX();
	}
	else if((mat[0][2] + mat[1][2] + mat[2][2]) == 0){
		vencedorY();
	}

	//diagonais
	else if((mat[0][0] + mat[1][1] + mat[2][2]) == 3){
		vencedorX();
	}
	else if((mat[0][0] + mat[1][1] + mat[2][2]) == 0){
		vencedorY();
	}
	else if((mat[0][2] + mat[1][1] + mat[2][0]) == 3){
		vencedorX();
	}
	else if((mat[0][2] + mat[1][1] + mat[2][0]) == 0){
		vencedorY();
	}
	//Deu velha
	
	else if(somaX+somaY==9){
		alert("Deu velha");
		resposta = again();
		if(resposta == 's'){
			location.reload();
		}
		else{
			window.close();
		}
	}
}

