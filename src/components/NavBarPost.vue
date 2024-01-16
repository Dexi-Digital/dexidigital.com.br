<template>
    <div class="header">
        <div class="buttons-container">
            <button v-if="$route.path === '/criar-post'" @click="goBack" type="button" class="btn-icon">
                <i class="fa fa-long-arrow-left icon-arrow" aria-hidden="true"></i>
            </button>

            
            <div>
                <!-- <button  v-else-if="$route.path === '/editar-post'" @click="goToCreatePost" type="button" class="btn-icon add-edit-post">
                <i class="fa fa-long-arrow-left icon-arrow" aria-hidden="true"></i>
              Adicionar
            </button> -->
            </div>
            <button @click="logout()" class="btn-icon">
                <span class="material-symbols-outlined icon-logout">
                    logout
                </span>
            </button>
        </div>
        <p class="create-post" v-if="$route.path === '/editar-post'">Editar/Apagar</p>
        <p class="create-post" v-else-if="$route.path === '/criar-post'">Criar Post</p>

        <p class="create-post" v-else>Editar</p>


    </div>
</template>
<script>


export default {
    name: 'NavBarPost',
    methods: {
        goBack() {
            this.$router.push("/editar-post");
        },
        goToCreatePost() {
            this.$router.push("/criar-post");
        },
        // goBackEdit() {
        //     this.$router.push("/pagina-de-edicao");
        // },
        logout() {
            localStorage.clear();
            this.$router.push("/entrar")
        }
    }
}

</script>
<style>
.header {
    background: linear-gradient(to right, #21B6F8 0%, #5526d1f2 100%)!important;
}

.buttons-container {
    display: flex;
    justify-content: space-between;
}

.add-edit-post {
    color: white;
}

.btn-icon {
    cursor: pointer;
}

.icon-arrow {
    color: white;
    font-size: 20px;
    padding: 20px 0 0 30px;

}

.icon-logout {
    color: white;
    font-size: 30px;
    padding: 20px 30px 0 0;
    font-weight: 200;
}

.create-post {
    color: #ffffff;
    font-size: 30px;
    padding: 20px 70px;
    font-weight: bold;
}
</style>