// When the browser is ready...
$(function() {

    // Setup form validation on the #register-form element
    $("#register-form").validate({

        // Specify the validation rules
        rules: {
            name: "required",
            age: {
                required: true,
                maxlength: 2
            },
            email: {
                required: true,
                email: true
            },

            tenth: {
                required: true,
                maxlength: 2
            },
            twelve: {
                required: true,
                maxlength: 2
            }
        },

        // Specify the validation error messages
        //        messages: {
        //            name: "Please enter your first name",
        //            age: {
        //                required: "Please provide your age",
        //                minlength: "Your age must be at least 2 digits long"
        //            },
        //            email:"Please enter a valid email address",
        //            tenth: {
        //                required:"Please enter Your marks ",
        //                maxlength:"Pls enter valid marks"
        //            }
        //           ,
        //            twelve: {
        //                required:"Please enter Your marks ",
        //                minlength:"Pls enter valid marks"
        //            }
        //        },

        submitHandler: function(form) {
            form.submit();
        }
    });

});