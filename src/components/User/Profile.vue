<template>
  <div class="container-body" id="contain1">
    <div class="container" id="contain2">
      <nav id="nav2">
        <div class="foto"></div>
      </nav>
      <div class="profile">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </div>

      <!-- <div class="pho">
        <input type="file" id="new-client-input" @change="show_image" />
        <img
          @click="open_browser('new-client-input')"
          :src="users.url"
          class="div"
        />

        <span
          v-if="!users.url && !loading"
          class="material-symbols-outlined"
          @click="open_browser('new-client-input')"
        >
          account_circle
        </span>

        <div
          v-if="loading"
          class="loading"
          @click="open_browser('new-client-input')"
        ></div>
      </div> -->

      <!-- <button type="button" class="btn btn-primary" @click="create">
        Add Client
      </button> -->
    </div>
    <div class="d">
      <!-- <button class="btn btn-primary" type="button" @click="logout()">Cerrar Sesion</button> -->
    </div>
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
      users: {
        id: null,
        name: "",
        email: "",
        image: null,
        url: null,
        updated: null,
        preview: null,
      },
      loading: false,
      image_text: "Loading image...",
      client_copy: {},
      modal: null,
      toast: null,
      errors: {},
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

    async create() {
      // this.prepare_elements("addNewUserModal");
      try {
        const res = await this.axios.post(
          "http://127.0.0.1:8000/api/users",
          this.users,
          {
            headers: {
              Authorization: "Bearer " + localStorage.token,
              "Content-Type": "multipart/form-data", //Permite enviar imágenes
            },
          }
        );
        this.get_user();
        this.reset_form();
        this.alert = res.data.message;
        this.clear_image("new-client-input");

        this.modal.hide();
        this.toast.show();
      } catch (e) {
        this.manage_error_messages(e);
      }
    },

    async update() {
      this.prepare_elements("editUserModal");
      try {
        const id = this.users.id;
        const res = await this.axios.post(
          "http://127.0.0.1:8000/api/user/update/${id}",
          this.users,

          {
            headers: {
              Authorization: "Bearer " + localStorage.token,
              "Content-Type": "multipart/form-data", //Permite enviar imágenes
            },
          }
        );
        this.get_user();
        this.alert = res.data.message;
        this.clear_image("edit-client-input");

        this.modal.hide();
        this.toast.show();
      } catch (e) {
        this.manage_error_messages(e);
      }
    },

    open_browser(input_name) {
      const input = document.getElementById(input_name);
      input.click();
      this.loading = true;
      this.users.updated = null;
      this.image_text = "Loading...";
    },

    show_image(e) {
      if (e.target.files[0]) {
        console.log("updated!");
        this.users.updated = true;

        this.users.image = e.target.files[0];
        this.users.url = URL.createObjectURL(e.target.files[0]);
      } else {
        console.log("No se seleccionó ninguna imagen!!");
        this.users.url = this.user_copy.url;
      }

      this.loading = false;
    },
  },
};
</script>
