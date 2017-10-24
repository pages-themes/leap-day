var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

function isChinese(text) {
  var re = /[^\u4e00-\u9fa5]/;
  if (re.test(text)) return false;
  return true;
}

function dealAnchor(text) {
  return isChinese(text) ? encodeURI(text).replace(/ /g, '-') : formatStr(text.toLowerCase())
}

function formatStr(str) {
  return str.replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

$(document).ready(function () {
  $("section h1, section h2").each(function() {
    var anchor = dealAnchor($(this).text());
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + anchor + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id", anchor.replace(/[^\w-]+/g, '').toLowerCase());
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $('#' + $(this).attr("href").replace(/[^\w-]+/g, '').toLowerCase()).offset().top - 190;
    $("html, body").animate({ scrollTop: position }, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').load(sectionHeight);
});

fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }
};
