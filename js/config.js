/* ============================================================
   CONFIGURAÇÃO CENTRAL DO SITE — gerado automaticamente pelo editor.
   Para mudar WhatsApp, Instagram, e-mail e preços, use o editor.
   ============================================================ */
const SITE_CONFIG = {
  "brand": {
    "name": "igor cabral.",
    "tagline": "design & web",
    "domain": "igorcabral.dev.br",
    "url": "https://igorcabral.dev.br"
  },
  "whatsapp": {
    "number": "5547996603119",
    "defaultMessage": "Oi, Igor! Vi seu site e quero criar o site do meu negócio."
  },
  "instagram": {
    "handle": "@igorlcabral",
    "url": "https://instagram.com/igorlcabral"
  },
  "email": "igorlcabral@icloud.com",
  "analytics": {
    "measurementId": "G-CE81W2685L"
  },
  "prices": {
    "siteMin": 200,
    "siteMax": 500,
    "domain": 40,
    "currency": "R$"
  }
};

// Monta o link de WhatsApp com a mensagem padrão (ou uma customizada)
function waLink(customMessage){
  const msg = encodeURIComponent(customMessage || SITE_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${msg}`;
}
