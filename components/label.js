/**
 * bs-label
 *
 * @param string type - {default | primary | success | info | warning | danger}
 * @param bool pill
 */
riot.tag('bs-label', '<yield></yield>', 'class="{ classes }"', function(opts) {
        var classes = [
            'label',
            'label-' + (opts.type || 'default'),
            opts.pill ? 'label-pill' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});