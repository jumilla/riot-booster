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
<bs-form>
	<form name="form" class="{ classes }">
		<yield/>
	</form>

	<script>
        this.mixin('scope')

		var classes = [
			opts.inline ? 'form-inline' : '',
		]
		this.classes = classes.join(' ')

        load() {
            this.resetStatus()
            this.loadBindings()
        }

        resetStatus() {
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
        }

		loadBindings() {
			if (!opts.bindings) return

			opts.bindings.trigger('load', opts.bindings)

			var nodes = this.form.querySelectorAll('[name]')

            for (var index = 0; index < nodes.length; ++index) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					node.value = opts.bindings[node.name]
				}
			}
		}

        save() {
            this.saveBindings()
        }

		saveBindings() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

            for (var index = 0; index < nodes.length; ++index) {
				var node = nodes[index]
				if (node.name in opts.bindings) {
					opts.bindings[node.name] = node.value
				}
			}

			opts.bindings.trigger('save', opts.bindings)
		}

        applyDiagnoses() {
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
        }

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
	</script>
</bs-form>

/**
 * bs-form-field
 *
 * @param string helptext
 */
<bs-form-field>
	<fieldset class="{ classes }">
		<yield/>
        <p if="{ opts.helptext }" class="help-block">{ opts.helptext }</p>
	</fieldset>

	<script>
		this.mixin('scope')

		var classes = [
			'form-group',
            opts.status == 'error' ? 'has-error' : '',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-field>

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
<bs-form-button>
	<button class="{ classes() }" type="{ opts.behavior || 'button' }" disabled="{ opts.disable }" onclick="{ opts.onpush }" role="button">
	    <yield/>
	</button>

    <script>
        this.mixin('scope')

        classes() {
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
        }
    </script>
</bs-form-button>

/**
 * bs-form-static
 */
<bs-form-static>
	<p class="{ classes }">{ opts.value }</p>

	<script>
		var classes = [
			'form-control-static',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-static>

/**
 * bs-form-input
 */
<bs-form-input>
	<input type="{ opts.type }" class="{ classes }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-input>

/**
 * bs-form-text
 */
<bs-form-text>
	<label for="{ opts.id }">{ opts.label }<yield/></label>
    <input type="{ opts.type || 'text' }" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-text>

/**
 * bs-form-textarea
 */
<bs-form-textarea>
	<label for="{ opts.id }">{ opts.label }<yield/></label>
    <textarea class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }" row="{ opts.row }" col="{ opts.col }">{ opts.value }</textarea>

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-textarea>

/**
 * bs-form-file
 */
<bs-form-file>
	<input type="file" class="{ classes }" name="{ opts.name }" value="{ opts.value }">

	<script>
		var classes = [
			'form-control-file',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-file>

/**
 * bs-form-checkbox
 */
<bs-form-checkbox class="checkbox">
	<label>
	    <input type="checkbox" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">
		{ opts.label }
		<yield/>
	</label>

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-checkbox>

/**
 * bs-form-radio
 */
<bs-form-radio class="radio">
	<label>
		<input type="radio" class="{ classes }" name="{ opts.name }" value="{ opts.value }" checked="{ opts.checked }">
		{ opts.label }
		<yield/>
    </label>

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-radio>

/**
 * bs-form-list-dropdown
 */
<bs-form-list-dropdown>
	<label for="{ opts.id }">{ opts.label }</label>
	<select class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" checked="{ opts.checked }">
		<yield/>
	</select>

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-form-list-dropdown>

/**
 * bs-form-list-box
 *
 * @param int items - [Required]
 * @param int rows - [Required]
 */
<bs-form-list-box>
	<label for="{ opts.id }">{ opts.label }</label>
	<select class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" checked="{ opts.checked }">
		<yield/>
	</select>

	<script>
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
	</script>
</bs-form-list-box>
