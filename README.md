# svelte-intl

Yet another i18n for Svelte.

A simple i18n implementation svelte. It can easily integrate with nodejs SSR with no bundler.

## Example

### 1. Create locale store

```javascript
const locale = createLocale({
  en: {
    total: 'total',
    link: 'link',
    common: {
      count: 'count',
    },
  },
  'zh-TW': {
    total: '總計',
    link: '連結',
    common: {
      count: '計算',
    },
  },
});

const t = createTranslation(locale);
```

### 2. Use it in Svelte component

```svelte
<p>{$t('common.count')}</p>
<p>{$('link')}</p>
```

### 3. SSR

Perferbly passing prop from root component for easily hydrate.

```javascript
const localeStore = createLocale({
  en: {
    total: 'total',
    link: 'link',
    common: {
      count: 'count',
    },
  },
  'zh-TW': {
    total: '總計',
    link: '連結',
    common: {
      count: '計算',
    },
  },
});

const { html, head } = AppComponent.render({
  t: createTranslation(localeStore),
});
```

### 4. Variables

```svelte
// { common: { count: '{0} items'}}
<p>{$t('common.count', 2)}</p>
<!-- 2 items -->


// { common: { count: '{0} items {1} people'}}
<p>{$t('common.count', 2, 3)}</p>
<!-- 2 items 3 people -->
```

## TODOs

- [ ] Dynamic import
- [ ] Passing object
