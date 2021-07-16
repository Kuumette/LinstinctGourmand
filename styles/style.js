// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 44.19542;
var lon = 5.94168;
var map = null;
// Fonction d'initialisation de la carte
function initMap() {
	// Créer l'objet "map" et l'insèrer dans l'élément HTML qui a l'ID "map"
	map = new google.maps.Map(document.getElementById("map"), {
		// Nous plaçons le centre de la carte avec les coordonnées ci-dessus
		center: new google.maps.LatLng(lat, lon),
		// Nous définissons le zoom par défaut
		zoom: 18,
		// Nous définissons le type de carte (ici carte routière)
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// Nous activons les options de contrôle de la carte (plan, satellite...)
		mapTypeControl: true,
		// Nous désactivons la roulette de souris
		scrollwheel: false,
		mapTypeControlOptions: {
			// Cette option sert à définir comment les options se placent
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		},
		// Activation des options de navigation dans la carte (zoom...)
		navigationControl: true,
		navigationControlOptions: {
			// Comment ces options doivent-elles s'afficher
			style: google.maps.NavigationControlStyle.ZOOM_PAN,
		},
	});
}
window.onload = function () {
	// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
	initMap();
};

// Nous initialisons une liste de marqueurs
var villes = {
	MultiProject: { lat: 44.19542, lon: 5.94168 },
};
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(lat, lon),
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: true,
		scrollwheel: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		},
		navigationControl: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.ZOOM_PAN,
		},
	});
	// Nous parcourons la liste des villes
	for (ville in villes) {
		var marker = new google.maps.Marker({
			// A chaque boucle, la latitude et la longitude sont lues dans le tableau
			position: { lat: villes[ville].lat, lng: villes[ville].lon },
			// On en profite pour ajouter une info-bulle contenant le nom de la ville
			title: ville,
			map: map,
		});
	}
}
