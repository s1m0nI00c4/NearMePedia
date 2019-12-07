export const getData = async () => {

  var url = "https://en.wikipedia.org/w/api.php";
  var params = {
      action: "query",
      list: "geosearch",
      gscoord: "37.7891838|-122.4033522",
      gsradius: "10000",
      gslimit: "10",
      format: "json"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  const response = await fetch(url);
  const myJSONResponse = await response.json();
  const placesArray = await myJSONResponse.query.geosearch;

  return placesArray
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

  const response = await fetch(url);
  const myJSONResponse = await response.json()
  const p = await myJSONResponse.query.pages

  return p[pageid].fullurl

}