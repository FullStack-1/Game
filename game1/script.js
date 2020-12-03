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
    $(".main_container").css("display", "none");
    $(".result").css("display", "none");
    $("#reset").css("display", "block");
}

function reset_all() {
    total_round = 0;
    computer = 0;
    player = 0;
    total_round = 5;

    $('.box').css('display', 'block');
    $("#reset").css("display", "none");
    $("#text").text("Start playing by click any of these 3 buttons");
    $("#computer").text("" + computer);
    $("#player").text("" + player);
    $("#round").text("" + total_round);
    $(".main_container").css("display", "block");
    $(".result").css("display", "block");
    $("#loser").css('display', 'none');
    $("#winner").css('display', 'none');

}

function round() {

    if (computer >= 3 || player >= 3 || computer + player == 5) {
        $('.box').css('display', 'none');
        $('.heading').css('display', 'none');
        if (computer >= 3) {
            $("#loser").css('display', 'block');
        } else {
            $("#winner").css('display', 'block');
        }
        setTimeout(reset, 2000);
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
    $('.box img').css('display', 'none');
    $('.vs').css('display', 'none');
    $('.button').css('display', 'block');
    $('.heading').css('display', 'block');
}

function decreament() {
    total_round = total_round - 1;
    $("#round").text("" + total_round);
}

function winner_rock(i, x) {
    // when player selects rock this function should be called
    if (i == 0) {
        $("#text").text("draw as computer also selects rock");
        setTimeout(cpu_rock, 1090);
    } else if (i == 1) {
        computer = computer + 1;
        $("#text").text("Computer win as computer selects paper ");
        setTimeout(cpu_paper, 1090);
        $("#computer").text("" + computer);
        decreament();

    } else if (i == 2) {
        player = player + 1;
        $("#text").text("USER win as computer selects scissor");
        setTimeout(cpu_scissors, 1090);
        $("#player").text("" + player);
        decreament();
    }
    setTimeout(round, 1800);
}


function winner_paper(i, x) {
    // when player selects paper this function should be called
    if (i == 1) {
        $("#text").text("draw as computer also selects paper");
        setTimeout(cpu_paper, 1090);

    } else if (i == 0) {
        player = player + 1;
        $("#text").text("USER win as computer selects rock");
        setTimeout(cpu_rock, 1090);
        $("#player").text("" + player);
        decreament();
    } else if (i == 2) {
        computer = computer + 1;
        $("#text").text("Computer win as computer selects scissor");
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
        $("#text").text("USER win as computer selects paper");
        setTimeout(cpu_paper, 1090);
        $("#player").text("" + player);
        decreament();
    } else if (i == 0) {
        computer = computer + 1;
        $("#text").text("Computer win as computer selects rock");
        setTimeout(cpu_rock, 1090);
        $("#computer").text("" + computer);
        decreament();
    }
    setTimeout(round, 1800);
}

function default_img() {
    $('h2').css('display', 'block');
    $('.heading').css('display', 'none');
    $('.button').css('display', 'none');
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
// var CheckScreenOrientation = pc.createScript('checkScreenOrientation');

// CheckScreenOrientation.prototype.initialize = function() {
//     this.paused = false;

//     this.app.graphicsDevice.on('resizecanvas', function(width, height) {
//         calculateDimensions(width, height);
//     });

//     function calculateDimensions(w, h){   
//     w = window.innerWidth;
//     h = window.innerHeight;

//     if(w > h){
//         console.log("Landscape");
//         togglePaused (false);
//     }
//     else if (w === h){
//         console.log("square");
//         togglePaused (true);
//     }
//     else{
//         console.log("Portrait");
//         togglePaused (true);
//     }
//     }    

//     function togglePaused(shouldPause){
//         if (shouldPause === false) {
//             this.pc.app.timeScale = 1;
//             console.log("Resume Game");
//         } else {
//             this.pc.app.timeScale = 0;
//             console.log("Pause Game");
//         }
//     }
// };
// function totalRound() {
//     total_round = total_round + 1;
//     if (total_round == 3) {
//         alert(computer);
//     } else {
//         alert("player", player);
//     }
// }