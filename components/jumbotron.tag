/**
 * bs-jumbotron
 *
 * @param string type - {fixed | fluid}
 */
<bs-jumbotron class="{ classes }">
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
                'fixed': 'jumbotron',
                'fluid': 'jumbotron jumbotron-fluid',
            }
            return types[name]
        }
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-jumbotron>
