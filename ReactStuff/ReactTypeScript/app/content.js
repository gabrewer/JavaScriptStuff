System.register(['react'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var Content;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            Content = (function (_super) {
                __extends(Content, _super);
                function Content() {
                    _super.apply(this, arguments);
                }
                Content.prototype.render = function () {
                    return React.createElement("div", null, React.createElement("h3", null, "Hi There!"), React.createElement("p", null, "-- Boom Boom Washington"));
                };
                return Content;
            }(React.Component));
            exports_1("Content", Content);
        }
    }
});
