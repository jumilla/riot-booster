/**
 * bs-list-group
 *
 * @param array items
 */
riot.tag('bs-list-group', '<ul class="{ classes }"> <li each="{ opts.items }" class="{ \'list-group\': true, active: this.active, disabled: this.disabled }"> <span if="{ this.label }" class="label label-{ this.\'label-type\' || \'default\' } label-pill pull-right">{ this.label }</span> { this.title } </li> </ul>', function(opts) {
        this.mixin('scope')

        var classes = [
            'list-group',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});