System.register(['github:twbs/bootstrap@3.3.6/css/bootstrap.css!', '/css/template.css!', 'react', 'react-dom', './content'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDom, content_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (React_1) {
                React = React_1;
            },
            function (ReactDom_1) {
                ReactDom = ReactDom_1;
            },
            function (content_1_1) {
                content_1 = content_1_1;
            }],
        execute: function() {
            ReactDom.render(React.createElement(content_1.Content, null), document.querySelector('.template'));
        }
    }
});
