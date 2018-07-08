let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

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

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/index.scss', 'public/css/app.css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  });

/*
|--------------------------------------------------------------------------
| BrowserSync
|--------------------------------------------------------------------------
|
| Keeps multiple browsers & devices in sync when building websites.
| Uncomment to use. Not recommended for tailwind development.
|
*/

// mix.browserSync('http://localhost:8000');
