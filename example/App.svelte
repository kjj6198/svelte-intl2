<script>
  export let t; // your translation function created by createTranslation
  export let locale;

  const options = {
    tw: '繁體中文',
    en: 'English'
  };

  let selected = options.en;
</script>

<select bind:value={selected}>
  {#each Object.keys(options) as option}
    <option value={option}>{options[option]}</option>
  {/each}
</select>

<p>{$t('common.count')}</p>
<p>{$t('common.people', 2)}</p>
<p>{$t('title')}</p>
