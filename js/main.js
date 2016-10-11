window.addEventListener("load", function(){

	function obtenerTiempoActual (){
		var datoTiempo = new Date();
		var hora = datoTiempo.getHours();
		var minuto = datoTiempo.getMinutes();
		return  hora + ":"+ minuto;            
	}

	var contenedorChat = document.getElementById("chat");
	var inputIngresarMensaje = document.getElementById("mensajes");
		inputIngresarMensaje.addEventListener("keyup",function(ev){
			var keycode = ev.keyCode;
		if (keycode == 13) {
				var valorinputIngresarMensaje = document.getElementById("mensajes").value;
				var contenedorPadreMensaje = document.createElement("div");
						contenedorPadreMensaje.classList.add("w-message", "w-message-out");
						contenedorChat.appendChild(contenedorPadreMensaje);
						console.log(contenedorPadreMensaje);
				var contenedorMensaje = document.createElement("div");
						contenedorMensaje.classList.add("w-message-text");
						contenedorPadreMensaje.appendChild(contenedorMensaje);
				var textoMensaje = document.createElement("p");
						contenedorMensaje.appendChild(textoMensaje);
						textoMensaje.innerHTML = valorinputIngresarMensaje;
				var contenedorHora = document.createElement("div");
						contenedorHora.classList.add("time");
						contenedorMensaje.appendChild(contenedorHora);
				var hora = document.createElement("div");
						hora.classList.add("time");
						contenedorHora.appendChild(hora);
						hora.innerHTML = obtenerTiempoActual();	
				document.getElementById("mensajes").value = "";			
		}			
		
		});

	var avatares = document.querySelectorAll(".w-recent-chats li .avatar");
	for (var i = 0; i < avatares.length; i++) {
		var elementoAvatares = avatares[i];
		elementoAvatares.addEventListener("click", function(){
			//console.log("prueba");
			//var contenedorHeader = document.getElementById("avatar-header");
			var imgHeader = document.getElementById("img-header");
			var nombreHeader = document.querySelector("#nombre-header");
			// var nombreHeader = this.getElementById("nombre-header");
			var imgAvatar = this.firstElementChild;
			var textoAvatar = imgAvatar.nextElementSibling;
				imgHeader.src = imgAvatar.src;
				nombreHeader.textContent  = 	textoAvatar.textContent;			
		});
		
	}

/*	var divAvatar = document.getElementById("raymi-avatar");
		divAvatar.addEventListener("click", function(){
			var avatarHeader = document.getElementById("avatar-header");
				avatarHeader.innerHTML =  divAvatar;
		});*/
	
});