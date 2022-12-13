<template>

  <div class="container-body">
    <div class="titulo"><h1>RECORRIDO VIRTUAL SENA</h1></div>
    <div class="container-main">
      <!-- <img src="src\assets\Proyecto\Imagenes\IMG_20221112_104246_00_004.jpg"> -->
      <!-- <a-scene >
 <a-assets>
    <img id="sky" src="src\assets\Proyecto\Imagenes\IMG_20221112_104246_00_004.jpg">
  </a-assets>
<a-ski src="#ski" id="scene"></a-ski>

</a-scene> -->
      <!-- <video
      src="/src\assets\Proyecto\Videos\video.mp4"
      autoplay="true"
      muted="true"
      loop="true" poster=""
    ></video> -->
      <!-- <router-link class="link" to="/login">Acceder </router-link> -->

      <img src="src/assets/Proyecto/Logo/logoSena.png" alt="" id="imglogo" />
    </div>

    <div class="container-footer">
    
      <div class="opciones">
        <div class="card">
          <div class="content" id="card1">
            <router-link class="link" to="/login">
              <div>Login</div>
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="content" id="card2">
            <router-link class="link" to="/Recorrido">
              <div>HACER RECORRIDO</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <router-view></router-view> -->
</template>


<style scoped>
/*@import url(/src\assets\Proyecto\Estilos\Default\inicio.css);*/

/* .container-body{

  background-image: url(/src\assets\Proyecto\Imagenes\imagen1.jpg);
  
} */

.container-body {
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-wrap: wrap;
  scroll-behavior: smooth;
  border: 10px solid rebeccapurple;
    width: 100%;
   height: 100vh;
  /* border: 10px solid black; */
}

.container-main {
  border: 0px solid yellow;
  min-width: 100%;
  min-height: 50%;
  display: flex;
  background-image: url(/src\assets\Proyecto\Imagenes\IMG.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: right;
  padding-right: 5rem;
  padding-top: 2rem;
}

.container-footer {
  display: flex;
  flex-flow: row;
  border: px solid blue;
  min-height: 50%;
  min-width: 100%;
  justify-items: center;
}

#imglogo {
  display: flex;
  width: 6rem;
  height: 6rem;
  border: 0px solid black;
}
.opciones {
  border: 0px solid rebeccapurple;
  display: flex;
  margin: 3rem;
  width: 100%;
  justify-content: center;
  /* height: 100%; */
  overflow: hidden;
}

.titulo {
  width: 50%;
  height: 3rem;
  border-radius: 2rem;
  position: absolute;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
  transform: translateY(-2rem);
  background: #6ed3d0c1;
  font-family: tipo_letra3;
  text-align: center;
  color: #1d1b31;
  transform: translateY(0.1rem);
}

.titulo:hover {
  color: orangered;
  border: 3px solid #025159;
}

.card {
  display: flex;
  flex-flow: column;
  width: 35%;
  height: 100%;
  border: 2px solid rgb(73, 70, 70);
  /* background-image: url(../Imagenes/img_Publicidad/anuncio3.jpg)  ; */
  background-size: contain;
  /* box-shadow: 3px 5px 5px black; */
  overflow: hidden;
  /* margin-top: 1rem; */
}

.content {
  /* display: flex; */
  /* flex-flow: column; */
  /* border: 2px solid yellow; */
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  /* transition: 0.5s; */
}
.content:hover {
  transform: scale(1.2);
  filter: brightness(20%);

  -webkit-transition: all 300ms ease-in;
  -moz-transition: all 300ms ease-in;
  -ms-transition: all 300ms ease-in;
  -o-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  /* transition: 0.5s; */
}

.card:hover {
  background-color: rgba(0, 0, 0, 0.629) !important;
  /* transform: scale(1,2); */

  -webkit-transition: all 200ms ease-in;
  -moz-transition: all 200ms ease-in;
  -ms-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
}

#card1 {
  /* background-image: url(/src\assets\Proyecto\iconos\fondo.jpg); */
}

#card2 {
  /* background-image: url(/src\assets\Proyecto\Imagenes\gif.gif); */
}

/* .content {
  width: 100%;
  height: 10%;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: contain;
  scroll-behavior: smooth;

  transition: 0.5s;
  background-image: url(/src\assets\Proyecto\Imagenes\gif3.gif);
} */

/* video{

  position: fixed;  
  z-index: -1;
  height: 45%;
  min-width: 100%;
  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);
} */

.link {
  display: flex;
  border: 0px solid red;
  text-decoration: none;
  color: rgb(33, 4, 176);
  font-family: tipo_letra7;
  font-size: 3rem;
  text-align: center;
  justify-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.732);
  scroll-behavior: smooth;
  position: absolute;
}

/* .content h2, a{
    color:rgb(255, 255, 255, .8);
  }  */

/* .card:hover .content {
  transform: scale(1.2);
  scroll-behavior: smooth;

} */
#scene {
  border: 10px solid red;
  width: 100vw;
  height: 50vh;
}
</style>
<!-- <script>
import Home from './Home.vue'

import Perfil from "../User/Perfil.vue";

export default {
  components: {
    Home,
    Perfil,
  },

  Perfil,
};
</script> -->
