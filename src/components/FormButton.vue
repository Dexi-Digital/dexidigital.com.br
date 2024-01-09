<template>
    <div class="content-btn-contact">

        <router-link class="nav-link active btn-contact" to="/fale-conosco">
            <button>
                {{ $t("header.contact-button") }}
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'FormButton',
}
</script>
<style>


.btn-contact {
  padding: 15px !important;
  color: white !important;
  border: 1px solid white !important;
    box-shadow: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  width: 80%;
  text-align: center;
  transition: background-color 2s, box-shadow 2s, transform 2s;
  /* Adiciona uma transição de 2 segundos para as propriedades alteradas no hover */
}

.btn-contact:hover {
  color: #38B6ED !important;
  cursor: pointer;
  box-shadow: none;
  background-color: white;
  border: none;

}

@media screen and (min-width:320px) and (max-width: 480px) {
  

  .btn-contact {
    width: 275px;
    font-size: 17px;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
 

  .btn-contact {

    width: 275px;
    font-size: 17px;
    padding: 10px 11px 10px 11px;
  }

}

@media screen and (max-width: 481px) {
 

  .content-btn-contact {
    padding-top: 30px !important;
  }
}
@media screen and (min-width: 767px) {


  .content-btn-contact {
    padding-left: 20px;
  }

}
@media screen and (max-width: 767px) {


  .content-btn-contact {
    display: flex;
    justify-content: center;
  }
}


@media screen and (min-width: 767px) {
 

  .content-btn-contact {
    padding-left: 20px;
  }

}

@media screen and (min-width: 769px) {
  .btn-contact {
    font-size: 16px;
    width: 270px;
    padding: 10px 11px 10px 11px;
  }
}
</style>