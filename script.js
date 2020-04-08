$(document).ready(function() {
    $('#conference_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            domain: {
                validators: {
                        stringLength: {
                        min: 1,
                    },
                        notEmpty: {
                        message: 'Please supply your Domain'
                    }
                }
            },
             opening: {
                validators: {
                     stringLength: {
                        min: 1,
                    },
                    notEmpty: {
                        message: 'Please Fill this Opening'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'Please Fill this Date'
                    }
                }
            },
            duration: {
                validators: {
                    notEmpty: {
                        message: 'Please Fill this Duration'
                    }
                }
            },
            description: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please Fill this description min 8 letter'
                    }
                }
            },
            skills: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please Fill  your Skills'
                    }
                }
            }

            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#conference_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});