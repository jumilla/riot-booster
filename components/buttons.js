/**
 * bs-button
 *
 * @param string type - {primary | secondary | success | warning | danger | link}
 * @param string size - {large | medium | small}
 * @param bool outline - default is false.
 * @param bool active - default is false.
 * @param function onpushed
 */
riot.tag('bs-button', '<yield></yield>', 'type="button" class="{ classes }" __disabled="{ opts.disabled }" onclick="{ opts.onpushed }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'btn',
            typeClass(opts.type || 'primary', opts.outline),
            sizeClass(opts.size || 'medium'),
            opts.active ? 'active' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

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

/*
 * rbs-button-group
 *
 * @param string size - {large | medium | small | x-small}
 * @param string label
 * @param bool vertical - default is false.
 */
riot.tag('bs-button-group', '<yield></yield>', 'bs-button-group, [riot-tag="bs-button-group"]{ display: block; }', 'role="group" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = []
        classes.push(opts.vertical ? 'btn-group-vertical' : 'btn-group')
        classes.push(sizeClass(opts.size || 'medium'))
        this.root.className = classes.join(' ')

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

/*
 * rbs-button-toolbar
 *
 * @param string label
 */
riot.tag('bs-button-toolbar', '<yield></yield>', 'role="toolbar" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = ['btn-toolbar']
        this.root.className = classes.join(' ')
    
});

riot.tag('bs-dropbown-menu', '', function(opts) {


});