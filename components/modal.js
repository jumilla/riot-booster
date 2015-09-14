/**
 * bs-modal
 *
 * @param string size - {large | medium | small}
 * @param bool fade -
 */
riot.tag('bs-modal', '<div name="dialog" class="modal-dialog" role="document"> <div class="modal-content"> <yield></yield> </div> </div>', 'bs-modal, [riot-tag="bs-modal"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'modal',
            opts.fade ? 'fade' : '',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        var size = sizeClass(opts.size || 'medium')
        if (size) this.dialog.classList.add(size)

        function sizeClass(name) {
            var sizes = {
                'large': 'modal-lg',
                'medium': '',
                'small': 'modal-sm',
            }
            return sizes[name]
        }

        this.show = function() {
            $(this.root).modal('show')
        }.bind(this);

        this.hide = function() {
            $(this.root).modal('hide')
        }.bind(this);

        this.toggle = function() {
            $(this.root).modal('toggle')
        }.bind(this);

        this.modal = function(options) {
            $(this.root).modal(options)
        }.bind(this);
    
});

/**
 * bs-modal-header
 *
 * @param bool closebox
 */
riot.tag('bs-modal-header', '<button if="{ opts.closebox }" type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button> <yield></yield>', 'bs-modal-header, [riot-tag="bs-modal-header"]{ display: block; }', 'class="modal-header"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-modal-body
 *
 */
riot.tag('bs-modal-body', '<yield></yield>', 'bs-modal-body, [riot-tag="bs-modal-body"]{ display: block; }', 'class="modal-body"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-modal-footer
 *
 */
riot.tag('bs-modal-footer', '<yield></yield>', 'bs-modal-footer, [riot-tag="bs-modal-footer"]{ display: block; }', 'class="modal-footer"', function(opts) {
        this.mixin('scope')
    
});
