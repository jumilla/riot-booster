/**
 * bs-alert
 *
 * @param string type - [Required] {success | info | warning | danger}
 * @param bool closebox - [Optional]
 * @param function onclose
 */
riot.tag('bs-alert', '<bs-alert-closebox if="{ opts.closebox || false }"></bs-alert-closebox> <yield></yield>', 'bs-alert, [riot-tag="bs-alert"]{ display: block; }', 'role="alert" class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'alert',
            'alert-' + opts.type,
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.show = function() {
        }.bind(this);

        this.close = function() {
        }.bind(this);

        if (opts.onclose) {
            this.on('mount', function () {
                this.root.attachEventListener(function () {
                    opts.onclose()
                })
            })

            this.on('unmount', function () {
            })
        }
    
});

riot.tag('bs-alert-closebox', '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button>', function(opts) {

});
