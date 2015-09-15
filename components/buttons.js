/**
 * bs-button
 *
 * @param string type - {default | primary | secondary | success | warning | danger | link}
 * @param string size - {large | medium | small}
 * @param string behavior - {button | submit | reset}
 * @param bool outline - default is false.
 * @param bool active - default is false.
 * @param function onpush
 */
riot.tag('bs-button', '<yield></yield>', 'class="{ classes }" __disabled="{ opts.disabled }" onclick="{ opts.onpush }" role="button"', function(opts) {
        this.mixin('scope')

        var classes = [
            'btn',
            (opts.type || 'secondary') !== 'default' ? typeClass(opts.type || 'secondary', opts.outline) : '',
            sizeClass(opts.size || 'medium'),
            opts.active ? 'active' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.root.type = opts.behavior || 'button'

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

        this.toggle = function() {
        }.bind(this);

        this.reset = function() {
        }.bind(this);
    
});

/**
 * bs-button-group
 *
 * @param string size - {large | medium | small | x-small}
 * @param string label
 * @param bool vertical - default is false.
 */
riot.tag('bs-button-group', '<yield></yield>', 'bs-button-group, [riot-tag="bs-button-group"]{ display: block; }', 'role="group" class="{ classes }" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = [
            opts.vertical ? 'btn-group-vertical' : 'btn-group',
            sizeClass(opts.size || 'medium'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function sizeClass(name) {
            var sizes = {
                large: 'btn-group-lg',
                medium: '',
                small: 'btn-group-sm',
                'x-small': 'btn-group-xs',

                lg: 'btn-group-lg',
                sm: 'btn-group-sm',
                xs: 'btn-group-xs',
            }

            return sizes[name]
        }
    
});

/**
 * bs-button-toolbar
 *
 * @param string label
 */
riot.tag('bs-button-toolbar', '<yield></yield>', 'bs-button-toolbar, [riot-tag="bs-button-toolbar"]{ display: block; }', 'role="toolbar" class="{ classes }" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'btn-toolbar',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
