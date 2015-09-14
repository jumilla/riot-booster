/**
 * bs-card
 *
 * @param bool inverse - [Optional]
 * @param string img-src - [Optional]
 * @param string img-alt - [Optional]
 */
riot.tag('bs-card', '<img if="{ opts[\'img-src\'] }" class="card-img-top" data-src="{ opts[\'img-src\'] }" alt="{ opts[\'img-alt\'] }"> <yield></yield>', 'bs-card, [riot-tag="bs-card"]{ display: block; }', 'class="{ classes }"', function(opts) {
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
riot.tag('bs-card-header', '<yield></yield>', 'bs-card-header, [riot-tag="bs-card-header"]{ display: block; }', 'class="{ this.classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card-header',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card-block
 *
 */
riot.tag('bs-card-block', '<yield></yield>', 'bs-card-block, [riot-tag="bs-card-block"]{ display: block; }', 'class="card-block"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-footer
 *
 */
riot.tag('bs-card-footer', '<yield></yield>', 'bs-card-footer, [riot-tag="bs-card-footer"]{ display: block; }', 'class="card-footer"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-group
 *
 */
riot.tag('bs-card-group', '<yield></yield>', 'bs-card-group, [riot-tag="bs-card-group"]{ display: block; }', 'class="card-group"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-deck
 *
 */
riot.tag('bs-card-deck', '<yield></yield>', 'bs-card-deck, [riot-tag="bs-card-deck"]{ display: block; }', 'class="card-deck"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-columns
 *
 */
riot.tag('bs-card-columns', '<yield></yield>', 'bs-card-columns, [riot-tag="bs-card-columns"]{ display: block; }', 'class="card-columns"', function(opts) {
        this.mixin('scope')
    
});
