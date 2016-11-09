
$(document).ready(function() {
  $("form#pingpongnumber").submit(function(event) {
    $("#resultlist").empty();
    event.preventDefault();

    var inputtedNumber = parseInt($("input#numberinput").val());


    for (i = inputtedNumber; i > 0; i--) {
      if (i % 3 === 0 && i % 5 === 0) {
        $("ul#resultlist").append("<li>" + "pingpong" + "</li>");
      } else if (i % 5 === 0) {
        $("ul#resultlist").append("<li>" + "pong" + "</li>");
      } else if (i % 3 === 0) {
        $("ul#resultlist").append("<li>" + "ping" + "</li>");
      } else {
        $("ul#resultlist").append("<li>" + i + "</li>");
      };
    };

  });
});
