var countries_template, cities_template;

$(document).ready(function(){
    var source = $("#countries-template").html();
    countries_template = Handlebars.compile(source);
    var html = countries_template(data);
    $("#content").html(html);
});