$(document).ready(function() {
    $('#mapBlock').css('cursor','pointer');
    $('#mapBlock').on('click', function() {
        window.open('https://www.google.com/maps/place/340+15th+Ave+E,+Seattle,+WA+98112', '_blank');
    });
    $('#emailBlock').css('cursor','pointer');
    $('#emailBlock').on('click', function() {
        document.location = 'mailto:bachang.msw@gmail.com';
    });
    $('#facebookBlock').css('cursor','pointer');
    $('#facebookBlock').on('click', function() {
        window.open('https://www.facebook.com/SpectrumMindBodyWorks/', '_blank');
    });

    resetForm();    

    $('#name').blur(function(e) {
        if ($('#name').val() != '') {
            $('#name').css('border-color','');
        }
    });

    $('#phone').blur(function() {
        if ($('#phone').val() != '') {
            $('#phone').css('border-color','');
            $('#email').css('border-color','');
        }
    });

    $('#email').blur(function() {
        if ($('#email').val() != '') { 
            $('#phone').css('border-color','');
            $('#email').css('border-color','');
        }
    });

    $('#processForm').on('click', function() {
        if (validateMe() == false) {
            $('.valSum').show();
            return;
        }
        var mailName = $('#name').val();
        var mailPronouns = $('#pronouns').val();
        var mailEmail = $('#email').val();
        var mailPhone = $('#phone').val();
        var mailMessage = $('#message').val();
        console.log(mailPronouns);
        var obj = 
            {
                'Name':mailName,
                'Pronouns':mailPronouns,
                'Address':mailEmail,
                'Phone':mailPhone,
                'Message':mailMessage
            };
        $.ajax({
            type: "POST",
            dataType: "json",
            contentType: 'application/json;charset=utf-8',
            // url: "http://localhost:81/api/api/email",
            url: "api/api/email",
            data: JSON.stringify(obj),
            success: function(data) {
                ProcessPostMail();
            }
        });
    });
    function ProcessPostMail() {
        $('#name').val('');
        $('#pronouns').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');
        alert('Your message was successfully sent. Please allow 1 to 2 business days for a reply.');
    }
});

function resetForm() {
    $('#name').val('');
    $('#pronouns').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#message').val('');
    $('.valSum').hide();
}

function validateMe() {
    var val = true;
    $('.valSum').hide();
    $('#name').css('border-color','');
    $('#email').css('border-color','');
    $('#phone').css('border-color','');
    if ($('#name').val() == '') {
        $('#name').css('border-color','red');
        val = false;
    }
    if ($('#email').val() == '' && $('#phone').val() == '') {
        $('#email').css('border-color','red');
        $('#phone').css('border-color','red');
        val = false;
    }
    return val;
}
