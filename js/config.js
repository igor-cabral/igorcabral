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
<<<<<<< HEAD
    "defaultMessage": "Oi, Igor! Vi seu site e quero criar o site do meu negócio!"
=======
    "defaultMessage": "Oi, Igor! Vi seu site e quero criar o site do meu negócio."
>>>>>>> 0edd72719e096dcec097a80434b7f10eaa43b98f
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
<<<<<<< HEAD
    "siteMin": 250,
    "siteMax": 2000,
=======
    "siteMin": 200,
    "siteMax": 500,
>>>>>>> 0edd72719e096dcec097a80434b7f10eaa43b98f
    "domain": 40,
    "currency": "R$"
  }
};

// Monta o link de WhatsApp com a mensagem padrão (ou uma customizada)
function waLink(customMessage){
  const msg = encodeURIComponent(customMessage || SITE_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${msg}`;
}
