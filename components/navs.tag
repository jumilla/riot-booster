/**
 * bs-nav
 *
 * @param string type - {list | inline | tabs | pills | pills-stacked}
 * @param array items
 * @param string active
 */
<bs-nav>
    <nav if="{ opts.type === 'inline' && opts.items }" class="{ classes }">
        <a each="{ opts.items }" class="{nav-link: true, active: this.name === opts.active, disabled: this.disabled}" href="{ this.link || '#' }" onclick="{ this.onclick }">{ this.title }</a>
    </nav>
    <nav if="{ opts.type === 'inline' && !opts.items }" class="{ classes }">
        <yield/>
    </nav>
    <ul if="{ opts.type !== 'inline' && opts.items }" class="{ classes }">
        <li each="{ opts.items }" class="nav-item">
            <a class="{nav-link: true, active: this.name === parent.opts.active, disabled: this.disabled}" href="{ this.link || '#' }" onclick="{ this.onclick }">{ this.title }</a>
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
