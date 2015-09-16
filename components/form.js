/**
 * bs-form
 */
riot.tag('bs-form', '<form name="form" class="{ classes }"> <yield></yield> </form>', function(opts) {
		this.mixin('scope')

		var classes = [
			opts.inline ? 'form-inline' : '',
		]
		this.classes = classes.join(' ')

		this.loadBindings = function() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

			for (var index in nodes) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					node.value = opts.bindings[node.name]
				}
			}
		}.bind(this);

		this.saveBindings = function() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

			for (var index in nodes) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					opts.bindings[node.name] = node.value
				}
			}
		}.bind(this);

		this.on('mount', function () {
			this.loadBindings()

			this.form.addEventListener('submit', function (e) {
				e.preventDefault()

				this.saveBindings()

				if (opts.onsubmit) {
					opts.onsubmit(e)
				}
			}.bind(this), true)
		})
	
});

/**
 * bs-input-static
 */
riot.tag('bs-input-static', '<p class="{ classes }">{ opts.value }</p>', function(opts) {
		var classes = [
			'form-control-static',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input
 */
riot.tag('bs-input', '<input type="{ opts.type }" class="{ classes }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-text
 */
riot.tag('bs-input-text', '<label for="{ opts.id }">{ opts.label }<yield></yield></label> <input type="{ opts.type || \'text\' }" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-textarea
 */
riot.tag('bs-input-textarea', '<label for="{ opts.id }">{ opts.label }<yield></yield></label> <textarea class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }" row="{ opts.row }" col="{ opts.col }">{ opts.value }</textarea>', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-file
 */
riot.tag('bs-input-file', '<input type="file" class="{ classes }" name="{ opts.name }" value="{ opts.value }">', function(opts) {
		var classes = [
			'form-control-file',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-checkbox
 */
riot.tag('bs-input-checkbox', '<label> <input type="checkbox" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }"> { opts.label } <yield></yield> </label>', 'class="checkbox"', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-radio
 */
riot.tag('bs-input-radio', '<label> <input type="radio" class="{ classes }" name="{ opts.name }" value="{ opts.value }" __checked="{ opts.checked }"> { opts.label } <yield></yield> </label>', 'class="radio"', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-fieldset
 */
riot.tag('bs-fieldset', '<yield></yield>', 'class="{ classes }"', function(opts) {
		this.mixin('scope')

		var classes = [
			'form-group',
		]
		this.classes = classes.join(' ')
	
});
