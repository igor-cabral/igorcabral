/* GA4: coloque seu ID no SITE_CONFIG.analytics.measurementId.
   O Google Analytics só é carregado após o visitante aceitar analytics. */
(function(){
  const id = window.SITE_CONFIG?.analytics?.measurementId;
  if (!id || id === 'G-XXXXXXXXXX') return;
  const consentKey='igorcabral_analytics_consent';
  const load=()=>{
    if(window.__gaLoaded)return; window.__gaLoaded=true;
    const s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id); document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[]; function gtag(){dataLayer.push(arguments)} window.gtag=gtag;
    gtag('js',new Date()); gtag('config',id,{anonymize_ip:true});
  };
  const consent=localStorage.getItem(consentKey);
  if(consent==='granted') load();
  if(consent!=='granted' && consent!=='denied'){
    const box=document.createElement('aside'); box.className='cookie-consent'; box.setAttribute('role','dialog'); box.setAttribute('aria-label','Preferências de privacidade');
    box.innerHTML='<div><p>Este site usa cookies de análise para entender como as páginas são utilizadas e melhorar a experiência. Saiba mais na <a href="'+(location.pathname.includes('/projetos/')?'../':'')+'politica-de-privacidade.html">Política de Privacidade</a>.</p></div><button class="btn" type="button">Aceitar análise</button>';
    box.querySelector('button').addEventListener('click',()=>{localStorage.setItem(consentKey,'granted');load();box.remove();});
    document.body.appendChild(box);
  }
})();
