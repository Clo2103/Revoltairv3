/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle */

const SITE_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "version": "editorial",
  "accent": "#4abe51",
  "darkBg": "#083624",
  "showScrollHint": true
}/*EDITMODE-END*/;

function SiteTweaks() {
  const [t, setTweak] = useTweaks(SITE_TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.classList.toggle('v-immersif', t.version === 'immersif');
    document.documentElement.style.setProperty('--c-green', t.accent);
    document.documentElement.style.setProperty('--c-green-dark', t.darkBg);
    const hint = document.querySelector('.hero__scroll');
    if (hint) hint.style.display = t.showScrollHint ? '' : 'none';
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Direction visuelle">
        <TweakRadio label="Version" value={t.version} options={[
          { value: 'editorial', label: 'Éditorial' },
          { value: 'immersif', label: 'Immersif' }
        ]} onChange={v => setTweak('version', v)} />
      </TweakSection>
      <TweakSection title="Couleurs">
        <TweakColor label="Accent" value={t.accent} options={['#4abe51', '#5dd5ff', '#ffb627', '#e63946']} onChange={v => setTweak('accent', v)} />
        <TweakColor label="Vert profond" value={t.darkBg} options={['#083624', '#0a4d34', '#1a2820', '#020705']} onChange={v => setTweak('darkBg', v)} />
      </TweakSection>
      <TweakSection title="Hero">
        <TweakToggle label="Indicateur de scroll" value={t.showScrollHint} onChange={v => setTweak('showScrollHint', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<SiteTweaks />);
