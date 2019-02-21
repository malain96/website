$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            Email.send({
                SecureToken : '0a16c1ef-9851-4f66-a3f5-8bedfb6b82a0',
                To : 'alain.mathieu1996@gmail.com',
                From : email,
                Subject : 'Website Contact Form: ' + name,
                Body : 'You have received a new message from your website contact form.<br>' +
                    'Here are the details: <br>' +
                    'Name: ' + name + '<br>' +
                    'Email: ' + email + '<br>' +
                    'Phone: ' + phone +'<br>' +
                    'Message:<br> ' +message
            }).then( function (message) {
                if(message === 'OK'){
                    // Success message
                    $('#alertResult').removeClass( 'alert-danger').addClass( 'alert-success').slideDown();
                    $('#resultText').text(language.successMessage);
                    //clear all fields
                    $('#contactForm').trigger("reset");
                }else {
                    // Fail message
                    $('#alertResult').removeClass( 'alert-success').addClass( 'alert-danger').slideDown();
                    $('#resultText').text(language.sorry + firstName + language.errorMessage);
                }
                setTimeout(function() {
                    $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                }, 1000)
            }
        )

        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

function hideAlertResult(){
    $('#alertResult').slideUp();
}

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

