
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var criaMosquitoTempo = 2000

var nivel = window.location.search // Recupera a dificulade selecionada pelo jogador na pagina index
nivel = nivel.replace('?','')

if(nivel === 'normal'){

	criaMosquitoTempo = 2000

	} else if (nivel === 'intermediario'){

		criaMosquitoTempo = 1500

	} else if (nivel === 'dificil'){

		criaMosquitoTempo = 1000

	}

function infoTela(){

	altura = window.innerHeight
	largura = window.innerWidth

	//console.log(largura,altura)

}

infoTela()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = '../HTML/vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
	
}, 1000)


function randomCreationPosition(){

	//Cria um novo elemento e remove o anterior caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if (vidas > 3) {
			window.location.href = '../HTML/game_over.html'
		} else {
			document.getElementById('v' + vidas).src = "../Imagens/coracao_vazio.png"
			
			vidas++
		}
	}

	//Geração posições diferentes no espaço de tela disponivel
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX //ajuste de posições negativas
	posicaoY = posicaoY < 0 ? 0 : posicaoY //ajuste de posições negativas

	console.log(posicaoX,posicaoY)

	//Criando mosquito na tela
	var mosquito = document.createElement('img')
	mosquito.src = '../Imagens/mosquito.png'
	mosquito.className = randomSize() + ' ' + randomSide()
	mosquito.style.left = posicaoX + 'px' 
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute' 
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function randomSize(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function randomSide(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}