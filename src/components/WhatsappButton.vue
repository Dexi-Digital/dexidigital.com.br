<template>
    <div>

        <a @click="redirectToWhatsApp" class="btn-whatsapp-pulse btn-whatsapp-pulse-border">
            <i class="fab fa-whatsapp"></i>

        </a>

    </div>
</template>

<script>
export default {
    name: 'WhatsappButton',
    methods: {
        redirectToWhatsApp() {
            const phoneNumber = "5534991284358";
            const message = "Olá!";
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    }
};
</script>

<style >
.btn-whatsapp-pulse {
    background: #25d366;
    position: fixed;
    bottom: 20px;
    z-index: 1;
    right: 20px;
    color: white !important;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 0;
    padding: 35px;
    text-decoration: none;
    border-radius: 50%;
    animation-name: pulse;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
    }

    80% {
        box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
    }
}

.btn-whatsapp-pulse-border {
    bottom: 30px;
    right: 20px;
    animation-play-state: paused;
}

.btn-whatsapp-pulse-border::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    padding: 25px;
    border: 5px solid #25d366;
    opacity: 0.75;
    animation-name: pulse-border;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}

@keyframes pulse-border {
    0% {
        padding: 25px;
        opacity: 0.75;
    }

    75% {
        padding: 50px;
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}
</style>