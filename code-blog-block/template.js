wp.blocks.registerBlockType( 'my-theme/template', {
    title: 'Code Blog Block',
    icon: 'book-alt',
    category: 'common',

    attributes: {
        heading: {
            type: 'string',
            source: 'html',
            selector: 'h1',
            default: 'h1',
        },
        intro: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'p',
        },
        codeBlock: {
            type: 'string',
            source: 'html',
            selector: 'pre',
            default: 'pre',
        },
    },

    edit: function edit( props ) {
        const { attributes, className, setAttributes } = props;
        const { heading, intro, codeBlock } = attributes;
        return React.createElement(
            "div",
            {
                className: className
            },
            heading !== '' ? React.createElement(
                "h1",
                { className: "menu-link-fix" },
                heading,
                React.createElement("input", {
                    type: "text",
                    value: heading,
                    onChange: function onChange(event) {
                        return setAttributes({
                            heading: event.target.value
                        });
                    }
                })
            ) : null,
            intro !== '' ? React.createElement(
                "p",
                { className: "menu-link-fix" },
                intro,
                React.createElement("textarea", {
                    value: intro,
                    onChange: function onChange(event) {
                        return setAttributes({
                            intro: event.target.value
                        });
                    }
                })
            ) : null,
            codeBlock !== '' ? React.createElement(
                "pre",
                { className: "menu-link-fix" },
                codeBlock,
                React.createElement("textarea", {
                    value: codeBlock,
                    onChange: function onChange(event) {
                        return setAttributes({
                            codeBlock: event.target.value
                        });
                    }
                })
            ) : null
        );
    },

    save: function save(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className;
        var heading = attributes.heading,
            intro = attributes.intro,
            codeBlock = attributes.codeBlock;
        return React.createElement(
            "div",
            {
                className: className
            },
            heading !== '' ? React.createElement(
                "h1",
                { className: "menu-link-fix" },
                heading
            ) : null,
            intro !== '' ? React.createElement(
                "p",
                { className: "menu-link-fix" },
                intro
            ) : null,
            codeBlock !== '' ? React.createElement(
                "pre",
                { className: "menu-link-fix" },
                codeBlock
            ) : null
        );
    }

});
