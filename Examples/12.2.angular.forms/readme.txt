# Install Angular CLI globally. You install one to use it with all Angular projects
npm i -g @angular/cli

/* Commands used to create this project
# If the project already have packages.json then rename it to packages2.json
# After Angular CLI creates the app then copy the dependencies from packages2.json to the newly created package.json

# Create a new project angular project (use -dryRun to see the files to be created
ng new angular-forms --directory ./ --minimal --skip-git

*/

customer folder has the template-driven form
customer-reactive has the reactive form

to build use:
ng build

to run use:
ng serve -o