// Custom JS
$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#mailbox').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=869982085cf9c0d1c424e95210ed3e92",
      data: $("#contactForm").serialize(),
      error: function() {
        $('#mailbox').hide();
        $('#error_message').show(); /*id avec formerrormsg avec un paragraphe blabla*/
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#mailbox').hide();
      $('#success_message').show();
    });
    return false; //to stop the form from submitting
  });
});