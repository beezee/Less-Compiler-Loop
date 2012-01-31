var less = require('less');
var fs = require('fs');

var parser = new(less.Parser);
function compileEach(i) {
        parser.parse('@import "config' + i + '.less"; @import "style.less";', function (err, tree) {
            if (err) { return console.error(err) }
            fs.writeFile("style"+ i +".css", tree.toCSS(), function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(i);
                    if (i < 2) compileEach(i+1);
                }
            }); 
        });
}

compileEach(1);

