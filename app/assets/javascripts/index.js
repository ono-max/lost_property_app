window.onload = function initMap() {
  let cluster = [];
  const uluru = { lat: 38.2601975, lng: 140.8297478 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  for (let index = 0; index < gon.items.length; index++){
    const latitude = gon.items[index].latitude;
    const longitude = gon.items[index].longitude;
    const url = gon.items[index].image.url;
    var location = { lat: latitude, lng: longitude };
    const is_same_location = cluster.some(
      past_location => past_location.lat === location.lat && past_location.lng === location.lng
    );
    // I will change this stupid code later
    if (is_same_location){
      const newLat = latitude + (Math.random() -.5) / 1500;
      const newLng = longitude + (Math.random() -.5) / 1500;
      location = { lat: newLat, lng: newLng };
    }
    const contentString = 
      '<div id="content">' +
      '<div id="image-box" class="' +
      location +
      '">' +
      '<img alt="sample" src=' +
      url +
      '/>' +
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    const marker = new google.maps.Marker({
      position: location,
      map,
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    cluster.push(location);
  }
}
