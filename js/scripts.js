/*!
 * Start Bootstrap - New Age v6.0.0 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function(responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

let items = document.querySelectorAll('.carousel .carousel-item');


items.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});

var customPin = L.icon({
  iconUrl: '../sa-fem/assets/icone/map-pin.png',
  iconSize: [57, 57],
  iconAnchor: [28, 45]
});

var map1 = L.map('map1').setView([45.79807562058934, 8.406179755835318], 13);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/steferro97/ckp6n7s3p278r17phg7hcg7h7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RlZmVycm85NyIsImEiOiJjazU0OGJmb3EwNDF3M21wNWExMGd6YWhkIn0.WC7fwaVH6_71tm2RVUllaQ', {
  attribution: 'Map data &copy; ' + mapLink,
  maxZoom: 24,
}).addTo(map1);

var marker1 = L.marker([45.79807562058934, 8.406179755835318], {icon: customPin}).addTo(map1);


var map2 = L.map('map2').setView([46.241881105392956, 9.627669298175674], 13);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/steferro97/ckp6n7s3p278r17phg7hcg7h7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RlZmVycm85NyIsImEiOiJjazU0OGJmb3EwNDF3M21wNWExMGd6YWhkIn0.WC7fwaVH6_71tm2RVUllaQ', {
  attribution: 'Map data &copy; ' + mapLink,
  maxZoom: 24,
}).addTo(map2);

var marker2 = L.marker([46.241881105392956, 9.627669298175674], {icon: customPin}).addTo(map2);


var map3 = L.map('map3').setView([45.58933683929842, 10.286550655829666], 13);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/steferro97/ckp6n7s3p278r17phg7hcg7h7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RlZmVycm85NyIsImEiOiJjazU0OGJmb3EwNDF3M21wNWExMGd6YWhkIn0.WC7fwaVH6_71tm2RVUllaQ', {
  attribution: 'Map data &copy; ' + mapLink,
  maxZoom: 24,
}).addTo(map3);

var marker3 = L.marker([45.58933683929842, 10.286550655829666], {icon: customPin}).addTo(map3);


var map4 = L.map('map4').setView([45.70280227850933, 9.248266226996883], 13);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/steferro97/ckp6n7s3p278r17phg7hcg7h7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RlZmVycm85NyIsImEiOiJjazU0OGJmb3EwNDF3M21wNWExMGd6YWhkIn0.WC7fwaVH6_71tm2RVUllaQ', {
  attribution: 'Map data &copy; ' + mapLink,
  maxZoom: 24,
}).addTo(map4);

var marker4 = L.marker([45.70280227850933, 9.248266226996883], {icon: customPin}).addTo(map4);


var map5 = L.map('map5').setView([45.414863111397906, 9.184815655825002], 13);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/steferro97/ckp6n7s3p278r17phg7hcg7h7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RlZmVycm85NyIsImEiOiJjazU0OGJmb3EwNDF3M21wNWExMGd6YWhkIn0.WC7fwaVH6_71tm2RVUllaQ', {
  attribution: 'Map data &copy; ' + mapLink,
  maxZoom: 24,
}).addTo(map5);

var marker5 = L.marker([45.414863111397906, 9.184815655825002], {icon: customPin}).addTo(map5);


var map6 = L.map('map6').setView([45.8865252149027, 10.83968145583766], 13);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/steferro97/ckp6n7s3p278r17phg7hcg7h7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RlZmVycm85NyIsImEiOiJjazU0OGJmb3EwNDF3M21wNWExMGd6YWhkIn0.WC7fwaVH6_71tm2RVUllaQ', {
  attribution: 'Map data &copy; ' + mapLink,
  maxZoom: 24,
}).addTo(map6);

var marker6 = L.marker([45.8865252149027, 10.83968145583766], {icon: customPin}).addTo(map6);

function update_map(n) {

  $('#info-card' + n).on('shown.bs.modal', function(event) {

    if(n == 1){
      map1.invalidateSize();
    }else if(n == 2){
      map2.invalidateSize();
    }else if(n == 3){
      map3.invalidateSize();
    }else if(n == 4){
      map4.invalidateSize();
    }else if(n == 5){
      map5.invalidateSize();
    }else if(n == 6){
      map6.invalidateSize();
    }

  });

}
