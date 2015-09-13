/**
 * bs-alert
 *
 * @param string type - [Required] {success | info | warning | danger}
 * @param bool closebox - [Optional]
 * @param function onclose
 */
riot.tag('bs-alert', '<yield></yield> <bs-alert-closebox if="{ opts.closebox || false }"></bs-alert-closebox>', 'bs-alert, [riot-tag="bs-alert"]{ display: block; }', 'role="alert" class="{ classes }"', function(opts) {
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

/**
 * bs-breadcrumb
 *
 * @param array items
 */
riot.tag('bs-breadcrumb', '<ol class="{ classes }"> <li each="{ opts.items }" class="{ active: this.active }"> <a if="{ !this.active }" href="{ this.link || \'#\' }">{ this.title }</a> { this.active ? this.title : \'\' } </li> </ol>', function(opts) {
        this.mixin('scope')

        var classes = [
            'breadcrumb',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
/**
 * bs-button
 *
 * @param string type - {primary | secondary | success | warning | danger | link}
 * @param string size - {large | medium | small}
 * @param bool outline - default is false.
 * @param bool active - default is false.
 * @param function onpushed
 */
riot.tag('bs-button', '<yield></yield>', 'type="button" class="{ classes }" __disabled="{ opts.disabled }" onclick="{ opts.onpushed }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'btn',
            typeClass(opts.type || 'primary', opts.outline),
            sizeClass(opts.size || 'medium'),
            opts.active ? 'active' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name, outline) {
            return 'btn-' + name + (outline ? '-outline' : '')
        }

        function sizeClass(name) {
            var sizes = {
                large: 'btn-lg',
                medium: '',
                small: 'btn-sm',

                lg: 'btn-lg',
                sm: 'btn-sm',
            }

            return sizes[name]
        }

        this.toggle = function() {
        }.bind(this);

        this.reset = function() {
        }.bind(this);
    
});

/*
 * rbs-button-group
 *
 * @param string size - {large | medium | small | x-small}
 * @param string label
 * @param bool vertical - default is false.
 */
riot.tag('bs-button-group', '<yield></yield>', 'bs-button-group, [riot-tag="bs-button-group"]{ display: block; }', 'role="group" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = []
        classes.push(opts.vertical ? 'btn-group-vertical' : 'btn-group')
        classes.push(sizeClass(opts.size || 'medium'))
        this.root.className = classes.join(' ')

        function sizeClass(name) {
            var sizes = {
                large: 'btn-group-lg',
                medium: '',
                small: 'btn-group-sm',
                'x-small': 'btn-group-xs',

                lg: 'btn-group-lg',
                sm: 'btn-group-sm',
                xs: 'btn-group-xs',
            }

            return sizes[name]
        }
    
});

/*
 * rbs-button-toolbar
 *
 * @param string label
 */
riot.tag('bs-button-toolbar', '<yield></yield>', 'role="toolbar" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = ['btn-toolbar']
        this.root.className = classes.join(' ')
    
});

riot.tag('bs-dropbown-menu', '', function(opts) {


});
/**
 * bs-card
 *
 * @param bool inverse - [Optional]
 * @param string img-src - [Optional]
 * @param string img-alt - [Optional]
 */
riot.tag('bs-card', '<img if="{ opts[\'img-src\'] }" class="card-img-top" data-src="{ opts[\'img-src\'] }" alt="{ opts[\'img-alt\'] }"> <yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card-header
 *
 */
riot.tag('bs-card-header', '<yield></yield>', 'class="{ this.classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card-header',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card-body
 *
 */
riot.tag('bs-card-body', '<yield></yield>', 'class="card-body"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-footer
 *
 */
riot.tag('bs-card-footer', '<yield></yield>', 'class="card-footer"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-group
 *
 */
riot.tag('bs-card-group', '<yield></yield>', 'class="card-group"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-deck
 *
 */
riot.tag('bs-card-deck', '<yield></yield>', 'class="card-deck"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-columns
 *
 */
riot.tag('bs-card-columns', '<yield></yield>', 'class="card-columns"', function(opts) {
        this.mixin('scope')
    
});

riot.tag('bs-carousel', '', function(opts) {


});
/**
 * bs-dropdown
 *
 * @param string title [Optional:'Menu']
 * @param string button-type [Optional:'secondary']
 * @param array items [Required]
 */
riot.tag('bs-dropdown', '<button name="button" class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { opts.title || \'Menu\' } </button> <bs-dropdown-menu items="{ opts.items }"> <yield></yield> </bs-dropdown-menu>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'dropdown',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.button.classList.add('btn-' + (opts['button-type'] || 'secondary'))
    
});

/**
 * bs-dropdown-menu
 *
 * @param array [Required] items -
 *              item.type:
 *              item.title: menu title
 *              item.disabled:
 *              item.link:
 *              item.target:
 *              item.onpushed:
 * @param bool pill
 */
riot.tag('bs-dropdown-menu', '<yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'dropdown-menu',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        for (var index in opts.items) {
            var item = opts.items[index]
            var type = item.type || 'link'

            if (type === 'link') {
                this.root.appendChild(newLinkItem(item))
            }
            else if (type === 'button') {
                this.root.appendChild(newButtonItem(item))
            }
            else if (type === 'separator') {
                this.root.appendChild(newSeparatorItem(item))
            }
            else {
                this.root.appendChild(newLinkItem(item))
            }
        }

        function newLinkItem(item) {
            var el = document.createElement('a')
            el.classList.add('dropdown-item')
            if (item.disabled) {
                el.classList.add('disabled')
            }
            el.setAttribute('href', item.link || '#')
            var target = item.target
            if (target) {
                if (target.match(/^!_/)) {
                    target = '_' + target
                }
                el.setAttribute('target', target)
            }
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }

        function newButtonItem(item) {
            var el = document.createElement('button')
            el.classList.add('dropdown-item')
            if (item.disabled) {
                el.classList.add('disabled')
            }
            if (item['button-type']) {
                el.classList.add('btn-' + item['button-type'])
            }
            el.setAttribute('type', item.button)
            el.addEventListener('click', opts.onpushed)
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }

        function newSeparatorItem(item) {
            var el = document.createElement('div')
            el.classList.add('dropdown-divider')
            return el
        }

        function newTextItem(item) {
            var el = document.createElement('div')
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }
    
});

/**
 * bs-form
 */
riot.tag('bs-form', '', function(opts) {


});
/**
 * bs-grid
 *
 * @param string type - {fixed | fluid}
 */
riot.tag('bs-grid', '<yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            typeClass(opts.type || 'fixed'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name) {
            var types = {
                'fixed': 'container',
                'fluid': 'container-fluid'
            }
            return types[name]
        }
    
});

/**
 * bs-grid-row
 *
 */
riot.tag('bs-grid-row', '<yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'row',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-grid-col
 *
 * @param string type - [Optional] {flow | push | pull}
 * @param string size -  [Required] {xl-* | lg-* | md-* | sm-* | xs-*}
 * @param string offset - [Optional] {xl-* | lg-* | md-* | sm-* | xs-*}
 */
riot.tag('bs-grid-col', '<yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            sizeClass(opts.type || 'flow', opts.size),
            opts.class || '',
        ]
        if (opts.offset)
            classes.push(offsetClass(opts.offset))
        this.classes = classes.join(' ')

        function sizeClass(type, name) {
            var types = {
                'flow': '-',
                'push': '-push-',
                'pull': '-pull-',
            }
            var p = name.split('-')
            return 'col-' + p[0] + types[type] + p[1]
        }

        function offsetClass(name) {
            var p = name.split('-')
            return 'col-' + p[0] + '-offset-' + p[1]
        }
    
});

/**
 * bs-jumbotron
 *
 * @param string type - {fixed | fluid}
 */
riot.tag('bs-jumbotron', '<yield></yield>', 'bs-jumbotron, [riot-tag="bs-jumbotron"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            typeClass(opts.type || 'fixed'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name) {
            var types = {
                'fixed': 'jumbotron',
                'fluid': 'jumbotron jumbotron-fluid',
            }
            return types[name]
        }
    
});

/**
 * bs-label
 *
 * @param string type - {default | primary | success | info | warning | danger}
 * @param bool pill
 */
riot.tag('bs-label', '<yield></yield>', 'class="{ classes }"', function(opts) {
        var classes = [
            'label',
            'label-' + (opts.type || 'default'),
            opts.pill ? 'label-pill' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
/**
 * bs-list-group
 *
 * @param array items
 */
riot.tag('bs-list-group', '<ul class="{ classes }"> <li each="{ opts.items }" class="{ \'list-group\': true, active: this.active, disabled: this.disabled }"> <span if="{ this.label }" class="label label-{ this.\'label-type\' || \'default\' } label-pill pull-right">{ this.label }</span> { this.title } </li> </ul>', function(opts) {
        this.mixin('scope')

        var classes = [
            'list-group',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
/**
 * bs-media
 *
 */
riot.tag('bs-media', '<yield></yield>', 'class="media"', function(opts) {

});
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

/**
 * bs-nav
 *
 * @param string type - {list | inline | tabs | pills | pills-stacked}
 */
riot.tag('bs-nav', '<nav if="{ opts.type === \'inline\' }" class="{ classes }"> <yield if="{ opts.items === null }"></yield> <a each="{ opts.items }" class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || \'#\' }">{ this.title }</a> </nav> <ul name="list" if="{ opts.type !== \'inline\' }" class="{ classes }"> <yield if="{ opts.items === null }"></yield> <li each="{ opts.items }" class="nav-item"> <a class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || \'#\' }">{ this.title }</a> </li> </ul>', function(opts) {
        this.mixin('scope')

        var classes = [
            'nav',
            typeClass(opts.type || 'list'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')


        function typeClass(name) {
            var types = {
                'list': '',
                'inline': '',
                'tabs': 'nav-tabs',
                'pills': 'nav-pills',
                'pills-stacked': 'nav-pills nav-stacked',
            }
            return types[name]
        }
    
});


/**
 * bs-navbar
 *
 * @param string type
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

riot.tag('bs-table', '<table class="{ classes }"> <yield></yield> </table>', function(opts) {
        this.mixin('scope')

        var classes = [
            'table',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
riot.tag('bs-tooltip', '', function(opts) {


});