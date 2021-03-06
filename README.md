Carabiner
=========
A grunt setup for clipping your web projects together.

Installation
------------
1. Run the carabinify script in the root folder. Optionally, call it with the desired project name:
```bash
  curl https://raw.githubusercontent.com/dvmtn/carabiner/master/carabinify | bash /dev/stdin my_project_name
```

Manual Installation
-------------------
1. If you haven't used grunt-source before, install [grunt-source](https://www.npmjs.org/package/grunt-source) with `npm install -g grunt-source`
2. Add the  [Carabiner Gruntsource.json](https://github.com/dvmtn/carabiner/blob/master/Gruntsource.json.example) to your project with:

    ```bash
    curl https://raw.githubusercontent.com/dvmtn/carabiner/master/Gruntsource.json.example > Gruntsource.json
    ```
3. Run `grunt-source init` to populate example files
4. There is no step 4, get developing!

Development Groove
------------------
1. Run `grunt-source dev`
2. Write some html or haml into `html/` and save it
3. See your awesome page at `localhost:8080`
4. Add js and css or sass in the js and css folders
5. Notice how sass, css, js, html, jade, haml, etc. are all compiled into /dist each time you save and think how awesome this is!
6. Throw some static json or CNAME files in `data/` so they are copied straight into `dist/` without processing.
7. Run `grunt-source deploy` to recompile everything and throw it to your deployment branch and remote for the world to see!

Super Important Things
----------------------
- `dist` is intended to be cleaned (as in completely wiped) so files shouldn't be added directly to it. Add them to `data` instead to have them appear in the top level of `dist`.
- The Sitemap can only be generated if you set the `homepage` key in your `package.json` file.
- Support for `haml` will eventually be dropped in favour of Jade because of the better partial (includes) rendering options.

Tasks
-----
|   Command                 |                                         Action                                        |
|:-------------------------:|:-------------------------------------------------------------------------------------:|
| `grunt-source`            | Full build: run tests, lint, concatenate and minify for distribution                  |
| `grunt-source dev`        | Run a webserver on localhost:8080 and recompile JS and CSS files when any are changed |
| `grunt-source test`       | Run jasmine and jshint                                                                |
| `grunt-source deploy`     | Run the default task and deploy to `origin/gh-pages`                                  |

Config
------
- Define new tasks in `grunt/aliases.yaml`
- Change the git branch and remote which deploy pushes to in the options following the [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages#optionsrepo) docuementation.
