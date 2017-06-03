/**
 * Created by Alisa on 04.06.17.
 */

var $success = $('.alert_success');
var $error = $('.alert_error');

$('.contact__form form').on('submit', function(event) {
    event.preventDefault();

    var $this = $(this);
    var request = $.post('/enroll', $this.serialize());

    request.done(function() {
        $success.addClass('alert_show');
        $this.get(0).reset();
    });

    request.fail(function() {
        $error.addClass('alert_show');
    });
});

$('.alert__btn').on('click', function() {
    $(this).closest('.alert').removeClass('alert_show');
});
