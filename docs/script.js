document.writeln('<pre>world');
document.writeln(location.href);
var home = location.href;
if (location.protocol=="file:")
    var home = 'https://checkered-rabbit.github.io/proxy-git/';
document.writeln(home);
{
let [_,orgName,repoName] = home.match(/\/\/(.*?)\..*\/(.*)\//);
let glitchImport = 
    'https://glitch.com/edit/#!/import/github/org-name/repo-name';
debugger;
}
document.writeln('</pre>');
