Carabiner
=========
A grunt setup for clipping your web projects together.

Installation
------------
0. If you haven't used grunt-source before, install [grunt-source](https://www.npmjs.org/package/grunt-source) with `npm install -g grunt-source`
1. Add a copy of the [example Gruntsource.json](https://github.com/dvmtn/carabiner/blob/master/Gruntsource.json.example) into your project
2. Run `grunt-source init` to populate example files
3. Run `grunt-source dev`
4. There is no step 4, get developing!

Development Groove
------------------
1. Run `grunt-source dev`
2. Write some html or haml into `html/` and save it
3. See your awesome page at `localhost:8080`
4. Add js and css or sass in the js and css folders
5. Notice how sass, css, js, html, haml, etc. are all compiled into /dist each time you save and think how awesome this is!
6. Run `grunt-source` to do one last test, cleanup and build before sending your exceptional files to your server


Tasks
-----
|   Command          |                                         Action                                        |
|:------------------:|:-------------------------------------------------------------------------------------:|
| `grunt-source`            | Full build: run tests, lint, concatenate and minify for distribution                  |
| `grunt-source dev`        | Run a webserver on localhost:8080 and recompile JS and CSS files when any are changed |
| `grunt-source test`       | Run jamine and jshint                                                                 |
| `grunt-source deploy`     | Run the default task and deploy to `origin/gh-pages`                                  |

Config
------
- Define new tasks in `grunt/aliases.yaml`
- Change the git branch and remote which deploy pushes to in the options following the [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages#optionsrepo) docuementation.
