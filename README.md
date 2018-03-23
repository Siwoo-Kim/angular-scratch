# angular-scratch

angular config from scratch

1.Creating Root folder and Angular Root folder(app)

2.Bootstrap html - index.html

3.List dependencies in the package.json

4.npm install

5.downloading dt~core-js dt~node for typing information(typescript)

6.config typescript(tsconfig.json)

7.(optional) testing typscrip compile (tsc)

8.config bs-config.js (BrowserSync)

module.exports = {
    ghostMode: false,
    reloadDelay: 1000,
    reloadDebounce: 1000,
    injectChanges: false,
    minify: false
};

9.building scratch structure for angular (template or component, service etc..)

10.Creating Root Angular Module and specify bootstrap component in the config

11.creating main.ts to specify the root module(bootstrap)

12.Creating Javascript Module Loader (system.config.js)

(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            // other libraries
            'rxjs':                      'npm:rxjs',
           },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
        }
    });
})(this);


in the index.html, import scripts 


        <script src="node_modules/classlist.js/classList.min.js"></script>
        <script src="node_modules/core-js/client/shim.min.js"></script>
        <script src="node_modules/zone.js/dist/zone.min.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>
        <script src="system.config.js"></script>
        <script>
            System.import("app/main").catch(function (err) {
                console.log(err);
            })
        </script>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
