$("#tema").click(cambiarCSS);

function cambiarCSS(e){
    var addressValue = $("#cssPropio").attr("href");
    if(addressValue.includes("1")){
        console.log("tiene 1");
        setCSS("csspropios/bootstrap2.css");
    }
    else{
        console.log("tiene 2");
        setCSS("csspropios/bootstrap1.css");
    }
}

function setCSS(direccion){
    $("#cssPropio").attr('href', direccion);
    document.cookie = "css="+direccion+"; expires= Fri, 31 Dec 9999 23:59:59 GMT";
}
