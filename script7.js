function buttonClicked1() {

    $("#hideDiv").show();
    $("#hideDiv1").hide();
    $("#hideDiv2").hide();
    $("#hideDiv3").hide();
    $("#colHide").show();

}

function buttonClicked2() {

    $("#hideDiv").hide();
    $("#hideDiv1").show();
    $("#hideDiv2").hide();
    $("#hideDiv3").hide();
    $("#colHide").show();
}

function buttonClicked3() {

    $("#colHide").hide();
    $("#hideDiv2").show();
    $("#hideDiv3").hide();

}

function buttonClicked4() {

    $("#colHide").hide();
    $("#hideDiv2").hide();
    $("#hideDiv3").show();

}

function buttonClicked5() {

    $("#hideDiv").show();
    $("#hideDiv1").show();
    $("#hideDiv2").show();
    $("#hideDiv3").hide();
    $("#colHide").show();

}

function buttonClicked6() {

    $("#hideDiv").hide();
    $("#hideDiv1").hide();
    $("#hideDiv2").hide();
    $("#hideDiv3").show();
    $("#colHide").hide();

}

function showAll() {

    $("#hideDiv").show();
    $("#hideDiv1").show();
    $("#hideDiv2").show();
    $("#hideDiv3").show();
    $("#colHide").show();

    document.getElementById('DoorHandle5').checked = false;
    document.getElementById('DoorHandle4').checked = false;
    document.getElementById('Door5').checked = false;
    document.getElementById('Door4').checked = false;
    document.getElementById('Door3').checked = false;
    document.getElementById('Door2').checked = false;
    $('#DoorHandle4').prop('disabled', false);
    $('#DoorHandle5').prop('disabled', false);


}



$('input[type=radio][name=flexRadioDefault]').change(function () {
    if ($(this).attr('id') == 'Door5') {
        $('#DoorHandle5').prop('checked', true);
        $('#DoorHandle4').prop('disabled', true);
    } else {
        $('#DoorHandle1').prop('checked', true);
    }
});

$('input[type=radio][name=flexRadioDefault]').change(function () {
    if ($(this).attr('id') == 'Door4') {
        $('#DoorHandle4').prop('checked', true);
        $('#DoorHandle5').prop('disabled', true);
    } else {
        $('#DoorHandle1').prop('checked', true);
    }
});

$('input[type=radio][name=flexRadioDefault]').change(function () {
    if ($(this).attr('id') == 'Door3') {
        $('#DoorHandle4').prop('checked', true);
        $('#DoorHandle5').prop('disabled', true);
    } else {
        $('#DoorHandle1').prop('checked', true);
    }
});

$('input[type=radio][name=flexRadioDefault]').change(function () {
    if ($(this).attr('id') == 'Door2') {
        $('#DoorHandle4').prop('checked', true);
        $('#DoorHandle5').prop('disabled', true);
    } else {
        $('#DoorHandle1').prop('checked', true);
    }
});




