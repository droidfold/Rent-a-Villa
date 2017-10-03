var centerLatlng = new google.maps.LatLng(15.5697752,73.7963381);			// ------------- CENTER POINT COORDINATES
var Phase1Latlng = new google.maps.LatLng(15.533394,73.761689); 		// ------------- PHASE 1 COORDINATES	
var Phase2Latlng = new google.maps.LatLng(15.53372,73.761654);			// ------------- PHASE 2 COORDINATES
var Phase3Latlng = new google.maps.LatLng(15.535318,73.767640);			// ------------- PHASE 3 COORDINATES
var Phase4Latlng = new google.maps.LatLng(15.53582,73.767654);			// ------------- PHASE 4 COORDINATES
var Phase5Latlng = new google.maps.LatLng(15.533394,73.762032);			// ------------- PHASE 5 COORDINATES
var Phase6Latlng = new google.maps.LatLng(15.536329,73.767592);			// ------------- PHASE 6 COORDINATES
var Phase7Latlng = new google.maps.LatLng(15.527279,73.762641);			// ------------- PHASE 7 COORDINATES
var Phase8Latlng = new google.maps.LatLng(15.534376614275283,73.76781713923265);			// ------------- PHASE 8 COORDINATES
var Phase9Latlng = new google.maps.LatLng(15.534340435083456, 73.76819264849473);			// ------------- PHASE 9 COORDINATES
var Phase10Latlng = new google.maps.LatLng(15.534810764081852,73.76773130854417);			// ------------- PHASE 10 COORDINATES

function VCmap() {
	var mapOptions = {
	  scrollwheel: false,	
	  zoom: 17,
	  center: centerLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP	// ROADMAP || SATELLITE || HYBRID|| TERRAIN
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	// -------- MARKER PHASE 1 
	var infowinPhase1 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 1</h3>4 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 1
	var markerPhase1 = new google.maps.Marker({
		position: Phase1Latlng,
		map: map,
		title:'Villa Calangute Phase 1',
		icon: 'img/markers/1.png'
	});
	google.maps.event.addListener(markerPhase1, 'click', function() {infowinPhase1.open(map,markerPhase1); });
	// -------- END OF MARKER PHASE 1
	
	// -------- MARKER PHASE 2
	var infowinPhase2 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 2</h3>6 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 2
	var markerPhase2 = new google.maps.Marker({
		position: Phase2Latlng,
		map: map,
		title:'Villa Calangute Phase 2',
        icon: 'img/markers/2.png'
	});
	google.maps.event.addListener(markerPhase2, 'click', function() {infowinPhase2.open(map,markerPhase2); });
	// -------- END OF MARKER PHASE 2
	
	// -------- MARKER PHASE 3
	var infowinPhase3 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 3</h3>3 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 3
	var markerPhase3 = new google.maps.Marker({
		position: Phase3Latlng,
		map: map,
		title:'Villa Calangute Phase 3',
		icon: 'img/markers/3.png'
	});
	google.maps.event.addListener(markerPhase3, 'click', function() {infowinPhase3.open(map,markerPhase3); });
	// -------- END OF MARKER PHASE 3
	
	// -------- MARKER PHASE 4
	var infowinPhase4 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 4</h3>3 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 4
	var markerPhase4 = new google.maps.Marker({
		position: Phase4Latlng,
		map: map,
		title:'Villa Calangute Phase 4',
		icon: 'img/markers/4.png'
	});
	google.maps.event.addListener(markerPhase4, 'click', function() {infowinPhase4.open(map,markerPhase4); });
	// -------- END OF MARKER PHASE 4
	
	// -------- MARKER PHASE 5
	var infowinPhase5 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 5</h3>7 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 5
	var markerPhase5 = new google.maps.Marker({
		position: Phase5Latlng,
		map: map,
		title:'Villa Calangute Phase 5',
		icon: 'img/markers/5.png'
	});
	google.maps.event.addListener(markerPhase5, 'click', function() {infowinPhase5.open(map,markerPhase5); });
    // -------- END OF MARKER PHASE 5
    
    // -------- MARKER PHASE 6
	var infowinPhase6 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 6</h3>3 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 5
	var markerPhase6 = new google.maps.Marker({
		position: Phase6Latlng,
		map: map,
		title:'Villa Calangute Phase 6',
		icon: 'img/markers/6.png'
	});
	google.maps.event.addListener(markerPhase6, 'click', function() {infowinPhase6.open(map,markerPhase6); });
    // -------- END OF MARKER PHASE 6
    
    
    
    
    // -------- MARKER PHASE 7
	var infowinPhase7 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 7</h3>3 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 5
	var markerPhase7 = new google.maps.Marker({
		position: Phase7Latlng,
		map: map,
		title:'Villa Calangute Phase 7',
		icon: 'img/markers/7.png'
	});
	google.maps.event.addListener(markerPhase7, 'click', function() {infowinPhase7.open(map,markerPhase7); });
    // -------- END OF MARKER PHASE 7
    
     // -------- MARKER PHASE 8
	var infowinPhase8 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 8</h3>2 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 5
	var markerPhase8 = new google.maps.Marker({
		position: Phase8Latlng,
		map: map,
		title:'Villa Calangute Phase 8',
		icon: 'img/markers/8.png'
	});
	google.maps.event.addListener(markerPhase8, 'click', function() {infowinPhase8.open(map,markerPhase8); });
    // -------- END OF MARKER PHASE 8
    
     // -------- MARKER PHASE 9
	var infowinPhase9 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 9</h3>3 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 5
	var markerPhase9 = new google.maps.Marker({
		position: Phase9Latlng,
		map: map,
		title:'Villa Calangute Phase 9',
		icon: 'img/markers/9.png'
	});
	google.maps.event.addListener(markerPhase9, 'click', function() {infowinPhase9.open(map,markerPhase9); });
    // -------- END OF MARKER PHASE 9
    
    
    // -------- MARKER PHASE 10
	var infowinPhase10 = new google.maps.InfoWindow({ 
		content: '<h3>Phase 10</h3>9 Bedroom Villa'
	});
	// -------- INFO WINDOW PHASE 10
	var markerPhase10 = new google.maps.Marker({
		position: Phase10Latlng,
		map: map,
		title:'Villa Calangute Phase 10',
		icon: 'img/markers/10.png'
	});
	google.maps.event.addListener(markerPhase10, 'click', function() {infowinPhase10.open(map,markerPhase10); });
    // -------- END OF MARKER PHASE 10
   
	
	// -------- CLOSE INFO WINDOW FUNCTION
	var closeInfoWindow = function() {
		infowinPhase1.close(); infowinPhase2.close(); infowinPhase3.close(); infowinPhase4.close(); infowinPhase5.close();infowinPhase6.close();infowinPhase7.close();
	};
	google.maps.event.addListener(map, 'click', closeInfoWindow);
	// -------- CLOSE INFO WINDOW FUNCTION ENDS HERE
}