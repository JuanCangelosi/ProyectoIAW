//$(".btnmodelo").click(mostrarImagen);

//$(".btnLente").click();

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
function modeloSeleccionado(e){
    
    console.log("Entre a mostrar la img");
   
    var lente=e.currentTarget.id;
    console.log(lente);
    var myjson =$.getJSON("jspropios/"+lente+"Grafico.json", function(json) {
        
        var lente_grafico=json.lente_grafico;
        
        console.log(lente_grafico);
        
        armar(lente_grafico);
        //habilitarOpciones(lente);
        $("#display_nombreElegido").remove();
        $("#display_nombre").append('<span id="display_nombreElegido">'+lente+'</span>');
		chngClscLns('st0');
		
    });

	//		Muestra en consola(para ver si anda	).
	//console.log(document.getElementById("GlassesSVG"));
	/*
		Cada vez que apreten el boton de modelo va a crear el svg, habria que crear como boton  la image demuestra que si ya esta selccionada entonces no entra  a esta func
	*/
	
}

function habilitarOpciones(lente){
    
    
}

function cargarModelos(){
    
    //accedo a al json que posee los elemento a cargar en el html
   
     var myjson =$.getJSON("jspropios/caracteristicas.json", function(json) {
        
          console.log(json);
         //si logre entrar
         
         //cargo los modelos de lentes
         var i=0;
         var len=0;
         var modelos=json.modelo;
         for (i=0, len=modelos.length; i<len ; i++){
             cargarModelo(modelos[i]);
         }
         
         //cargo los posibles colores de vidrio
         var vidrios=json.vidrio;
         for (i=0, len=vidrios.length; i<len ; i++){
             cargarVidrio(vidrios[i]);
		}
        
         //cargo los posibles colores de marco
         var marcos=json.marco;
         for (i=0, len=marcos.length; i<len ; i++){
             cargarMarco(marcos[i]);
         }
         
         //cargo los posibles colores de patilla
        var patillas=json.patillas;
         for (i=0, len=patillas.length; i<len ; i++){
             cargarPatillas(patillas[i]);
         }
         
         //cargo los posibles tamaños
          var tamano=json.tamano;
         for (i=0, len=tamano.length; i<len ; i++){
             cargarTamano(tamano[i]);
         }
         
    });
        
}

function cargarModelo(modelo){
    var htmlACargar='<img src="images/muestra_modelos/min'+modelo.modelo+'.jpg" alt="Imagen de muestra de anteojos '+modelo.modelo+'" width="150" height="108" id="'+modelo.modelo+'" class="btnmodelo">';
    $("#mostrarModelo").append(htmlACargar);    
}

function cargarVidrio(vidrio){
    $("#mostrarLentes").append("<p> "+vidrio.tipo+" </p>");
    var colores=vidrio.color;
    var coloresAcargar="<p>";
	var sheet = window.document.styleSheets[3]; // para cargar el st al css de estilos
    for(i=0, len=colores.length; i<len; i++){
		var str= "&#39;"+"st"+i+"&#39;";	// por las cmillas del onclick
        coloresAcargar+=' <button class="btn btn-sm" id=btnClr onclick="chngClscLns('+str+')" style="background-color:#'+colores[i]+';"></button>';
		sheet.insertRule('.st'+i+' { fill: #'+colores[i]+'; opacity: 0.6; }', sheet.cssRules.length);
    }
    coloresAcargar=coloresAcargar+"</p>"
     $("#mostrarLentes").append(coloresAcargar);
}

function cargarMarco(marco){
    var colores=marco.color;
    var coloresAcargar="<p>";
    for(i=0, len=colores.length; i<len; i++){
        coloresAcargar=coloresAcargar+colores[i];
    }
    coloresAcargar=coloresAcargar+"</p>"
     $("#mostrarMarcos").append(coloresAcargar);
}

function cargarPatillas(patilla){
    var colores=patilla.color;
    var coloresAcargar="<p>";
    for(i=0, len=colores.length; i<len; i++){
        coloresAcargar=coloresAcargar+colores[i];
    }
    coloresAcargar=coloresAcargar+"</p>"
     $("#mostrarPatillas").append(coloresAcargar);
}

function cargarTamano(tamano){
    
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