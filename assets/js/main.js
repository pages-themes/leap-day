var sectionHeight = function() {
  var total     = $(window).height(),
      $sections = $('section');
  $sections.each(function(){$(this).css('height','auto')});
  var totalHeight = 0;
  $sections.each(function(){ totalHeight += $(this).outerHeight(); });

  if (totalHeight < total) {
    $sections.each(function(){
      var margin = $(this).outerHeight(true) - $(this).height();
      $(this).height(total - margin - 20);
    });
  } else {
    $sections.each(function(){$(this).css('height','auto')});
  }
}

$(window).resize(sectionHeight);

var tagifyHeading = function(elem) {
  return elem.text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'');
}

$(function() {
  $sections = $("section h1");
  for(var i = 1; i < $sections.length; i++)
  {
    // $sections[i].before('</section><section>');
    // console.log('added section break', i);
    console.log('need to prefix </section><section>?');
  }

  $("section h1").each(function(){
    $(this).wrap('<header class="section">');
  });

  $("section h1, section h2, section h3").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + tagifyHeading($(this)) + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",tagifyHeading($(this)));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});
