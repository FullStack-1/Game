var total_round = 0;
var computer = 0;
var player = 0;

function random() {
    var choices = ["rock", "paper", "scissor"];
    var i = Math.floor(Math.random() * 3);
    var comp = choices[i];
    var x = 0;
    return i;
}

function image(i) {

    $('.default_left').css('display', 'none');

    if (x == 0)
        $('.rock-player').css('display', 'block');
    else if (x == 1)

        $('.paper-player').css('display', 'block');
    else if (x == 2)
        $('.scissors-player').css('display', 'block');
}

function animation(i) {

    $(".default_left").effect("shake", { direction: "up", times: 6, distance: 10 }, 1000);
    $(".default_right").effect("shake", { direction: "up", times: 6, distance: 10 }, 1000);
    setTimeout(image, 1090);

}



function default_img() {
    $('h2').css('display', 'block');
    $('.heading').css('display', 'none');
    $('.box button').css('display', 'none');
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
        animation(i);

        if (i == 0) {
            $("#text").text("draw as computer also selects rock");
            setTimeout(cpu_rock, 1090);

        } else if (i == 1) {
            $("#text").text("Computer win as computer selects paper");
            setTimeout(cpu_paper, 1090);
            computer = computer + 1;

        } else if (i == 2) {
            $("#text").text("USER win as computer selects scissor");
            setTimeout(cpu_scissors, 1090);
            player = player + 1;
            winner();
        }
    });
    $('.one').click(function() {;
        var i = random();
        x = 1;
        default_img();
        animation(image);
        if (i == 1) {
            $("#text").text("draw as computer also selects paper");
            setTimeout(cpu_paper, 1090);

        } else if (i == 0) {
            $("#text").text("USER win as computer selects rock");
            setTimeout(cpu_rock, 1090);
            player = player + 1;
        } else if (i == 2) {
            $("#text").text("Computer win as computer selects scissor");
            setTimeout(cpu_scissors, 1090);
            computer = computer + 1;
        }

    });
    $('.two').click(function() {;
        var i = random();
        x = 2;
        default_img();
        animation(image);
        if (i == 2) {
            $("#text").text("draw as computer also selects scissor");
            setTimeout(cpu_scissors, 1090);

        } else if (i == 1) {
            $("#text").text("USER win as computer selects paper");
            setTimeout(cpu_paper, 1090);
            player = player + 1;
        } else if (i == 0) {
            $("#text").text("Computer win as computer selects rock");
            setTimeout(cpu_rock, 1090);
            computer = computer + 1;
        }
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