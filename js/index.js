!function (o) {
    "use strict";
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var a = o(this.hash);
            if ((a = a.length ? a : o("[name=" + this.hash.slice(1) + "]")).length) {
                return o("html, body").animate(
                    {scrollTop: a.offset().top - 54}, 1e3, "easeInOutExpo"), !1}
        }
    } )
}(jQuery);