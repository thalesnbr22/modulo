$(document).ready(() => {
	link = window.location.href;
	if(link.includes("auth/realms/internet/")){
		addCaixas();
	}
})
//<button class="button-secondary" name="" id="kc-cancel">Burla MadMax kkkkkkk</button>
function addCaixas(){
	if($("#kc-cancel").attr("name") == "cancel"){
		$("#kc-cancel").html("Burla Horario");
		$("#kc-cancel").attr("name","");
	}
}