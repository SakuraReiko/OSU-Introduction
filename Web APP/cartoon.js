function SearchAnim(opts) {
    for(var i in SearchAnim.DEFAULTS) {
      if (opts[i] === undefined) {
        opts[i] = SearchAnim.DEFAULTS[i];
      }
    }
    this.opts = opts;
    this.timer = null;
    this.elem = document.getElementById(opts.elemId);
    this.startAnim();
}
SearchAnim.prototype.startAnim = function () {
    this.stopAnim();
    this.timer = setInterval(() => {
      var startIndex = this.opts.startIndex;
      if (startIndex == 360) {
        this.opts.startIndex = 0;
      }
      this.elem.style.transform = "rotate("+ (startIndex) +"deg)";
      this.opts.startIndex += 5;
    }, this.opts.delay);
    setTimeout(() => {
      this.stopAnim();
    }, this.opts.duration);
}
SearchAnim.prototype.stopAnim = function() {
    if (this.timer != null) {
      clearInterval(this.timer);
    }
}
SearchAnim.DEFAULTS = {
    duration : 60000,
    delay : 200,
    direction : true,
    startIndex : 0,
    endIndex : 360
}
new SearchAnim({
  elemId : "wait-icon",
  delay : 20,
});