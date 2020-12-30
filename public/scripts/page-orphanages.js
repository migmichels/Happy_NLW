//create map
const map = L.map('mapid').setView([-28.2151585,-48.7081225], 15);

//create and add an tittle layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({name, id, lat, lng}) {

//create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
        }).setContent(`${name} <a href="orphanage/?id=${id}">  <img src="/images/arrow-white.svg" </a>`);


    //create and add marker
    L
    .marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(orphanageElement => {
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }
    addMarker(orphanage)
})