export const _getPositionAsync = async (coords) => {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

    url += coords.latitude;
    url += ",";
    url += coords.longitude;
    url += "&key=AIzaSyDJJ5e2qA5k6HpTHsw0NVFSfqdWS8sMW4A";

    try {
      const response = await fetch(url);
      const myJSONresponse = await response.json()
      if (myJSONresponse.status === "OK") {
        const address = await myJSONresponse.results[0].formatted_address
        return address
      } else { return "Oops. I just broke Google."}
    } catch(error) {
      console.log(error.message);
    }
}
