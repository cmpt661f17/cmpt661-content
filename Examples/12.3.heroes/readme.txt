Before you run app.js do:
npm install -g @angular/cli
npm install

In the console run:
ng build -watch

Then app.js file

-----

* Command to Create Angular project using Angular CLI
* Make need to do npm init first to create package.json
https://github.com/angular/angular-cli/wiki/new
ng new [name] creates a new angular application.
//To see the files before you create them
ng new heroes --minimal --skip-tests --inline-style --dry-run
ng new heroes --minimal --skip-tests --inline-style

Other options:
https://github.com/angular/angular-cli/wiki/generate-component
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component heroes -is -it
ng g component hero-editor -is
ng g component app -is -it --flat

ng g service hero
ng g class hero

hero-editor

ng generate class [name]
ng generate service [name] --flat

ng generate pipe [name]
