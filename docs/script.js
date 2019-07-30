var home = location.href;
if (location.protocol=="file:")
    var home = 'https://checkered-rabbit.github.io/proxy-git/';
{
let [_,orgName,repoName] = home.match(/\/\/(.*?)\..*\/(.*)\//);
let glitchImport = 
    `https://glitch.com/edit/#!/import/github/` +
    `${orgName}/${repoName}` + 
    `?org=${orgName}&repo=${repoName}`;
console.log(glitchImport);
document.writeln(
    `<a href="${glitchImport}">Remix on Glitch</a>`);
}
