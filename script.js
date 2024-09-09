$(document).ready(function () {
    $(document).on('click', 'form input[type=submit]', function (e) {
        var isInvalid = false;
        $('p.error').text('');

        //check required fields
        $('.required input').each(function () {
            if (!this.value) {
                isInvalid = true;
                $('p.error').text('Missing value for required field!');
                return;
            }
        })

        //check phone number format
        var phoneVal = $('#phone').val();
        var phoneRegex = /^0[0-9]{9}$/g;
        if(phoneVal != '' && !phoneRegex.test(phoneVal)) {
            isInvalid = true;
            $('p.error').text('Phone number must start with "0" and has 10 numbers!');
        }

        var emailVal = $('#email').val();
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(emailVal != '' && !emailRegex.test(emailVal)) {
            isInvalid = true;
            $('p.error').text('Email must be in right format');
        }

        if (isInvalid) {
            e.preventDefault();
        }
    });

    $('#employees').on('keyup', function() {
        $('#employees').val($('#employees').val().replaceAll(/\D/g, ''));
    })
});

