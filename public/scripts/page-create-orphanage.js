//create map
const map = L.map('mapid').setView([-28.2151585,-48.7081225], 17);

//create and add an tittle layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker) 

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//add photo field
function addPhotoField() {

    //get photos container #images
    const container = document.querySelector('#images');

    //get container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //clone last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);

    //verify if field is empty
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //clear field before add images container 
    input.value = ""

    //add clone to the .images container
    container.appendChild(newFieldContainer)
}

//remove photo field
function deletePhotoField(event) {
    //get selected container
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload') 

    if(fieldsContainer.length < 2) {
        //clean field
        span.parentNode.children[0].value = ""

        return
    }

    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
    //get clicked button
    const toggle = event.currentTarget

    //remove .active
    toggle.parentNode.children[toggle.dataset.value].classList.remove('active') 
    //(data-value oposta a posição child, exclui o outro)

    //put on .active
    toggle.classList.add('active')
    
    const input = document.querySelector('[name=open-on-weekends]')

    //update hidden input
    input.value = toggle.dataset.value
}

function validate(event) {
    const lat = document.querySelector('[name=lat]')
    const lng = document.querySelector('[name=lng]')

    if (lat.value == '' || lng.value == '') {  
        event.preventDefault(); 
        console.log(lat, lng)
    }
}