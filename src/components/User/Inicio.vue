<template>
  <!-- <video
      src="/src\assets\Proyecto\Videos\pexels-rostislav-uzunov-10613973.mp4"
      autoplay="true"
      muted="true"
      loop="true" poster=""
    ></video> -->
      
  <div class="container-body" >
    <NavBarUser></NavBarUser>

    <div class="containerr" id="container">
      <div class="seccion">
        <div class="seccion1">
          <router-link class="contenido link" to=/user/profile>
            <div class="card1">
            </div>
              <div>MI CUENTA</div>

          </router-link>

          <router-link class="contenido link" to=/user/documentacion>
            <div class="card2">
            </div>
              <div id="titilos">DOCUMENTACION</div>

          </router-link>

            <router-link class="contenido link" to=/certificado   v-if="(user.approved==1)">
              <div class="card3">
                </div>
             <div>CERTIFICADO</div>
            </router-link>

            <div class="contenido link" v-else>
              <div class="card3">
                </div>
             <div>CERTIFICADO</div>
              </div>
          
        </div>
        <div class="seccion2">
          <router-link class="contenido link" to=/prueba>
            <div class="card4">
            </div>
            <div>HACER PRUEBA</div>
          </router-link>

          <router-link class="contenido link" to=/recorrido>
            <div class="card5">
            </div>
            <div>HACER RECORRIDO</div>
          </router-link>
        </div>
      </div>
    </div>
    <div id="dos">
      <div class="cerrar" @click="logout()"></div>
      <div class="icons1"></div>
      <div class="aprendiz" v-if="user.roles_id == 2">
        <h2>Aprendiz</h2>
      </div>

      <div class="aprendiz" v-else><h2>Administrador</h2></div>
      <div class="icons2"></div>
      <div class="usuario">
        <h2>{{ user.name }}</h2>
      </div>
    </div>
  </div>
    <router-view></router-view>

</template>
    <style scoped>
@import url(/src\assets\Proyecto\Estilos\User\Cuenta.css);
</style>


<script>
import NavBarUser from "./NavBarUser.vue";

export default {
  components: {
    NavBarUser,
  },
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    // this.$router.push("/user/inicio");

    if (localStorage.token) {
      this.token = localStorage.token;
      this.user = JSON.parse(localStorage.user);

      this.get_user();
    } else {
      this.$router.push({
        name: "Login",
        params: {
          message: "¡Inicia sesión nuevamente!",
        },
      });
    }
  },

  methods: {
    async get_user() {
      try {
        console.log(this.token);

        const rs = await this.axios.get("/api/user", {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = rs.data.user;
      } catch (e) {
        this.$router.push({
          name: "Home",
          params: {
            message: "no estas autorizado",
          },
        });
      }
    },
    async logout() {
      try {
        const rs = await this.axios.get("/api/logout", {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        localStorage.clear();

        this.$router.push({
          name: "Home",
          params: {
            message: rs.data.message,
          },
        });
      } catch (e) {
        this.$router.push({
          name: "Home",
          params: {
            message: e.response.data.message,
          },
        });
      }
    },
  },
};
</script>

