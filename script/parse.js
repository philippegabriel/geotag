// JScript File
function fetchQuery() {
//Retrieve query part of URL (from URL: page.html?locationName)
var query = document.location.search;
//Lose the question mark
query = query.substring(1,query.length); 
return query
}
function fetchFileName(string){
//extract the filename
var reg = new RegExp(/file=([^&]*)/);
reg.exec(string);
return RegExp.$1;
}
function fetchId(string){
//extract the filename
var reg = new RegExp(/id=([^&]*)/);
reg.exec(string);
return RegExp.$1;
}
function fetchZoom(string){
//extract the filename
var reg = new RegExp(/zoom=([^&]*)/);
reg.exec(string);
return RegExp.$1;
}
function fetchBanner(string){
//extract the filename
var reg = new RegExp(/banner=([^&]*)/);
reg.exec(string);
return RegExp.$1;
}
function getBannerPicFile(string)
{
switch(string)
    {
    case "canwozhere":
        return "/img/canphilwozhere.jpg";
    case "ukwozhere":
    default:
        return "/img/ukphilwozhere.jpg";   
    }
}


