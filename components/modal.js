/**
 * bs-modal
 *
 * @param string size - {large | medium | small}
 * @param bool fade -
 */
riot.tag('bs-modal', '<div name="dialog" class="modal-dialog" role="document"> <div class="modal-content"> <yield></yield> </div> </div>', 'class="{ fade: opts.fade }"', function(opts) {
        this.mixin('scope')

        this.root.classList.add('modal')

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
    
});

/**
 * bs-modal-header
 *
 * @param bool closebox
 */
riot.tag('bs-modal-header', '<yield></yield> <button if="{ opts.closebox }" type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button>', 'class="modal-header"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-modal-body
 *
 */
riot.tag('bs-modal-body', '<yield></yield>', 'class="modal-body"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-modal-footer
 *
 */
riot.tag('bs-modal-footer', '<yield></yield>', 'class="modal-footer"', function(opts) {
        this.mixin('scope')
    
});
