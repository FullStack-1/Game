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

function secondpage() {
    $(".second").css("display", "block");
    $(".first").css("display", "none");

}

function firstpage() {
    $(".first").css("display", "block");
    $(".second").css("display", "none");
    $(".container1").css("display", "none");
    $(".body").toggleClass("blur");
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