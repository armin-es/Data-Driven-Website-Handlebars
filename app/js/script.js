var countries_template, cities_template;

function useTemplate(template, data) {
    var html = template(data);
    $("#content").html(html);
}
$(document).ready(function(){
    var source = $("#countries-template").html();
    countries_template = Handlebars.compile(source);

    source = $("#cities-template").html();
    cities_template = Handlebars.compile(source);

    $("#home-tab").click(function(){
        useTemplate(countries_template, data);

    });

    $("#home-tab").click();

});