
riot.mixin('scope', {
    init: function () {
        if (this.parent)
            this.__proto__ = this.parent
    }
})
