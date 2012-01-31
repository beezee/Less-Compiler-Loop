var less = require('less');

var parser = new(less.Parser);
for (var i=1; i < 3; i++)
{
    parser.parse('@import "config' + i + '.less"; @import "style.less";', function (err, tree) {
        if (err) { return console.error(err) }
        console.log(tree.toCSS());
    });   
}