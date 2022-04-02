$(".HTML .WPearpost").each(function () {
  var t = $(this),
    w = t.attr("data-tag"),
    i = t.attr("data-np"),
    wwp = t.attr("title"),
    l = t.attr("data-id"),
    r = Math.floor(Math.random() * i + 1);
  if (w.match("wpear"))
    var n = "/feeds/posts/default?alt=json-in-script&max-results=" + i;
  else if (w.match("wpear.com"))
    n =
      "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" +
      r +
      "&max-results=" +
      i;
  else
    n = "/feeds/posts/default/-/" + w + "?alt=json-in-script&max-results=" + i;
  $.ajax({
    type: "GET",
    url: n,
    dataType: "jsonp",
    success: function (t) {
      for (
        var i =
            '<div class="titleread"><div class="title">' + wwp + '</div><a class="readmore" href="/search/label/' + w + '?&amp;max-results=8">عرض الكل</a></div><div class="WPlabel"><ul class="wpear">',
          r = "",
          n = 0;
        n < t.feed.entry.length;
        n++
      ) {
        for (
          var p = t.feed.entry[n], h = p.title.$t, o = 0;
          o < p.link.length;
          o++
        )
          if (
            ("replies" == p.link[o].rel &&
              "text/html" == p.link[o].type &&
              (p.link[o].title, p.link[o].href),
            "alternate" == p.link[o].rel)
          ) {
            var m = p.link[o].href;
            break;
          }
        var f,
          u = p.content.$t,
          author = t.feed.entry[n].author[0].name.$t,
          wpimg = t.feed.entry[n].author[0].gd$image.src,
          _ = t.feed.entry[0].published.$t,
          g = _.substring(0, 4),
          v = _.substring(5, 7),
          y =
            _.substring(8, 10) +
            " " +
            ["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"][parseInt(v, 10)] +
            " " +
            g,
          x = $("<p>").html(u).text().substring(0, 70) + "...",
          A = p.category[0].term;
        try {
          f = p.media$thumbnail.url
            .replace('s72', 's600')
            .replace("default", "hqdefault");
        } catch (t) {
          (s = p.content.$t),
            (a = s.indexOf("<img")),
            (b = s.indexOf('src="', a)),
            (c = s.indexOf('"', b + 5)),
            (d = s.substr(b + 5, c - b - 5)),
            (f =
              -1 != a && -1 != b && -1 != c && "" != d ? d:"https://blogger.googleusercontent.com/img/a/AVvXsEhv96RttYEfW_avTudldRLgw52mB6VjDncTC4D7oMid0-br1feaq1A4xnv4s8yOvXAOLYpmiU3oS6njmbe3FqN5SNKqUDXBKf65epG9tAJX00LM1sZeCOd9sEyWQL0Dnf6buiqA9uHIMTP4LEUb2FKDgtC_LrBXbdkIS0tCI-L7rc2hSqqmZaS3eLAa=s16000");
        }
        (r += '<li class="wpear-item">'),
          (r +=
            '<div class="wpear-item-img"><a class="post-thumb-wp" href=' +
            m +
            ' title="'+h.replace(/"/g,"")+'"><img data-wp="' +
            f +
            '"  alt="'+h.replace(/"/g,"")+'"></img></a></div>'),
          (r += '<div class="wpear-description">'),
			(r +=
            '<span class="wpear-item-tag"><a href="/search/label/' + A +
            '?max-results=10" class="wpmytag">' +
            A +
            "</a></span>"),
          (r +=
            '<h3 class="wpear-item-title"><a href=' +
            m +
            ">" +
            h +
            "</a></h3>"),      
          (r += '<p class="WPsummary">' + x + "</p>"),
          (r += "</div>"),
          (r += "</li>");
		2}
      (i += r += "</ul></div>"),
        $(".HTML").each(function () {
          var t = $(this).find("object").attr("data-id");
          t == l && $(this).addClass(t);
        }),
        $(".HTML .widget-content").each(function () {
          $(this).find("object").attr("data-tag") == w &&
            $(this).parent().html(i);
        });
    }
  });
});
