$("#mod_OriginalWayfarer").click(mostrarImagen);

//$("#btnLenteRojo").click(lenteRojo);

function armar(lente_grafico){
    
    $("#GlassesSVG").remove();
    $("#display_anteojos").append('<svg version="1.1" id="GlassesSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 768 384" style="enable-background:new 0 0 768 384;" xml:space="preserve"> </svg> ')
    
    
    var svgNS = "http://www.w3.org/2000/svg";
	
    
	//		grupo de vidrios.
	var g_lenses= document.createElementNS(svgNS,"path");
	g_lenses.setAttributeNS(null,"id","lns");
    g_lenses.setAttributeNS(null,"class",lente_grafico.vidrios.color);
    g_lenses.setAttributeNS(null,"d",lente_grafico.vidrios.forma);


	//		lo agregamos al svg que ya esta creado en el body de html.
	document.getElementById("GlassesSVG").appendChild(g_lenses);

	//		grupo patillas
	var g_temples= document.createElementNS(svgNS,"path");
	g_temples.setAttributeNS(null,"id","temples");
     g_temples.setAttributeNS(null,"class",lente_grafico.patillas.color);
    g_temples.setAttributeNS(null,"d",lente_grafico.patillas.forma);

	document.getElementById("GlassesSVG").appendChild(g_temples);

	//		Creamos path del maco
	var p_front= document.createElementNS(svgNS,"path");
	p_front.setAttributeNS(null,"id","front");
	p_front.setAttributeNS(null,"class",lente_grafico.marco.color);
	p_front.setAttributeNS(null,"d",lente_grafico.marco.forma);

	document.getElementById("GlassesSVG").appendChild(p_front);
}

function mostrarImagen(e){

    $.getJSON("jspropios/lenteGrafico.json", function(json) {
        console.log(json); 
        // this will show the info it in firebug console
        var lente_grafico=json.lente_grafico;
        
        armar(lente_grafico);
        console.log(lente_grafico);
    });
    
    //var lente_grafico=myjson.lente_grafico;
    //console.log(lente_grafico);
    
    
	



	//		Muestra en consola(para ver si anda	).
	//console.log(document.getElementById("GlassesSVG"));
	/*
		Cada vez que apreten el boton de modelo va a crear el svg, habria que crear como boton  la image demuestra que si ya esta selccionada entonces no entra  a esta func
	*/
	
}

/*function lenteRojo(e){
    
    $("#lns").attr('class','st1');
    var caller = e.target || e.srcElement;
    console.log( caller.id );
    //$("#lens_l").setAttributeNS(null,"class","st1");;
}*/

function chngClscLns(color){
    $("#lns").attr('class', color);
}

function chngFront(color){
    $("#front").attr('class', color);
}

function chngPatillas(color){
    $("#temples").attr('class', color);
}