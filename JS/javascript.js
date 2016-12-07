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
});
