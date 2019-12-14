export const getData = async (coords) => {

  var url = "https://en.wikipedia.org/w/api.php";

   var params = {
      action: "query",
      list: "geosearch",
      gscoord: coords.latitude + "|" + coords.longitude,
      gsradius: "10000",
      gslimit: "10",
      format: "json"
   };

   url = url + "?origin=*";
   Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

   try {

   const response = await fetch(url);
   const myJSONResponse = await response.json();
   const placesArray = await myJSONResponse.query.geosearch;
   return placesArray

  } catch(error) {
   console.log(error.message)
  }
}

export const getLink = async (pageid) => {

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      format: "json",
      pageids: pageid,
      prop: "info",
      inprop: "url|talkid"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    try {
    const response = await fetch(url);
    const myJSONResponse = await response.json()
    const p = await myJSONResponse.query.pages
    return p[pageid].fullurl
  } catch(error) {
    console.log(error.message)
  }

}
