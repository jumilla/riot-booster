/**
 * bs-jumbotron
 *
 * @param string type - {fixed | fluid}
 */
riot.tag2('bs-jumbotron', '<yield></yield>', 'bs-jumbotron,[riot-tag="bs-jumbotron"] { display: block; }', 'class="{classes}"', function(opts) {
        this.mixin('scope')

        var classes = [
            typeClass(opts.type || 'fixed'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name) {
            var types = {
                'fixed': 'jumbotron',
                'fluid': 'jumbotron jumbotron-fluid',
            }
            return types[name]
        }
}, '{ }');
