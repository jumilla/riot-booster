riot.tag('bs-table', '<table class="{ classes }"> <yield></yield> </table>', function(opts) {
        this.mixin('scope')

        var classes = [
            'table',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});