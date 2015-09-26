/**
 * bs-form
 *
 * @param dictionary bindings
 * @param dictionary diagnoses
 *
 * @method load()
 * @method save()
 *
 * @event bindings.load()
 * @event bindings.save()
 */
riot.tag('bs-form', '<form name="form" class="{ classes }"> <yield></yield> </form>', function(opts) {
        this.mixin('scope')

		var classes = [
			opts.inline ? 'form-inline' : '',
		]
		this.classes = classes.join(' ')

        this.load = function() {
            this.resetStatus()
            this.loadBindings()
        }.bind(this);

        this.resetStatus = function() {
            var classes = ['has-success', 'has-warning', 'has-error']
            classes.forEach(function (value) {
                removeClassRecursive(this.form, value)
            }, this)

            function removeClassRecursive(root, klass) {
                var nodes = this.form.querySelectorAll('.' + klass)

                for (var index = 0; index < nodes.length; ++index) {
    				var node = nodes[index]
                    node.classList.remove(klass)
                }
            }
        }.bind(this);

		this.loadBindings = function() {
			if (!opts.bindings) return

			opts.bindings.trigger('load', opts.bindings)

			var nodes = this.form.querySelectorAll('[name]')

            for (var index = 0; index < nodes.length; ++index) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					node.value = opts.bindings[node.name]
				}
			}
		}.bind(this);

        this.save = function() {
            this.saveBindings()
        }.bind(this);

		this.saveBindings = function() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

            for (var index = 0; index < nodes.length; ++index) {
				var node = nodes[index]
				if (node.name in opts.bindings) {
					opts.bindings[node.name] = node.value
				}
			}

			opts.bindings.trigger('save', opts.bindings)
		}.bind(this);

        this.applyDiagnoses = function() {
            if (!opts.diagnoses) return

            apply(opts.diagnoses.successes, 'has-success')
            apply(opts.diagnoses.warnings, 'has-warning')
            apply(opts.diagnoses.errors, 'has-error')

            function apply(dictionary, klass) {
                for (var field in dictionary) {
                    var el = this.form[field]
                    while (el) {
                        if (el.classList.contains('form-group'))
                            break
                        el = el.parentNode
                    }
                    if (!el) {
                        el = this.form[field]
                    }

                    el.classList.add(klass)
                }
            }
        }.bind(this);

		this.on('mount', function () {
			this.load()

			this.form.addEventListener('submit', function (e) {
				e.preventDefault()

				this.save()
			}.bind(this), true)
		})

        this.on('updated', function () {
            this.applyDiagnoses()
        }.bind(this))
	
});

/**
 * bs-form-field
 *
 * @param string helptext
 */
riot.tag('bs-form-field', '<fieldset class="{ classes }"> <yield></yield> <p if="{ opts.helptext }" class="help-block">{ opts.helptext }</p> </fieldset>', function(opts) {
		this.mixin('scope')

		var classes = [
			'form-group',
            opts.status == 'error' ? 'has-error' : '',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-button
 *
 * @param string behavior - {button | submit | reset}
 * @param string type - {default | primary | secondary | success | warning | danger | link}
 * @param string size - {large | medium | small}
 * @param bool disable -
 * @param bool outline - default is false.
 * @param bool active - default is false.
 * @param function onpush
 */
riot.tag('bs-form-button', '<button class="{ classes() }" type="{ opts.behavior || \'button\' }" __disabled="{ opts.disable }" onclick="{ opts.onpush }" role="button"> <yield></yield> </button>', function(opts) {
        this.mixin('scope')

        this.classes = function() {
            var classes = [
                'btn',
                (opts.type || 'secondary') !== 'default' ? typeClass(opts.type || 'secondary', opts.outline) : '',
                sizeClass(opts.size || 'medium'),
                opts.active ? 'active' : '',
                opts.class || '',
            ]
            return classes.join(' ')

            function typeClass(name, outline) {
                return 'btn-' + name + (outline ? '-outline' : '')
            }

            function sizeClass(name) {
                var sizes = {
                    large: 'btn-lg',
                    medium: '',
                    small: 'btn-sm',

                    lg: 'btn-lg',
                    sm: 'btn-sm',
                }

                return sizes[name]
            }
        }.bind(this);
    
});

/**
 * bs-form-static
 */
riot.tag('bs-form-static', '<p class="{ classes }">{ opts.value }</p>', function(opts) {
		var classes = [
			'form-control-static',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-input
 */
riot.tag('bs-form-input', '<input type="{ opts.type }" class="{ classes }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-text
 */
riot.tag('bs-form-text', '<label for="{ opts.id }">{ opts.label }<yield></yield></label> <input type="{ opts.type || \'text\' }" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-textarea
 */
riot.tag('bs-form-textarea', '<label for="{ opts.id }">{ opts.label }<yield></yield></label> <textarea class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }" row="{ opts.row }" col="{ opts.col }">{ opts.value }</textarea>', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-file
 */
riot.tag('bs-form-file', '<input type="file" class="{ classes }" name="{ opts.name }" value="{ opts.value }">', function(opts) {
		var classes = [
			'form-control-file',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-checkbox
 */
riot.tag('bs-form-checkbox', '<label> <input type="checkbox" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }"> { opts.label } <yield></yield> </label>', 'class="checkbox"', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-radio
 */
riot.tag('bs-form-radio', '<label> <input type="radio" class="{ classes }" name="{ opts.name }" value="{ opts.value }" __checked="{ opts.checked }"> { opts.label } <yield></yield> </label>', 'class="radio"', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-list-dropdown
 */
riot.tag('bs-form-list-dropdown', '<label for="{ opts.id }">{ opts.label }</label> <select class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" __checked="{ opts.checked }"> <yield></yield> </select>', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-form-list-box
 *
 * @param int items - [Required]
 * @param int rows - [Required]
 */
riot.tag('bs-form-list-box', '<label for="{ opts.id }">{ opts.label }</label> <select class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" __checked="{ opts.checked }"> <yield></yield> </select>', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')

		this.on('mount', function () {
			var selectElement = this.root.querySelector('select');
			selectElement.setAttribute('size', opts.rows || 5)

			if (opts.items) {
				opts.items.forEach(function (item) {
					var optionElement = document.createElement('option')
					optionElement.value = item.value
					optionElement.text = item.text
					selectElement.options.add(optionElement)
				})
			}
		}.bind(this))
	
});
