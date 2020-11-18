window.onload = function initMap() {
  const uluru = { lat: 38.2601975, lng: 140.8297478 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  for (let index = 0; index < gon.items.length; index++){
    const latitude = gon.items[index].latitude;
    const longitude = gon.items[index].longitude;
    const id = gon.items[index].id
    const url = gon.items[index].image.url;
    const location = { lat : latitude, lng: longitude};
    const contentString = 
      '<div id="content">' +
      '<div id="image-box">' +
      '<a href="/maps/' +
      id +
      '">' +
      '<img alt="sample" src=' +
      url +
      '/>' +
      "</a>" +
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
  }
}
