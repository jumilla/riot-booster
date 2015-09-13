<bs-table>
    <table class="{ classes }">
        <yield/>
    </table>

    <script>
        this.mixin('scope')

        var classes = [
            'table',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>
</bs-table>