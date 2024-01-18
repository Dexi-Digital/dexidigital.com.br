<template>
    <div>
      <a href="/" @click="redirectToWhatsApp" class="btn-whatsapp" aria-label="Enviar mensagem no WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WhatsappButton',
    methods: {
      redirectToWhatsApp() {
        const phoneNumber = '5534991284358';
        const message = 'Olá!';
        
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`;
        window.open(url, '_blank');
      },
    },
  };
  </script>
  
  <style>
  .btn-whatsapp {
    background: #25d366;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    color: white !important;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Adicionada transição de escala */
  }
  
  .btn-whatsapp:hover {
    background: #128c7e; /* Alterado para uma cor ligeiramente mais escura no hover */
    transform: scale(1.1); /* Efeito de escala no hover */
  }
  </style>
  