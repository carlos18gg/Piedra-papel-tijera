let marcadoruser=0;
let marcadordelpc=0;
/*Dom variables*/
const marcadoruserSpan=document.getElementById("puntostu");
const marcadordelpcSpan=document.getElementById("puntospc");
const marcador_div=document.querySelector(".marcador");
const resultado_p=document.querySelector(".resultado > p");
const piedra_div=document.getElementById("p");
const papel_div=document.getElementById("pa");
const tijera_div=document.getElementById("t");

function obtenerEleccionPc () {
	const elecciones = ['p','pa','t'];
	const numerorandom = Math.floor(Math.random()*3);
	return elecciones[numerorandom];
}

function convertirPalabra(letra) {
	if(letra=== "p") return "Piedra";
	if(letra=== "pa") return "Papel";
	return "Tijera";
}

function victoria(usuario,pc) {
	const usuariopeque= "(Tú)".fontsize(3).sup();
	const pcpeque= "(PC)".fontsize(3).sup();
	const eleccionusuariodiv=document.getElementById(usuario);
	marcadoruser++;
	marcadoruserSpan.innerHTML=marcadoruser;
	marcadordelpcSpan.innerHTML=marcadordelpc;
	resultado_p.innerHTML=`${convertirPalabra(usuario)}${usuariopeque} gana a ${convertirPalabra(pc)}${pcpeque}. ¡Has ganado! 🏆`;
	eleccionusuariodiv.classList.add('victoriaverde');
	setTimeout(() => eleccionusuariodiv.classList.remove('victoriaverde'),300);
}

function derrota(usuario,pc) {
	const usuariopeque= "(Tú)".fontsize(3).sup();
	const pcpeque= "(PC)".fontsize(3).sup();
	const eleccionusuariodiv=document.getElementById(usuario);
	marcadordelpc++;
	marcadoruserSpan.innerHTML=marcadoruser;
	marcadordelpcSpan.innerHTML=marcadordelpc;
	resultado_p.innerHTML=`${convertirPalabra(usuario)}${usuariopeque} pierde contra ${convertirPalabra(pc)}${pcpeque}. Has perdido. 😥`;
	eleccionusuariodiv.classList.add('derrotarojo');
	setTimeout(() => eleccionusuariodiv.classList.remove('derrotarojo'),300);
}

function empate(usuario,pc) {
	const usuariopeque= "(Tú)".fontsize(3).sup();
	const pcpeque= "(PC)".fontsize(3).sup();
	const eleccionusuariodiv=document.getElementById(usuario);
	resultado_p.innerHTML=`${convertirPalabra(usuario)}${usuariopeque} es igual a ${convertirPalabra(pc)}${pcpeque}. Empate. 🤝`;
	eleccionusuariodiv.classList.add('empategris');
	setTimeout(() => eleccionusuariodiv.classList.remove('empategris'),300);
}

function juego(eleccionusuario) {
	const eleccionPc=obtenerEleccionPc();
	
	switch(eleccionusuario+eleccionPc){
		case "pt":
		case "pap":
		case "tpa":
		 victoria(eleccionusuario,eleccionPc);
		 break;

		case "ppa":
		case "pat":
		case "tp":
		  derrota(eleccionusuario,eleccionPc);
		  break;

		case "pp":
		case "papa":
		case "tt":
		  empate(eleccionusuario,eleccionPc);
		  break;
			}

}


function main() {
	piedra_div.addEventListener('click',() => juego("p"));

    papel_div.addEventListener('click',() => juego("pa"));

    tijera_div.addEventListener('click',() => juego("t"));	
}

main();


