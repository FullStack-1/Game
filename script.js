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

function totalRound() {
    total_round = total_round + 1;
    if (total_round == 3) {
        alert(computer);
    } else {
        alert("player", player);
    }
}

function default_img() {

    $('h2').css('display', 'none');
    $('button').css('display', 'none');
    $('.default_left').css('display', 'block');
    $('span').css('display', 'block');
    $('.default_right').css('display', 'block');



}

$(document).ready(function() {
    $('.zero').click(function() {
        var i = random();
        x = 0;
        default_img();
        if (i == 0) {
            $("#text").text("draw as computer also selects rock");
            computer = computer + 1;
            player = player + 1;
        } else if (i == 1) {
            $("#text").text("Computer win as computer selects paper");
            computer = computer + 1;
        } else if (i == 2) {
            $("#text").text("USER win as computer selects scissor");
            player = player + 1;
        }

    });
    $('.one').click(function() {;
        var i = random();
        x = 1;
        default_img();
        if (i == 1) {
            $("#text").text("draw as computer also selects paper");
            computer = computer + 1;
            player = player + 1;
        } else if (i == 0) {
            $("#text").text("USER win as computer selects rock");
            player = player + 1;
        } else if (i == 2) {
            $("#text").text("Computer win as computer selects scissor");
            computer = computer + 1;
        }

    });
    $('.two').click(function() {;
        var i = random();
        x = 2;
        default_img();
        if (i == 2) {
            $("#text").text("draw as computer also selects scissor");
            computer = computer + 1;
            player = player + 1;
        } else if (i == 1) {
            $("#text").text("USER win as computer selects paper");
            player = player + 1;
        } else if (i == 0) {
            $("#text").text("Computer win as computer selects rock");
            computer = computer + 1;
        }
    });

});
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

function totalRound() {
    total_round = total_round + 1;
    if (total_round == 3) {
        alert(computer);
    } else {
        alert("player", player);
    }
}

function default_img() {

    $('h2').css('display', 'none');
    $('button').css('display', 'none');
    $('.default_left').css('display', 'block');
    $('span').css('display', 'block');
    $('.default_right').css('display', 'block');



}

$(document).ready(function() {
    $('.zero').click(function() {
        var i = random();
        x = 0;
        default_img();
        if (i == 0) {
            $("#text").text("draw as computer also selects rock");
            computer = computer + 1;
            player = player + 1;
        } else if (i == 1) {
            $("#text").text("Computer win as computer selects paper");
            computer = computer + 1;
        } else if (i == 2) {
            $("#text").text("USER win as computer selects scissor");
            player = player + 1;
        }

    });
    $('.one').click(function() {;
        var i = random();
        x = 1;
        default_img();
        if (i == 1) {
            $("#text").text("draw as computer also selects paper");
            computer = computer + 1;
            player = player + 1;
        } else if (i == 0) {
            $("#text").text("USER win as computer selects rock");
            player = player + 1;
        } else if (i == 2) {
            $("#text").text("Computer win as computer selects scissor");
            computer = computer + 1;
        }

    });
    $('.two').click(function() {;
        var i = random();
        x = 2;
        default_img();
        if (i == 2) {
            $("#text").text("draw as computer also selects scissor");
            computer = computer + 1;
            player = player + 1;
        } else if (i == 1) {
            $("#text").text("USER win as computer selects paper");
            player = player + 1;
        } else if (i == 0) {
            $("#text").text("Computer win as computer selects rock");
            computer = computer + 1;
        }
    });

});