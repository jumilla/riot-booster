
var FormModel = function () {
    riot.observable(this)
}

FormModel.prototype.fields = {}

FormModel.prototype.values = {}

FormModel.prototype.diagnoses = {}



riot.mixin('form-model', {
    init: function() {
        this.model = new FormModel()
    },
})
