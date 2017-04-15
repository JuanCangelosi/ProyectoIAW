$(".btnmodelo").click(mostrarImagen);

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

/*
    Recibe el evento y en base a este obtiene el id del boton presionado, con eso carga el json correspondiente para armar el lente
*/
function mostrarImagen(e){
   
    var lente=e.currentTarget.id;

    var myjson =$.getJSON("jspropios/"+lente+".json", function(json) {
        
        var lente_grafico=json.lente_grafico;
        
        armar(lente_grafico);
        //cargarOpciones(lente);
        
        
    });
    
   

	//		Muestra en consola(para ver si anda	).
	//console.log(document.getElementById("GlassesSVG"));
	/*
		Cada vez que apreten el boton de modelo va a crear el svg, habria que crear como boton  la image demuestra que si ya esta selccionada entonces no entra  a esta func
	*/
	
}

function habilitarOpciones(lente){
    
    
}

function cargarModelos(e){
   
     var myjson =$.getJSON("jspropios/caracteristicas.json", function(json) {
        
        var modelo=json.modelo;
        
         for (i=0, len=modelo.length; i<len ; i++){
             cargarModelo(modelo[i]);
         }
         
         var vidrios=json.vidrio;
         for (i=0, len=vidrios.length; i<len ; i++){
             cargarVidrio(modelo[i]);
         }
        
         var marcos=json.marco;
         for (i=0, len=marcos.length; i<len ; i++){
             cargarVidrio(marcos[i]);
         }
         
        var patillas=json.patillas;
         for (i=0, len=vidrio.length; i<len ; i++){
             cargarPatillas(patillas[i]);
         }
         
          var tamano=json.tamano;
         for (i=0, len=tamano.length; i<len ; i++){
             cargarTamano(tamano[i]);
         }
    });
        
}

function cargarModelo(modelo){
    $("#mostrarModelo").append('<img src="images/muestra_modelos/'+modelo+'.jpg" alt="Imagen de muestra de anteojos'+modelo+'" width="166" height="108" id="'modelo'Grafico" class="btnmodelo">');    
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