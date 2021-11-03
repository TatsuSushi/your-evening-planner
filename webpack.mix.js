const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//JS files
mix.js('resources/js/app.js', 'public/js').react();
mix.js('resources/js/webpages/welcome.js', 'public/js').react();
mix.js('resources/js/webpages/my-dashboard.js','public/js').react();
mix.js('resources/js/webpages/make-event.js','public/js').react();
mix.js('resources/js/webpages/create-poll.js','public/js').react();
mix.js('resources/js/webpages/my-planner.js','public/js').react();
mix.js('resources/js/webpages/friend-list.js', 'public/js').react();
mix.js('resources/js/webpages/Email.js', 'public/js').react();
mix.js('resources/js/webpages/invitation-accepted.js', 'public/js').react();
mix.js('resources/js/webpages/invitation-declined.js', 'public/js').react();

//SCSS files
mix.sass('resources/sass/base.scss', 'public/css');
mix.sass('resources/sass/welcome.scss', 'public/css');
mix.sass('resources/sass/home.scss', 'public/css');
mix.sass('resources/sass/make-event.scss', 'public/css');
mix.sass('resources/sass/my-planner.scss', 'public/css');
mix.sass('resources/sass/create-poll.scss', 'public/css');
mix.sass('resources/sass/TableBase.scss','public/css');
mix.sass('resources/sass/friend-list.scss', 'public/css');
mix.sass('resources/sass/app.scss', 'public/css');
mix.sass('resources/sass/invitation-accepted.scss', 'public/css');
mix.sass('resources/sass/invitation-declined.scss', 'public/css');
