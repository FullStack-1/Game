$(document).ready(function() {
    $(".sound").on({
        click: function() {
            $(".sound").toggle();
        }
    });

    $(".fullscreen").on({
        click: function() {
            $(".fullscreen").toggle();
        }
    });
});
var element = document.documentElement;

function openFullscreen() {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function third_page() {
    $(".third").fadeIn();
    $(".second").fadeOut();

}

function secondpage() {
    $(".second").fadeIn();
    $(".first").fadeOut();

}


function firstpage() {
    $(".first").fadeIn();
    $(".second").fadeOut();
    $(".container1").fadeOut();
    $(".body").toggleClass("blur");
    $('.third').fadeOut();
}

$(document).ready(function() {
    $(".cross").on({
        click: function() {
            $(".container1").toggle();
            $(".body").toggleClass("blur");
        },
    });
    $(".cross1").on({
        click: function() {
            $(".container1").toggle();
            $(".body").toggleClass("blur");

        },
    });
    $(".info").on({
        click: function() {
            $(".i").toggle();

            $(".body").toggleClass("blur");

        },
    });
    $(".play1").on({
        click: function() {
            $(".i").toggle();
            $(".body").toggleClass("blur");

        },
    });
    $('body').on('dragstart', function() {
        return false;
    });
});