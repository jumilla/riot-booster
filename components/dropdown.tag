/**
 * bs-dropdown
 *
 * @param string title [Optional:'Menu']
 * @param string button-type [Optional:'secondary']
 * @param array items [Required]
 */
<bs-dropdown class="{ classes }">
    <button name="button" class="btn dropdown-toggle" type="button" data-toggle="dropdown">
        { opts.title || 'Menu' }
    </button>
    <bs-dropdown-menu items="{ opts.items }">
        <yield/>
    </bs-dropdown-menu>

    <script>
        this.mixin('scope')

        var classes = [
            'dropdown',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.button.classList.add('btn-' + (opts['button-type'] || 'secondary'))
    </script>
</bs-dropdown>

/**
 * bs-dropdown-menu
 *
 * @param array [Required] items -
 *              item.type:
 *              item.title: menu title
 *              item.disabled:
 *              item.link:
 *              item.target:
 *              item.onpush:
 */
<bs-dropdown-menu class="{ classes }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            'dropdown-menu',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        for (var index in opts.items) {
            var item = opts.items[index]
            var type = item.type || 'link'

            if (type === 'link') {
                this.root.appendChild(newLinkItem(item))
            }
            else if (type === 'button') {
                this.root.appendChild(newButtonItem(item))
            }
            else if (type === 'separator') {
                this.root.appendChild(newSeparatorItem(item))
            }
            else {
                this.root.appendChild(newLinkItem(item))
            }
        }

        function newLinkItem(item) {
            var el = document.createElement('a')
            el.classList.add('dropdown-item')
            if (item.disabled) {
                el.classList.add('disabled')
            }
            el.setAttribute('href', item.link || '#')
            var target = item.target
            if (target) {
                if (target.match(/^!_/)) {
                    target = '_' + target
                }
                el.setAttribute('target', target)
            }
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }

        function newButtonItem(item) {
            var el = document.createElement('button')
            el.classList.add('dropdown-item')
            if (item.disabled) {
                el.classList.add('disabled')
            }
            if (item['button-type']) {
                el.classList.add('btn-' + item['button-type'])
            }
            el.setAttribute('type', item.button)
            el.addEventListener('click', opts.onpush)
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }

        function newSeparatorItem(item) {
            var el = document.createElement('div')
            el.classList.add('dropdown-divider')
            return el
        }

        function newTextItem(item) {
            var el = document.createElement('div')
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }
    </script>

</bs-dropdown-menu>
