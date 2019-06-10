$(".cover").paroller();

new SmoothScroll('a[href*="#"]');

$(".nav-item").click(function() {
  $(".nav-item").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function() {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop() + 150;
    let homeOffset = $("#home").offset().top;
    let aboutMeOffset = $("#about-me").offset().top;
    let portfolioOffset = $("#portfolio").offset().top;
    let contactOffset = $("#contact").offset().top - 150;

    $(".nav-link").removeClass("active");
    if (scroll >= contactOffset) {
      $("#nav-link-contact").addClass("active");
    } else if (scroll >= portfolioOffset) {
      $("#nav-link-portfolio").addClass("active");
    } else if (scroll >= aboutMeOffset) {
      $("#nav-link-about-me").addClass("active");
    } else if (scroll >= homeOffset) {
      $("#nav-link-home").addClass("active");
    }
  });
});

$("#contact-form").submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);

  if (!form.hasClass("disabled")) {
    form.addClass("disabled");

    let myEmail = "jibm_82@yahoo.com.mx";

    let name = $("#name")
      .val()
      .trim();
    let email = $("#email")
      .val()
      .trim();
    let message = $("#message")
      .val()
      .trim();

    Email.send(
      myEmail,
      myEmail,
      `New contact form message from ${name} - ${email}`,
      message,
      {
        token: "68497cd5-c484-4aab-9818-0154648a69c5",
        callback: function done(message) {
          $(".form-control").val("");
          swal({
            type: "success",
            title: "Message sent!",
            text: "Thank you for contact me, I will get back to you ASAP!"
          });
          form.removeClass("disabled");
        }
      }
    );
  }
});
