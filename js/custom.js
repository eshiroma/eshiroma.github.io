/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery: always use double quotes

// jQuery to reveal the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("a.page-scroll").bind("click", function(event) {
        var scrollMs = 1300;
        var $anchor = $(this);

        // close nav dropdown if on mobile
        if ($anchor.hasClass("navbar-link")) {
            toggleNavMenu();
        }

        // animate the scroll
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, scrollMs, "easeInOutExpo");

        // keeps section highlighted in nav
        event.preventDefault();
    });
});

function toggleNavMenu() {
    var $navCollapse = $(document.getElementById("navbar-collapse"));
    if ($navCollapse.hasClass("hidden-links")) {
        $navCollapse.removeClass("hidden-links");
    } else {
        $navCollapse.addClass("hidden-links");
    }
}

// Toggle visibility of the responsive menu (mobile)
$(".navbar-toggle").click(toggleNavMenu);

// anonymous functions for initiating lightbox
document.getElementById("gallery-links").onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName("a");
    blueimp.Gallery(links, options);
};

// load all the functions!
function init() {}
