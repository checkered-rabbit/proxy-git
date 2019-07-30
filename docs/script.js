var home = location.href;
if (location.protocol=="file:")
    var home = 'https://checkered-rabbit.github.io/proxy-git/';
{
    let [_,orgName,repoName] = home.match(/\/\/(.*?)\..*\/(.*)\//);
    let glitchImport = 
        `https://glitch.com/edit/#!/import/github/` +
        `${orgName}/${repoName}` + 
        `?user_repo=${orgName}/${repoName}` +
        `&org=${orgName}&repo=${repoName}` +
        `&ssh=git@github.com:${orgName}/${repoName}.git` +
        `&https=https://github.com/${orgName}/${repoName}.git`;
    console.log(glitchImport);

    document.writeln(
        `<h1>${orgName}/${repoName}</h1>`
    )

    document.writeln(
        `<a href="https://github.com/${orgName}/` + 
        `${repoName}">Github Repo</a><p>`
    )

    document.writeln(
        `<a href="${glitchImport}">Remix on Glitch</a>`
    )

    document.writeln(
`<pre>
git pull https://github.com/${orgName}/${repoName}.git
</pre>`
    );
}
