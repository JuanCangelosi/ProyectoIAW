$("#mod_OriginalWayfarer").click(mostrarImagen);



function mostrarImagen(e){
	var svgNS = "http://www.w3.org/2000/svg";
	
	//		grupo de vidrios.
	var g_lenses= document.createElementNS(svgNS,"g");
	g_lenses.setAttributeNS(null,"id","lns");

	//		path vidrio izquierdo 
	var p_lns_left= document.createElementNS(svgNS,"path");
	p_lns_left.setAttributeNS(null,"id","lns_l");
	p_lns_left.setAttributeNS(null,"class","st2");//g_lense_left.setAttributeNS(null,"class","st2");
	p_lns_left.setAttributeNS(null,"d","M265.67,112.14c-28.36-1.74-71.17-0.87-88.2,10.92s-10.92,47.6-7.42,64.19\n		s10.59,44.13,25.18,52.84c16.59,9.9,49.49,15.28,77,11.79s45.85-13.97,56.77-34.5c8.84-16.61,21.83-65.06,13.1-81.65\n		C333.35,119.13,287.06,113.45,265.67,112.14z"); //aca iria para buscar JSon osea cambiar para que una funcion se encarge parallenarlo

	//		path vidrio derecho
	var p_lns_right= document.createElementNS(svgNS,"path");
	p_lns_right.setAttributeNS(null,"id","lns_r");
	p_lns_right.setAttributeNS(null,"class","st2");
	p_lns_right.setAttributeNS(null,"d","M590.54,123.06c-17.03-11.79-59.85-12.65-88.2-10.92c-21.4,1.31-67.68,6.99-76.41,23.58\n		c-8.73,16.59,4.26,65.05,13.1,81.65c10.92,20.52,29.26,31,56.77,34.5c27.51,3.49,60.4-1.89,77-11.79\n		c14.59-8.7,21.69-36.24,25.18-52.84C601.45,170.65,607.57,134.85,590.54,123.06z");

	//		Unimos los dos path al grupo de vidrios
	g_lenses.appendChild(p_lns_left);
	g_lenses.appendChild(p_lns_right);

	//		lo agregamos al svg que ya esta creado en el body de html.
	document.getElementById("GlassesSVG").appendChild(g_lenses);

	//		grupo patillas
	var g_temples= document.createElementNS(svgNS,"g");
	g_temples.setAttributeNS(null,"id","temples");

	//		Creamos 1ero path de las patillas delanteras(al reves del ejemplo.html)
	var p_tmp0= document.createElementNS(svgNS,"path");
	p_tmp0.setAttributeNS(null,"id","tmp0");
	p_tmp0.setAttributeNS(null,"fill","black");
	p_tmp0.setAttributeNS(null,"d","M174.9,127.43c20.23,12.12,47.94,46.99,49.42,49.27c5.17,7.98,1.33,23.53,1.12,24.34\n			c-1.24,3.46-3.17,4.54-5.1,4.54c-3.23,0-6.3-2.87-6.46-3.03c-18.28-37.57-52.5-59.83-54.3-61\n			C158.36,132.28,174.07,127.67,174.9,127.43z M593.83,127.43c-20.23,12.12-47.94,46.99-49.42,49.27\n			c-5.17,7.98-1.33,23.53-1.13,24.34c1.24,3.46,3.17,4.54,5.1,4.54c3.23,0,6.29-2.87,6.46-3.03c18.28-37.57,52.49-59.83,54.3-61\n			C610.37,132.28,594.65,127.67,593.83,127.43z");

	//		Creamos 2do path de ptillas pequeñas
	var p_tmp1= document.createElementNS(svgNS,"path");
	p_tmp1.setAttributeNS(null,"id","tmp1");
	p_tmp1.setAttributeNS(null,"fill","white");
	p_tmp1.setAttributeNS(null,"d","M223.58,204.24c-1.06,1.06-2.11,2.12-3.17,3.18c-0.99,0.99-2.11,1.36-3.24,1.36\n			c-3.23,0-6.29-2.87-6.46-3.03c-18.28-37.57-52.49-59.83-54.29-61c-0.39-2.96,0.93-5.44,2.95-7.46c1.06-1.06,2.11-2.12,3.17-3.18\n			c-2.01,2.02-3.34,4.5-2.95,7.46c1.8,1.17,36.01,23.43,54.3,61c0.16,0.15,3.23,3.03,6.46,3.03\n			C221.47,205.59,222.59,205.22,223.58,204.24z\n	M545.15,204.24c1.06,1.06,2.11,2.12,3.17,3.18c0.99,0.99,2.11,1.36,3.23,1.36\n			c3.23,0,6.3-2.87,6.46-3.03c18.28-37.57,52.49-59.83,54.29-61c0.39-2.96-0.93-5.44-2.95-7.46c-1.06-1.06-2.11-2.12-3.17-3.18\n			c2.01,2.02,3.34,4.5,2.95,7.46c-1.8,1.17-36.01,23.43-54.3,61c-0.16,0.15-3.23,3.03-6.46,3.03\n			C547.26,205.59,546.13,205.22,545.15,204.24z");

	//	Agregamos las patillas al grupo perteneciente
	g_temples.appendChild(p_tmp0);
	g_temples.appendChild(p_tmp1);
	//		lo agregamos al svg que ya esta creado en el body de html.
	document.getElementById("GlassesSVG").appendChild(g_temples);

	//		Creamos path del maco
	var p_front= document.createElementNS(svgNS,"path");
	p_front.setAttributeNS(null,"id","front");
	p_front.setAttributeNS(null,"fill","white");
	p_front.setAttributeNS(null,"d","M432.47,108.21c-15.23,5.02-33.19,12.15-48.47,12.15s-33.24-7.13-48.47-12.15\n		C294.49,94.68,191,85.94,125.5,106.9l1.96,36.24c0,0,11.9-2.62,15.83,10.48c3.93,13.1,13.06,67.1,29.75,88.2\n		c20.72,26.2,65.35,27.21,95.54,25.91c40.64-1.75,67.24-19.8,78.6-50.36c11.35-30.57,17.76-56.77,25.03-65.06\n		c3.92-4.48,8.35-4.79,11.8-4.8c3.45,0.01,7.87,0.33,11.8,4.8c7.27,8.3,13.68,34.5,25.03,65.06c11.35,30.57,37.96,48.61,78.6,50.36\n		c30.18,1.3,74.81,0.29,95.54-25.91c16.69-21.1,25.82-75.1,29.75-88.2c3.93-13.1,15.83-10.48,15.83-10.48l1.96-36.24\n		C577,85.94,473.51,94.68,432.47,108.21z M137.58,123.93c0-2.57,6.58-4.66,14.7-4.66c8.12,0,14.7,2.09,14.7,4.66\n		c0,2.57-6.58,4.66-14.7,4.66C144.16,128.59,137.58,126.5,137.58,123.93z M328.98,217.38c-10.92,20.52-29.26,31-56.77,34.5\n		s-60.4-1.89-77-11.79c-14.59-8.7-21.69-36.24-25.18-52.84s-9.61-52.4,7.42-64.19s59.85-12.65,88.2-10.92\n		c21.4,1.31,67.68,6.99,76.41,23.58C350.81,152.32,337.82,200.77,328.98,217.38z M597.96,187.25\n		c-3.49,16.59-10.59,44.13-25.18,52.84c-16.59,9.9-49.49,15.28-77,11.79c-27.51-3.49-45.85-13.97-56.77-34.5\n		c-8.84-16.61-21.83-65.06-13.1-81.65c8.73-16.59,55.02-22.27,76.41-23.58c28.36-1.74,71.17-0.87,88.2,10.92\n		C607.57,134.85,601.45,170.65,597.96,187.25z M615.72,128.59c-8.12,0-14.7-2.09-14.7-4.66c0-2.57,6.58-4.66,14.7-4.66\n		c8.12,0,14.7,2.09,14.7,4.66C630.42,126.5,623.84,128.59,615.72,128.59z");

	document.getElementById("GlassesSVG").appendChild(p_front);



	//		Muestra en consola(para ver si anda	).
	//console.log(document.getElementById("GlassesSVG"));
	/*
		Cada vez que apreten el boton de modelo va a crear el svg, habria que crear como boton  la image demuestra que si ya esta selccionada entonces no entra  a esta func
	*/
	
}

function chngClscLns(color){
    $("#lns_l").attr('class', color);
     $("#lns_r").attr('class', color);
    //$("#lens_l").setAttributeNS(null,"class","st1");;
}