'use strict'
class Locale {
  async handle ({ request, antl, view }, next) {
    const lang = request.cookie('lang')
    if (lang) {
      antl.switchLocale(lang)
    }
    // will share locales with all views
    view.share({ locales: antl.availableLocales() })
    await next()
  }
}
module.exports = Locale