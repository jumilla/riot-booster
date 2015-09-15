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
<bs-button class="{ classes }" disabled="{ opts.disabled }" onclick="{ opts.onpush }" role="button">
    <yield/>

    <script>
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

        // $().button('toggle')
        toggle() {
        }

        // $().button('reset')
        reset() {
        }
    </script>
</bs-button>

/**
 * bs-button-group
 *
 * @param string size - {large | medium | small | x-small}
 * @param string label
 * @param bool vertical - default is false.
 */
<bs-button-group role="group" class="{ classes }" aria-label="{ opts.label }">
    <yield/>

    <script>
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
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-button-group>

/**
 * bs-button-toolbar
 *
 * @param string label
 */
<bs-button-toolbar role="toolbar" class="{ classes }" aria-label="{ opts.label }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            'btn-toolbar',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-button-toolbar>
