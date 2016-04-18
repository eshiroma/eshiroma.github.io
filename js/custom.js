/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// jQuery to reveal the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
// close nav before scrol
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var scrollMs = 1300;
        var $anchor = $(this);
        if (!$anchor.hasClass('navbar-brand')) {
            toggleNavMenu();
        }
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, scrollMs, 'easeInOutExpo');
        event.preventDefault();
    });
});

function toggleNavMenu() {
    var navCollapse = document.getElementById('navbar-collapse');
    var isOpen = navCollapse.style.display === "block";
    navCollapse.style.display = isOpen ? "none" : "block";
}

// Toggle visibility of the responsive menu (mobile)
$('.navbar-toggle').click(toggleNavMenu);

// anonymous functions for initiating lightbox
document.getElementById('gallery-links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

// load all the functions!
function init() {}
