$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
    menu: '#menu',
    scrollOverflow: false,
    css3: true
  });
  // $(function () {
  //   $('[data-toggle="popover"]').popover();
  // });
  $('#dropdown-menu-mobile').click(function (){
    $('#mobile-dropdown').toggleClass('active');
  });
});
