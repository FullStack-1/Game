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
    if ($('.sound-on').css('display') == 'block')
        document.getElementById('myAudio').play();
    else
        document.getElementById('myAudio').pause();
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

    $(".second").fadeOut('slow');
    $(".third").slideDown('slow');

}

function secondpage() {
    $(".second").slideDown('slow');
    $(".first").slideUp('slow');

}


function firstpage() {
    $(".first").slideDown('slow');
    $(".second").slideUp('slow');
    $(".container1").slideUp('slow');
    $(".body").toggleClass("blur");
    $('.third').slideUp('slow');
}

$(document).ready(function() {
    $(".cross").on({
        click: function() {
            $(".container1").toggle('slow', 'swing');
            $(".body").toggleClass("blur");
        },
    });
    $(".cross1").on({
        click: function() {
            $(".container1").toggle('slow', 'swing');
            $(".body").toggleClass("blur");

        },
    });
    $(".info").on({
        click: function() {
            $(".i").toggle('fast', 'linear');

            $(".body").toggleClass("blur");

        },
    });
    $(".play1").on({
        click: function() {
            $(".i").toggle('fast', 'linear');
            $(".body").toggleClass("blur");

        },
    });
    $('body').on('dragstart', function() {
        return false;
    });
});