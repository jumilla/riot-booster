/**
 * bs-breadcrumb
 *
 * @param array items
 */
riot.tag('bs-breadcrumb', '<ol class="{ classes }"> <li each="{ opts.items }" class="{ active: this.active }"> <a if="{ !this.active }" href="{ this.link || \'#\' }">{ this.title }</a> { this.active ? this.title : \'\' } </li> </ol>', function(opts) {
        this.mixin('scope')

        var classes = [
            'breadcrumb',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});