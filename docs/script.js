document.writeln('<pre>world');
document.writeln(location.href);
var home = location.href;
if (location.protocol=="file:")
    var home = 'https://checkered-rabbit.github.io/proxy-git/';
document.writeln(home);
{
let project = home.match(/.*\/(.*)\//)[1];
debugger;
}
document.writeln('</pre>');
