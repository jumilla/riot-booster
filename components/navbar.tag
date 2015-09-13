/**
 * bs-navbar
 *
 * @param string type
 * @param string placement - {fixed-top | fixed-bottom}
 */
<bs-navbar>
    <nav if="{ !opts.collapse }" class="{ classes }">
        <yield/>
    </nav>

    <nav if="{ opts.collapse }" class="{ classes }">
        <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse">
            &#9776;
        </button>
        <div class="collapse navbar-toggleable-xs">
            <yield/>
        </div>
    </nav>

    <script>
        this.mixin('scope')

        var classes = [
            'navbar',
            opts.type ? 'navbar-' + opts.type : '',
            opts.placement ? 'navbar-' + opts.placement : '',
            opts.faded ? 'faded' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>

</bs-navbar>
