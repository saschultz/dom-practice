$(document).ready(function() {
  $("button#CATBUT").click(function() {
    $("ul#CAT").prepend("<li>MEOW</li>");
    // $("ul#CAT").children("li").first().click(function() {
    //   alert('MEOW');
    // });
    $("ul#CAT").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#DOGBUT").click(function() {
    $("ul#DOG").prepend("<li>WOOF</li>");
    // $("ul#DOG").children("li").first().click(function() {
    //   alert('WOOF');
    // });
    $("ul#DOG").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
