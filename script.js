// get All rooms button
const boxHome = document.getElementById("boxHome");
const allRoomsPen = document.getElementById("pen-allrooms");
const allRoomsHouse = document.getElementById("house-home");
const allRoomsToggle = document.getElementById("allrooms-toggle");
const allRoomsHeader = document.getElementById("allrooms-header");
// add click event
boxHome.addEventListener('click', function () {
    console.log("1working")
    // toggle a call in the class list
    boxHome.classList.toggle("clicked-primary-green");
    boxHome.classList.toggle("clicked-box-shadow-green")
    allRoomsPen.classList.toggle("clicked-third-green");
    allRoomsHeader.classList.toggle("clicked-third-green");
    allRoomsHouse.classList.toggle("clicked-secondary-green");
    allRoomsToggle.classList.toggle("fa-toggle-off");
    allRoomsToggle.classList.toggle("fa-toggle-on");
    allRoomsToggle.classList.toggle("clicked-third-green");
    // lounge button will also turn on
    boxLounge.classList.toggle("clicked-primary-purple");
    boxLounge.classList.toggle("clicked-box-shadow-purple");
    loungePen.classList.toggle("clicked-third-purple");
    loungeHeader.classList.toggle("clicked-third-purple");
    loungeCouch.classList.toggle("clicked-secondary-purple");
    loungeToggle.classList.toggle("fa-toggle-off");
    loungeToggle.classList.toggle("fa-toggle-on");
    loungeToggle.classList.toggle("clicked-third-purple");
    // office button will also turn on
    boxOffice.classList.toggle("clicked-primary-blue");
    boxOffice.classList.toggle("clicked-box-shadow-blue")
    officePen.classList.toggle("clicked-third-blue");
    officeHeader.classList.toggle("clicked-third-blue");
    officeIcon.classList.toggle("clicked-secondary-blue");
    officeToggle.classList.toggle("fa-toggle-off");
    officeToggle.classList.toggle("fa-toggle-on");
    officeToggle.classList.toggle("clicked-third-blue");
    // kitchen button will also turn on
    boxKitchen.classList.toggle("clicked-primary-pink");
    boxKitchen.classList.toggle("clicked-box-shadow-pink");
    kitchenPen.classList.toggle("clicked-third-pink");
    kitchenHeader.classList.toggle("clicked-third-pink");
    kitchenIcon.classList.toggle("clicked-secondary-pink");
    kitchenToggle.classList.toggle("fa-toggle-off");
    kitchenToggle.classList.toggle("fa-toggle-on");
    kitchenToggle.classList.toggle("clicked-third-pink");
    // bedroom will also turn on
    boxBedroom.classList.toggle("clicked-primary-orange");
    boxBedroom.classList.toggle("clicked-box-shadow-orange");
    bedroomPen.classList.toggle("clicked-third-orange");
    bedroomHeader.classList.toggle("clicked-third-orange");
    bedroomIcon.classList.toggle("clicked-secondary-orange");
    bedroomToggle.classList.toggle("fa-toggle-off");
    bedroomToggle.classList.toggle("fa-toggle-on");
    bedroomToggle.classList.toggle("clicked-third-orange");
});


// get Lounge button
const boxLounge = document.getElementById("boxLounge");
const loungePen = document.getElementById("pen-lounge");
const loungeCouch = document.getElementById("couch-home");
const loungeToggle = document.getElementById("lounge-toggle");
const loungeHeader = document.getElementById("lounge-header");
// add click event
boxLounge.addEventListener('click', function () {
    console.log("2working");
    // toggle a call in the class list
    boxLounge.classList.toggle("clicked-primary-purple");
    boxLounge.classList.toggle("clicked-box-shadow-purple");
    loungePen.classList.toggle("clicked-third-purple");
    loungeHeader.classList.toggle("clicked-third-purple");
    loungeCouch.classList.toggle("clicked-secondary-purple");
    loungeToggle.classList.toggle("fa-toggle-off");
    loungeToggle.classList.toggle("fa-toggle-on");
    loungeToggle.classList.toggle("clicked-third-purple");
});


// get Office button
const boxOffice = document.getElementById("boxOffice");
const officePen = document.getElementById("pen-office");
const officeIcon = document.getElementById("briefcase-icon");
const officeToggle = document.getElementById("office-toggle");
const officeHeader = document.getElementById("office-header");
// add click event
boxOffice.addEventListener('click', function () {
    console.log("3working")
    // toggle a call in the class list
    boxOffice.classList.toggle("clicked-primary-blue");
    boxOffice.classList.toggle("clicked-box-shadow-blue")
    officePen.classList.toggle("clicked-third-blue");
    officeHeader.classList.toggle("clicked-third-blue");
    officeIcon.classList.toggle("clicked-secondary-blue");
    officeToggle.classList.toggle("fa-toggle-off");
    officeToggle.classList.toggle("fa-toggle-on");
    officeToggle.classList.toggle("clicked-third-blue");
});



// get Kitchen button
const boxKitchen = document.getElementById("boxKitchen");
const kitchenPen = document.getElementById("pen-kitchen");
const kitchenIcon = document.getElementById("cutlery-home");
const kitchenToggle = document.getElementById("kitchen-toggle");
const kitchenHeader = document.getElementById("kitchen-header");
// add click event
boxKitchen.addEventListener('click', function () {
    console.log("4working")
    // toggle a call in the class list
    boxKitchen.classList.toggle("clicked-primary-pink");
    boxKitchen.classList.toggle("clicked-box-shadow-pink");
    kitchenPen.classList.toggle("clicked-third-pink");
    kitchenHeader.classList.toggle("clicked-third-pink");
    kitchenIcon.classList.toggle("clicked-secondary-pink");
    kitchenToggle.classList.toggle("fa-toggle-off");
    kitchenToggle.classList.toggle("fa-toggle-on");
    kitchenToggle.classList.toggle("clicked-third-pink");
});


// get Bedroom button
const boxBedroom = document.getElementById("boxBedroom");
const bedroomPen = document.getElementById("pen-bedroom");
const bedroomIcon = document.getElementById("bedroom-icon");
const bedroomToggle = document.getElementById("bedroom-toggle");
const bedroomHeader = document.getElementById("bedroom-header");
// add click event
boxBedroom.addEventListener('click', function () {
    console.log("5working")
    // toggle a call in the class list
    boxBedroom.classList.toggle("clicked-primary-orange");
    boxBedroom.classList.toggle("clicked-box-shadow-orange");
    bedroomPen.classList.toggle("clicked-third-orange");
    bedroomHeader.classList.toggle("clicked-third-orange");
    bedroomIcon.classList.toggle("clicked-secondary-orange");
    bedroomToggle.classList.toggle("fa-toggle-off");
    bedroomToggle.classList.toggle("fa-toggle-on");
    bedroomToggle.classList.toggle("clicked-third-orange");
});



// Dropdown menu on Mood Page
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}