Iojs 1.3.0 
===============

Io.js is a server-side JavaScript environment that uses an asynchronous event-driven model.


Installation overview
---------------------

iojs cmd is installed into .bin dir in your project. iojs itself is deployed by NuGet,
so there is no need to install it locally on dev machines or build servers.

If you're using NuGet restore, it's safe to ignore NuGet "packages" dir in Git (or in other
VCS), to reduce the size of repository.


Automation
----------

Use ".bin\iojs" command to run Io.js in your build scripts. For example, here is a simple
MsBuild target to minify your scripts using Require.js optimizer:

<Target Name="OptimizeJs">
  <Exec Command=".bin\iojs Scripts\r.js -o Scripts\build.js" />
</Target>


Daily usage
-----------

For your convenience, ".bin" is added to the PATH environment variable. You
can call "iojs" directly from your project root dir.

For example, if you installed Io.js to "MySite.Web" project of "MySite" solution, you can
run it directly in the command prompt from the project dir:

D:\Projects\MySite\MySite.Web> iojs Scripts\server.js

Note: add ".bin" to the PATH manually for other developers in your team.
Note: if PATH was changed, restart your command prompt to refresh environment variables.


Docs
----

Full Io.js documentation is available at https://iojs.org/api/ 


------------------------------------------------------
© Copyright io.js contributors. 
