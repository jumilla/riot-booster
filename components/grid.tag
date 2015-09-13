/**
 * bs-grid
 *
 * @param string type - {fixed | fluid}
 */
<bs-grid class="{ classes }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            typeClass(opts.type || 'fixed'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name) {
            var types = {
                'fixed': 'container',
                'fluid': 'container-fluid'
            }
            return types[name]
        }
    </script>

</bs-grid>

/**
 * bs-grid-row
 *
 */
<bs-grid-row class="{ classes }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            'row',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>
</bs-grid-row>

/**
 * bs-grid-col
 *
 * @param string type - [Optional] {flow | push | pull}
 * @param string size -  [Required] {xl-* | lg-* | md-* | sm-* | xs-*}
 * @param string offset - [Optional] {xl-* | lg-* | md-* | sm-* | xs-*}
 */
<bs-grid-col class="{ classes }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            sizeClass(opts.type || 'flow', opts.size),
            opts.class || '',
        ]
        if (opts.offset)
            classes.push(offsetClass(opts.offset))
        this.classes = classes.join(' ')

        function sizeClass(type, name) {
            var types = {
                'flow': '-',
                'push': '-push-',
                'pull': '-pull-',
            }
            var p = name.split('-')
            return 'col-' + p[0] + types[type] + p[1]
        }

        function offsetClass(name) {
            var p = name.split('-')
            return 'col-' + p[0] + '-offset-' + p[1]
        }
    </script>
</bs-grid-col>
