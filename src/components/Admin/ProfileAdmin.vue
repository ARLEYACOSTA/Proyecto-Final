<template>
  <div id="contain3">
    <div id="nav2_admin_profile">
      <div class="foto"></div>
    </div>
    <div class="profile_admin">
      Name:
      <p>{{ user.name }}</p>
      Email:
      <p>{{ user.email }}</p>
      created_at:
      <p>{{ user.created_at }}</p>
    </div>
    <button type="button" @click="logout()">Cerrar Sesion</button>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\User\Cuenta.css);
</style>

<script>
export default {
  components: {},
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    if (localStorage.token) {
      this.token = localStorage.token;
      this.user = JSON.parse(localStorage.user);

      this.get_user();
    } else {
      this.$router.push({
        name: "Login",
        params: {
          message: "No estas autotizado a entrar",
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
          name: "Login",
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
          name: "Login",
          params: {
            message: e.response.data.message,
          },
        });
      }
    },
  },
};
</script>
