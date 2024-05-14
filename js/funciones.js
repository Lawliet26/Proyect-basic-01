jQuery(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container-fluid nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-duotone fa-x");
    });
jQuery("header .container-fluid nav a").click(function(){

    jQuery("header .container-fluid nav").removeClassClass("open");
    jQuery(".hamb i").removeClass("fa-duotone fa-x");
    var dev= jQuery(this).attr("href");

    jQuery("html,body").animate({
        "scrollTop": jQuery(dev).offset().top -76
    })
})
}
