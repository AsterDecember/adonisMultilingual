'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('index')
//Route.on('/signup').render('signup');


Route.get('/', ({ view, antl }) => {
    return view.render('home', { locales: antl.availableLocales() })
  })

Route.get('/switch/:lang', ({ params, antl, request, response }) => {
    const locales = antl.availableLocales()
    if (locales.indexOf(params.lang) > -1 ) {
      response.cookie('lang', params.lang, { path: '/' })
    }
    response.redirect('back')
  })