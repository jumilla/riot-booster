/**
 * bs-label
 *
 * @param string type - {default | primary | success | info | warning | danger}
 * @param bool pill
 */
<bs-label class="{ classes }">
    <yield/>

    <script>
        var classes = [
            'label',
            'label-' + (opts.type || 'default'),
            opts.pill ? 'label-pill' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>
</bs-label>
