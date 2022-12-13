<template>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <span class="material-symbols-outlined">
          transfer_within_a_station
        </span>
        <div class="logo_name">Virtual Tour</div>
      </div>
      <!-- <span class="material-symbols-outlined" id="btn"> menu </span> -->
    </div>
    <ul class="nav_list">
      <!-- <li>
          <span class="" id="search">
            <a class="material-symbols-outlined" id="search"> search </a>
          </span>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li> -->
      <li>
        <router-link class="link" to="/admin/inicio">
          <a href="#">
            <span class="material-symbols-outlined">Undo </span>
            <span class="links_name">inicio</span>
          </a>
        </router-link>

        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <router-link class="link" to="/admin/profileadmin">
          <a href="#">
            <span class="material-symbols-outlined"> person </span>
            <span class="links_name">Users</span>
          </a>
        </router-link>

        <span class="tooltip">Perfil</span>
      </li>
    
      <li>
       <router-link class="link" to="/admin/Usuarios">
          <a href="#">
            <span class="material-symbols-outlined">chat </span>
            <span class="links_name">Message</span>
          </a>  
        </router-link>
        <span class="tooltip">Usuarios</span>
      </li>
      
     <!-- <li>
        <router-link class="link" to="/admin/">
          <a href="#">
            <span class="material-symbols-outlined"> folder_open </span>
            <span class="links_name">Documetos Sena</span>
          </a>  
        </router-link>
        <span class="tooltip">Documentos</span>
      </li> -->
      
      <!-- <li>
            <a href="#">
              <span class="material-symbols-outlined"> shopping_cart </span>
              <span class="links_name">Order</span>
            </a>
            <span class="tooltip">Order</span>
          </li> -->
      <!-- <li>
          <a href="#">
            <span class="material-symbols-outlined"> favorite_border </span>
            <span class="links_name">Saved</span>
          </a>
          <span class="tooltip">Saved</span>
        </li> -->
      <li>
       <router-link class="link" to="/admin/Setting/">
        <a href="#">
          <span class="material-symbols-outlined"> settings </span>
          <span class="links_name">Setting</span>
        </a>
        </router-link>
        <span class="tooltip">Setting</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img src="imagenes/io.jpg" alt="" />
          <div class="name_job">
            <div class="name">Arley Acosta</div>
            <div class="job">Creator</div>
          </div>
        </div>
        <span class="material-symbols-outlined" id="log_out"> login </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(/src\assets\Proyecto\Estilos\Default\aside.css);
</style>
<!-- <script>
export default {
  mounted() {
    // let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    // let searchBtn = document.querySelector("#search");
    let logins = document.querySelector("#log_out");

    // btn.onclick = function () {
    //   sidebar.classList.toggle("active");
    // };

    // searchBtn.onclick = function () {
    //   sidebar.classList.toggle("active");
    // };

    logins.onclick = function () {
      sidebar.classList.toggle("active");
    };
  },
};
</script> -->

