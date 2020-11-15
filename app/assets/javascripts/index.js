let map;

function initMap() {
  const uluru = { lat: 38.2601975, lng: 140.8297478 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id = "image-box">' +
    '<a href="/maps/show">' + 
    '<img alt="sample" src="/assets/sample.JPG" />' + 
    "</a>" + 
    "</div>"
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
