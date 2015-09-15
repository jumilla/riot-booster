/**
 * bs-nav
 *
 * @param string type - {list | inline | tabs | pills | pills-stacked}
 * @param array items
 */
<bs-nav>
    <nav if="{ opts.type === 'inline' && opts.items }" class="{ classes }">
        <a each="{ opts.items }" class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || '#' }">{ this.title }</a>
    </nav>
    <nav if="{ opts.type === 'inline' && !opts.items }" class="{ classes }">
        <yield/>
    </nav>
    <ul if="{ opts.type !== 'inline' && opts.items }" class="{ classes }">
        <li each="{ opts.items }" class="nav-item">
            <a class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || '#' }">{ this.title }</a>
        </li>
    </ul>
    <ul if="{ opts.type !== 'inline' && !opts.items }" class="{ classes }">
        <yield/>
    </ul>

    <script>
        this.mixin('scope')

        var classes = [
            'nav',
            typeClass(opts.type || 'list'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

//        this.root.querySelector('a')

        function typeClass(name) {
            var types = {
                'list': '',
                'inline': '',
                'tabs': 'nav-tabs',
                'pills': 'nav-pills',
                'pills-stacked': 'nav-pills nav-stacked',
            }
            return types[name]
        }
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-nav>
