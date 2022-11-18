function initMap() {
	const myLatlng = { lat: 11.2289567, lng: 104.5222362 };
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: myLatlng,
	});
	const marker = new google.maps.Marker({
		position: myLatlng,
		map,
		title: 'Click to zoom',
	});

	map.on('center_changed', () => {
		window.setTimeout(() => {
			map.panTo(marker.getPosition());
		}, 3000);
	});
	marker.on('click', () => {
		map.setZoom(8);
		map.setCenter(marker.getPosition());
	});
}

initMap();
