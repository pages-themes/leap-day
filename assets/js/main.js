function encodeEntry(entry)
{
	return encodeURIComponent(entry.toLowerCase())
}

$(function() {
  $("section h1, section h2, section h3").each(function(){
    $("#sidemenu ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + encodeEntry($(this).text()) + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",encodeEntry($(this).text()));
    $("#sidemenu ul li:first-child a").parent().addClass("active");
  });

  $("#sidemenu ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("section").animate({scrollTop: position}, 400);
    $("#sidemenu ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  new SimpleBar($('#sidemenu')[0], { autoHide: true });
  new SimpleBar($('section')[0], { autoHide: true });
});

