riot.timeout = function (_this, delay, fn) {
    window.setTimeout(function () {
        fn.call(_this)
        _this.update()
    }, delay)
}

riot.mixin('scope', {
    init: function () {
        if (this.parent)
            this.__proto__ = this.parent
    }
})
