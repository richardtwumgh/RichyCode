var xmlHttp = createRequest();

function createRequest(){
	var xmlHttp;
	if(window.ActiveXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
		}catch(e){
			xmlHttp = false;
		}
	}else{
		try{
			xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
	}
	if(!xmlHttp){
		alert("Can't run ajax");
	}else{
		return xmlHttp;
	}
function process(){
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
		food = encodeURIComponent(document.getElementById('userInput').value);
		xmlHttp.open("GET","foods.php?food="+food,true);
		xmlHttp.onreadystatechange = handleServerResponse();
		xmlHttp.send(null);
	}else{
		setTimeout('process()',1000);
	}
}

}
function handleServerResponse(){
if(xmlHttp.readyState==4){
	if(xmlHttp.status==200){
		xmlResponse = xmlHttp.responseXML;
		xmlDocument = xmlResponse.documentElement;
		message = xmlDocument.firstChild.data;
		document.getElementById('result').innerHTML= '<span>'+message+'</span>';
		setTimeout('process()',1000);
	}else{
		alert('Something went wrong.');	
	}
}

}



















