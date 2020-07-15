jQuery(document).ready(function() {
    jQuery('.pluses').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });
    jQuery('.WhyUsSection').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.statistics').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated jackInTheBox',
        offset: 300
    });
    


    jQuery('.HowWeWorks').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 300
    });

    jQuery('.Gallery').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 300
    });

    jQuery('.OurTeam').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInDown',
        offset: 120
    });

    jQuery('footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 50
    });
});