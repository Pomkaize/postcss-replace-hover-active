var postcss = require('postcss');

module.exports = postcss.plugin('postcss-replace-hover-to-active', function () {
    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.indexOf(':hover') !== -1) {
                rule.selector = rule.selector.replace(':hover', ':active');
            }
        });
    };
});
