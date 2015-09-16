/**
 * bs-form
 */
<bs-form>
	<form name="form" class={ classes }>
		<yield/>
	</form>

	<script>
		this.mixin('scope')

		var classes = [
			opts.inline ? 'form-inline' : '',
		]
		this.classes = classes.join(' ')

		loadBindings() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

			for (var index in nodes) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					node.value = opts.bindings[node.name]
				}
			}
		}

		saveBindings() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

			for (var index in nodes) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					opts.bindings[node.name] = node.value
				}
			}
		}

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
	</script>
</bs-form>

/**
 * bs-input-static
 */
<bs-input-static>
	<p class="{ classes }">{ opts.value }</p>

	<script>
		var classes = [
			'form-control-static',
		]
		this.classes = classes.join(' ')
	</script>
</bs-input-static>

/**
 * bs-input
 */
<bs-input>
	<input type="{ opts.type }" class="{ classes }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-input>

/**
 * bs-input-text
 */
<bs-input-text>
	<label for="{ opts.id }">{ opts.label }<yield/></label>
    <input type="{ opts.type || 'text' }" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }">

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-input-text>

/**
 * bs-input-textarea
 */
<bs-input-textarea>
	<label for="{ opts.id }">{ opts.label }<yield/></label>
    <textarea class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }" row="{ opts.row }" col="{ opts.col }">{ opts.value }</textarea>

	<script>
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	</script>
</bs-input-textarea>

/**
 * bs-input-file
 */
<bs-input-file>
	<input type="file" class="{ classes }" name="{ opts.name }" value="{ opts.value }">

	<script>
		var classes = [
			'form-control-file',
		]
		this.classes = classes.join(' ')
	</script>
</bs-input-file>

/**
 * bs-input-checkbox
 */
<bs-input-checkbox class="checkbox">
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
</bs-input-checkbox>

/**
 * bs-input-radio
 */
<bs-input-radio class="radio">
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
</bs-input-radio>

/**
 * bs-fieldset
 */
<bs-fieldset class="{ classes }">
	<yield/>

	<script>
		this.mixin('scope')

		var classes = [
			'form-group',
		]
		this.classes = classes.join(' ')
	</script>
</bs-fieldset>
