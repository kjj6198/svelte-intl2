require('svelte/register');
const express = require('express');
const { createTranslation, createLocale } = require('../dist/index.cjs');
const app = express();
const translation = require('./translation');
const AppComponent = require('./App.svelte').default;

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('*', (req, res) => {
  // get language by request is also option.
  const localeStore = createLocale(translation.en);

  const { html, head } = AppComponent.render({
    locale: translation,
    t: createTranslation(localeStore),
  });

  res.render('index', {
    html,
    head,
    locale: translation,
  });
});

app.listen(3000);
