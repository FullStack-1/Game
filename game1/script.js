var total_round = 0;
var computer = 0;
var player = 0;
var total_round = 5;

function random() {
    var choices = ["rock", "paper", "scissor"];
    var i = Math.floor(Math.random() * 3);
    var comp = choices[i];
    var x = 0;
    return i;
}

function reset() {
    total_round = 0;
    computer = 0;
    player = 0;
    total_round = 5;
    $(".main_container").fadeOut();
    $(".result").fadeOut();
    $("#reset").fadeIn();
    if ($('.sound-on').css('display') == 'block')
        document.getElementById('myAudio').play();
    else
        document.getElementById('myAudio').pause();
}

function reset_all() {
    total_round = 0;
    computer = 0;
    player = 0;
    total_round = 5;

    $('.box').css('display', 'block');
    $("#reset").fadeOut();
    $("#text").text("Start playing by click any of these 3 buttons");
    $("#computer").text("" + computer);
    $("#player").text("" + player);
    $("#round").text("" + total_round);
    $(".main_container").fadeIn();
    $(".result").fadeIn();
    $("#loser").css('display', 'none');
    $("#winner").css('display', 'none');

}

function round() {

    if (computer >= 3 || player >= 3 || computer + player == 5) {
        $('.box').css('display', 'none');
        $('.heading').css('display', 'none');
        document.getElementById('myAudio').pause();
        if (computer >= 3) {
            $("#loser").css('display', 'block');

            document.getElementById('lose').play();
        } else {
            $("#winner").css('display', 'block');

            document.getElementById('win').play();
        }
        setTimeout(reset, 3500);
    }

}

function image() {
    $('.default_left').css('display', 'none');
    if (x == 0)
        $('.rock-player').css('display', 'block');
    else if (x == 1)

        $('.paper-player').css('display', 'block');
    else if (x == 2)
        $('.scissors-player').css('display', 'block');
    setTimeout(timeout, 1000);

}

function animation() {

    $(".default_left").effect("shake", { direction: "up", times: 6, distance: 10 }, 1000);
    $(".default_right").effect("shake", { direction: "up", times: 6, distance: 10 }, 1000);
    setTimeout(image, 1090);
}

function timeout() {
    $('.left-img').slideUp();
    $('.right-img').slideUp();
    $('.vs').slideUp();
    $('.button').slideDown();
    $('.heading').slideDown();
}

function decreament() {
    total_round = total_round - 1;
    $("#round").text("" + total_round);
}

function winner_rock(i, x) {
    // when player selects rock this function should be called
    if (i == 0) {
        $("#text").text("Draw as computer also selects rock");
        setTimeout(cpu_rock, 1090);
    } else if (i == 1) {
        computer = computer + 1;
        $("#text").text("Paper covers Rock");
        setTimeout(cpu_paper, 1090);
        $("#computer").text("" + computer);
        decreament();

    } else if (i == 2) {
        player = player + 1;
        $("#text").text("Rock crashes Scissors");
        setTimeout(cpu_scissors, 1090);
        $("#player").text("" + player);
        decreament();
    }
    setTimeout(round, 1800);
}


function winner_paper(i, x) {
    // when player selects paper this function should be called
    if (i == 1) {
        $("#text").text("Draw as computer also selects paper");
        setTimeout(cpu_paper, 1090);

    } else if (i == 0) {
        player = player + 1;
        $("#text").text("USER win as computer selects rock");
        setTimeout(cpu_rock, 1090);
        $("#player").text("" + player);
        decreament();
    } else if (i == 2) {
        computer = computer + 1;
        $("#text").text("Scissor cuts Paper");
        setTimeout(cpu_scissors, 1090);
        $("#computer").text("" + computer);
        decreament();
    }
    setTimeout(round, 1800);
}

function winner_scissors(i, x) {
    // when player selects scissors this function should be called
    if (i == 2) {
        $("#text").text("draw as computer also selects scissor");
        setTimeout(cpu_scissors, 1090);

    } else if (i == 1) {
        player = player + 1;
        $("#text").text("Scissor cuts Paper");
        setTimeout(cpu_paper, 1090);
        $("#player").text("" + player);
        decreament();
    } else if (i == 0) {
        computer = computer + 1;
        $("#text").text("Rock crashes Scissors");
        setTimeout(cpu_rock, 1090);
        $("#computer").text("" + computer);
        decreament();
    }
    setTimeout(round, 1800);
}

function default_img() {
    $('h2').css('display', 'block');
    $('.heading').slideUp('fast');
    $('.button').slideUp('fast');
    $('.default_left').css('display', 'block');
    $('.default_right').css('display', 'block');
}

function cpu_rock() {
    $('.default_right').css('display', 'none');
    $('.rock-cpu').css('display', 'block');
}

function cpu_paper() {
    $('.default_right').css('display', 'none');
    $('.paper-cpu').css('display', 'block');
}

function cpu_scissors() {
    $('.default_right').css('display', 'none');
    $('.scissors-cpu').css('display', 'block');
}

$(document).ready(function() {
    $('.zero').click(function() {
        var i = random();
        x = 0;
        default_img();
        animation();
        winner_rock(i, x);
    });
    $('.one').click(function() {;
        var i = random();
        x = 1;
        default_img();
        animation();
        winner_paper(i, x);
    });
    $('.two').click(function() {;
        var i = random();
        x = 2;
        default_img();
        animation();
        winner_scissors(i, x);
    });

});