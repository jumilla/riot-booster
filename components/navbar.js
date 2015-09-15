/**
 * bs-navbar
 *
 * @param string type - {dark | light}
 * @param string placement - {fixed-top | fixed-bottom}
 */
riot.tag('bs-navbar', '<nav if="{ !opts.collapse }" class="{ classes }"> <yield></yield> </nav> <nav if="{ opts.collapse }" class="{ classes }"> <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse"> &#9776; </button> <div class="collapse navbar-toggleable-xs"> <yield></yield> </div> </nav>', function(opts) {
        this.mixin('scope')

        var classes = [
            'navbar',
            opts.type ? 'navbar-' + opts.type : '',
            opts.placement ? 'navbar-' + opts.placement : '',
            opts.faded ? 'faded' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
