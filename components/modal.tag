/**
 * bs-modal
 *
 * @param string size - {large | medium | small}
 * @param bool fade -
 */
<bs-modal class="{ fade: opts.fade }">
    <div name="dialog" class="modal-dialog" role="document">
        <div class="modal-content">
            <yield/>
        </div>
    </div>

    <script>
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
    </script>
</bs-modal>

/**
 * bs-modal-header
 *
 * @param bool closebox
 */
<bs-modal-header class="modal-header">
    <yield/>
    <button if="{ opts.closebox }" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
    </button>

    <script>
        this.mixin('scope')
    </script>
</bs-modal-header>

/**
 * bs-modal-body
 *
 */
<bs-modal-body class="modal-body">
    <yield/>


    <script>
        this.mixin('scope')
    </script>
</bs-modal-body>

/**
 * bs-modal-footer
 *
 */
<bs-modal-footer class="modal-footer">
    <yield/>


    <script>
        this.mixin('scope')
    </script>
</bs-modal-footer>
