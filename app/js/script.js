$(document).ready(function(){
var source = $("#countries-template").html();
var countries_template = Handlebars.compile(source);
var html = countries_template(data);
$("#content").html(html);
});