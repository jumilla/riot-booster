/**
 * bs-modal
 *
 * @param string size - {large | medium | small}
 * @param bool fade -
 */
<bs-modal class="{ classes }">
    <div name="dialog" class="modal-dialog" role="document">
        <div class="modal-content">
            <yield/>
        </div>
    </div>

    <script>
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

        show () {
            $(this.root).modal('show')
        }

        hide() {
            $(this.root).modal('hide')
        }

        toggle() {
            $(this.root).modal('toggle')
        }

        modal(options) {
            $(this.root).modal(options)
        }
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-modal>

/**
 * bs-modal-header
 *
 * @param bool closebox
 */
<bs-modal-header class="modal-header">
    <button if="{ opts.closebox }" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
    </button>
    <yield/>

    <script>
        this.mixin('scope')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
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

    <style scoped>
        :scope {
            display: block;
        }
    </style>
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

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-modal-footer>
