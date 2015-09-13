/**
 * bs-card
 *
 * @param bool inverse - [Optional]
 * @param string img-src - [Optional]
 * @param string img-alt - [Optional]
 */
riot.tag('bs-card', '<img if="{ opts[\'img-src\'] }" class="card-img-top" data-src="{ opts[\'img-src\'] }" alt="{ opts[\'img-alt\'] }"> <yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card-header
 *
 */
riot.tag('bs-card-header', '<yield></yield>', 'class="{ this.classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card-header',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card-body
 *
 */
riot.tag('bs-card-body', '<yield></yield>', 'class="card-body"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-footer
 *
 */
riot.tag('bs-card-footer', '<yield></yield>', 'class="card-footer"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-group
 *
 */
riot.tag('bs-card-group', '<yield></yield>', 'class="card-group"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-deck
 *
 */
riot.tag('bs-card-deck', '<yield></yield>', 'class="card-deck"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-columns
 *
 */
riot.tag('bs-card-columns', '<yield></yield>', 'class="card-columns"', function(opts) {
        this.mixin('scope')
    
});
