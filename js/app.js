import data_mapping from "./data.js";


/**
 * Form data
 * @type {Object}
 */
var form1 = {};

/**
 * Subscribe to 'changeData' topic. When data changes, publish 'calmwt' and 'changeDT' topics.
 */
//https://github.com/vihoangson/research/issues/1
$.subscribe('changeData', function (e, data) {
    $.publish('calmwt', {data: {}});
    $.publish('changeDT', {data: {}});
});
/**
 * Subscribe to 'calBMI' topic. When BMI needs to be calculated, calculate and update the form data and UI.
 */
$.subscribe('calBMI', function (e, data) {
    let bmi = form1.weight / (form1.height / 100 * form1.height / 100);
    bmi = bmi.toFixed(2);

    let meanBmi = '';
    // todo: meanBmi = 'Underweight' if bmi < 18.5
    if (bmi < 16.0) {
        meanBmi = '<span style="font-weight:bold; color: red">Severely Underweight</span>';
    }
    if (bmi >= 16.0 && bmi < 18.5) {
        meanBmi = '<span style="font-weight:bold; color: #fc7878">Underweight</span>';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        meanBmi = '<span style="font-weight:bold; color: green">Nomal</span>';
    }
    if (bmi >= 24.9 && bmi < 29.0) {
        meanBmi = '<span style="font-weight:bold; color: #ff468c">Overweight</span>';
    }
    if (bmi >= 29.0 && bmi < 34.9) {
        meanBmi = '<span style="font-weight:bold; color: #fd176e">Moderately Obese</span>';
    }
    if (bmi >= 34.9) {
        meanBmi = '<span style="font-weight:bold; color: #ff0060">Severely Obese</span>';
    }
    form1.bmi = bmi;
    $('#bmi').text(bmi);
    $('#meanbmi').html(meanBmi);
})
/**
 * Subscribe to 'calmwt' topic. When MWT needs to be calculated, calculate and update the form data and UI.
 */
$.subscribe('calmwt', function (e, data) {
    let val_2mwt;
    let val_6mwt;

    if (form1.national === 'vi') {

        val_2mwt = (106 - (0.85 * form1.age) + (0.59 * form1.height) - (6.86 * form1.sex));

        val_6mwt = (276.6 - (2.28 * form1.age) + (1.82 * form1.height) - (19.34 * form1.sex));


    } else {
        val_2mwt = (317.0 - (0.73 * form1.age) - (20.44 * form1.sex) - (2.34 * form1.bmi));
        val_6mwt = (905.38 - (1.83 * form1.age) - (57.85 * form1.sex) - (6.78 * form1.bmi));
    }

    $('#2mwt').text(val_2mwt.toFixed(2));
    $('#6mwt').text(val_6mwt.toFixed(2));
    let ktc952mwt = '';
    let ktc956mwt = '';
    data_mapping.map((item) => {
        if (form1.age >= item.min && form1.age <= item.max && form1.sex === item.sex) {
            ktc952mwt = item['2mwt_' + form1.national];
            ktc956mwt = item['6mwt_' + form1.national];
        }
    });

    $('#ktc952mwt').text(ktc952mwt);
    $('#ktc956mwt').text(ktc956mwt);


});
/**
 * Subscribe to 'changeDT' topic. When data changes, update the form data and UI.
 */
$.subscribe('changeDT', function (e, data) {
    //todo: call api ajax url '/api/caculate' with data
    let datass = $('form#from-caculat').serializeArray();
    let height = 0;
    let weight = 0;
    let age = 0;
    let national = '';
    let sex = 0;
    datass.map((item) => {
        if (item.name === 'weight') {
            weight = item.value;
            form1.weight = weight

        }
        if (item.name === 'height') {
            height = item.value;
            form1.height = height

        }
        if (item.name === 'age') {
            age = item.value;
            form1.age = age

        }
        if (item.name === 'national') {
            national = item.value;
            form1.national = national
        }
        if (item.name === 'sex') {
            sex = item.value;
            form1.sex = sex;
        }
    });


    $.publish('calBMI', {data: {}});

    $.publish('calmwt', {data: {}});

});
/**
 * Prevent form submission
 */

$('form#from-caculat').submit((e) => {
    e.preventDefault();
})

/**
 * Initialize UI
 */
$.publish('changeDT', {data: {}});
/**
 * Initialize UI
 */
$('#timetext').text($('#customRange3').val());
$('#timeheight').text($('#customRange4').val());
$('#timeweight').text($('#customRange5').val());
/**
 * Update UI when range inputs change
 */

const events = ['mousemove', 'touchmove']

$.each(events, function (k, v) {
    $('#customRange3').on(v, function () {
        $('#timetext').text($('#customRange3').val());
    });
    $('#customRange4').on(v, function () {
        $('#timeheight').text($('#customRange4').val());
    });
    $('#customRange5').on(v, function () {
        $('#timeweight').text($('#customRange5').val());
    });
})

/**
 * When the calculate button is clicked, publish 'changeData' topic with the form data.
 */
$("#wrap-result").hide();
$("#wrap-loading").hide();

$("#btn-calculate").click(function () {
    $("#wrap-result").hide();
    $("#wrap-loading").show();
    const data = $('form#from-caculat').serializeArray();
    $.publish('changeData', {data: data});
    setTimeout(() => {
        $("#wrap-result").show();
        $("#wrap-loading").hide();
        $('html, body').animate({
            scrollTop: $("#wrap-result").offset().top
        }, 100);
    },500);


});
$("#btn-reset").click(function () {
    $("#wrap-result").hide();
});

/**
 * When any input changes, if live results are enabled, publish 'changeData' topic with the form data.
 */
$(".input-c").change(function () {
    if (form1.livers) {
        const data = $('form#from-caculat').serializeArray();
        $.publish('changeData', {data: data});
    }
});

/**
 * Initialize live results setting
 */
form1.livers = $("#cb-liveresult").prop('checked');

/**
 * Update live results setting when checkbox changes
 */
$("#cb-liveresult").change(function () {
    form1.livers = $(this).prop('checked');
})

