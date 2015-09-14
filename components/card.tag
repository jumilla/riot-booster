/**
 * bs-card
 *
 * @param bool inverse - [Optional]
 * @param string img-src - [Optional]
 * @param string img-alt - [Optional]
 */
<bs-card class="{ classes }">
    <img if="{ opts['img-src'] }" class="card-img-top" data-src="{ opts['img-src'] }" alt="{ opts['img-alt'] }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            'card',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card>

/**
 * bs-card-header
 *
 */
<bs-card-header class="{ this.classes }">
    <yield/>

    <script>
        this.mixin('scope')

        var classes = [
            'card-header',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card-header>

/**
 * bs-card-block
 *
 */
<bs-card-block class="card-block">
    <yield/>

    <script>
        this.mixin('scope')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card-block>

/**
 * bs-card-footer
 *
 */
<bs-card-footer class="card-footer">
    <yield/>

    <script>
        this.mixin('scope')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card-footer>

/**
 * bs-card-group
 *
 */
<bs-card-group class="card-group">
    <yield/>

    <script>
        this.mixin('scope')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card-group>

/**
 * bs-card-deck
 *
 */
<bs-card-deck class="card-deck">
    <yield/>

    <script>
        this.mixin('scope')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card-deck>

/**
 * bs-card-columns
 *
 */
<bs-card-columns class="card-columns">
    <yield/>

    <script>
        this.mixin('scope')
    </script>

    <style scoped>
        :scope {
            display: block;
        }
    </style>
</bs-card-columns>
