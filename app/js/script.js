var countries_template, cities_template;

function useTemplate(template, data) {
    var html = template(data);
    $("content").html(html);
}
$(document).ready(function(){
    var source = $("#countries-template").html();
    countries_template = Handlebars.compile(source);
    var html = countries_template(data);
    $("#content").html(html);
});