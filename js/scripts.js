// business logic
function isInteger(inputtedNumber) {
  if (inputtedNumber < 0) {
    prompt("Please input a positive integer.");
  } else if (inputtedNumber / 1 !== inputtedNumber) {
      prompt("Please input a positive integer.");
  } else {
    return inputtedNumber;
  };
};

function pingPong(inputtedNumber) {
  for (i = inputtedNumber; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
      $("ul#resultlist").append("<li>" + "pingpong" + "</li>");
    } else if (i % 5 === 0) {
      $("ul#resultlist").append("<li>" + "pong" + "</li>");
    } else if (i % 3 === 0) {
      $("ul#resultlist").append("<li>" + "ping" + "</li>");
    } else if (i < 0) {
      prompt("Please input a positive integer.");
    } else if (i > 0) {
      $("ul#resultlist").append("<li>" + i + "</li>");
    } else {
      prompt("Please input a positive integer.");
    };
  };
};


//UI logic
$(document).ready(function() {
  $("form#pingpongnumber").submit(function(event) {
    $("#resultlist").empty();
    event.preventDefault();

    var inputtedNumber = parseInt($("input#numberinput").val());
    isInteger(inputtedNumber);
    pingPong(inputtedNumber);

  });
});
