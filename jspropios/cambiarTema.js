$("#tema").click(cambiarCSS);

function cambiarCSS(e){
    var addressValue = $("#cssPropio").attr("href");
    if(addressValue.includes("1")){
	   $('link[href="csspropios/bootstrap1.css"]').attr('href','csspropios/bootstrap2.css');
    }
    else{
        $('link[href="csspropios/bootstrap2.css"]').attr('href','csspropios/bootstrap1.css');
    }
}