/**
 * bs-alert
 *
 * @param string type - [Required] {success | info | warning | danger}
 * @param bool closebox - [Optional]
 * @param function onclose
 */
<bs-alert role="alert" class="{ classes }">
    <yield/>
    <bs-alert-closebox if="{ opts.closebox || false }"/>

    <script>
        this.mixin('scope')

        var classes = [
            'alert',
            'alert-' + opts.type,
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        show() {

        }

        close() {
        }

        if (opts.onclose) {
            this.on('mount', function () {
                this.root.attachEventListener(function () {
                    opts.onclose()
                })
            })

            this.on('unmount', function () {
            })
        }
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-alert>

<bs-alert-closebox>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
    </button>
</bs-alert-closebox>
