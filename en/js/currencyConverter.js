function Currency1(){
	c1 = document.getElementById("converter1").value;
	return c1;
}
function Currency2(){
	c2 = document.getElementById("converter2").value;
	return c2;
}

function Calculate(){
c1 = Currency1();
c2 = Currency2();

amount = document.getElementById("value1").value;

if(amount == ""){
	document.getElementById("value2").value = "";
}else{
	if(c1 == "Dollar" && c2 == "SAR"){ document.getElementById("value2").value = amount / 3.75; }
	else if(c1 == "Dollar" && c2 == "DBH"){ document.getElementById("value2").value = amount * 3.75 * 9.95; }
	else if(c1 == "SAR" && c2 == "Dollar"){ document.getElementById("value2").value = amount * 3.75; }
	else if(c1 == "SAR" && c2 == "DBH"){ document.getElementById("value2").value = amount * 9.95; }
	else if(c1 == "DBH" && c2 == "SAR"){ document.getElementById("value2").value = amount / 9.95; }
	else if(c1 == "DBH" && c2 == "Dollar"){ document.getElementById("value2").value = amount / 9.95 * 3.75; }
}
}