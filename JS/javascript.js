$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
    //sectionsColor: ['#fff', '#fff', '#7E8F7C', '#7E8F7C'],
    menu: '#menu',
    // scrollBar: true,
    // autoScrolling: false;
    // normalScrollElements: '#gruppenbild',
    scrollOverflow: false,
    css3: true
  });
  // var elem = document.getElementsByClas("section");
  // elem.addEventListener("change", Auswählen);
  //
  // function Auswählen() {
  //   var head = document.getElementById("header");
  //   console.log(head.innerHTML);
  //   var x = document.getElementsByClass("section").value;
  //   alert('Sie haben einen '+x+' ausgewählt!');
  // }
  // $('.section').onChange(function(){
  //
  // });
  console.log(document.getElementById('fullpage'));
  $("#fullpage").change(function(){
    alert("The text has been changed.");
  });
});
