<template>
  <div class="container" id="inicio">
    <div class="container-body" id="seccion1">
      <div class="seccion2">
        <input
          type="text"
          placeholder="¿Pregunta?"
          class="form-control my-3"
          v-model="new_question.question"
        />

        <label for="question">Ingresa una Pregunta</label><br />

        <button type="button" class="btn btn-success" @click="store()">
          Crear
        </button>
      </div>
      <div class="seccion1">
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="EDITAR"
          class="form-control " aria-label="Recipient's username" aria-describedby="button-addon2"
          v-model="edit_questions.question"
        />
         <button type="button" class="btn btn-danger" id="button-addon2" @click="cancel()">
          Cancelar
        </button>
      </div>
        
        
        <button type="button" class="btn btn-success" @click="update()">
          Guardar
        </button>

        <!-- <button type="button" class="btn btn-danger" @click="cancel()">
          Cancelar
        </button> -->
      </div>
    </div>
    <div class="main">
      <table class="table">
        <thead>
          <tr>
            <th id="name2"></th>
            <th id="document2">PREGUNTAS</th>
            <!-- <th id="name2">CODIGO</th> -->
            <th id="position2">EDITAR</th>
            <th id="icons2">ELIMINAR</th>
            <th id="salary2"></th>
          </tr>
        </thead>

        <tbody>
          <tr class="planta" v-for="(questions, i) in list_questions" :key="i">
            <td id="name">{{ i + 1 }}</td>
            <td id="document">¿{{ questions.question }}?</td>
            <!-- <td id="document">{{ questions.id }}</td> -->
            <td id="position">
              <button
                class="btn btn-primary"
                type="button"
                @click="edit(questions)"
                href="#inicio"
              >
                editar
              </button>
            </td>

            <td id="icons">
              <button class="btn btn-danger" @click="destroy(questions.id)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <thead class="list">
        <th class="questions" v-for="(questions, i) in list_questions" :key="i">
          ID: {{ i + 1 }}---{{ questions.id }}---- ¿{{ questions.question }}?
          <button
            class="btn btn-primary"
            type="button"
            @click="edit(questions)" href="#inicio"
          >
            <a href="#seccion1" id="a">editar</a>
          </button>
          <button class="btn btn-danger" @click="destroy()">Eliminar</button>
        </th>

        <th></th>
      </thead> -->
    </div>
  </div>

  <!-- <div class="container">
    <h2>Prueba algo nuevo</h2>

    <div v-for="question in list_questions">
      <a>
        <h4>{{ question.question }}</h4>
      </a>
    </div>
  </div> -->
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Admin\agregar.css);
</style>

<script>
export default {
  name: "Preguntas",
  components: {},

  data() {
    return {
      list_questions: {},
      new_question: {},
      //
      edit_questions: [],
      copy_edit_questions: {},
      //
      Delete: {},
    };
  },

  mounted() {
    this.index();
  },

  created() {},

  methods: {
    async index() {
      let response = await axios.get("http://127.0.0.1:8000/api/questions");
      this.list_questions = response.data.question;
    },

    async store() {
      await axios.post(
        "http://127.0.0.1:8000/api/questions",
        this.new_question
      );
      (this.new_question = {}), this.index();
      console.log(this.list_questions);
    },

    edit(questions) {
      this.edit_questions = questions;

      Object.assign(this.copy_edit_questions, this.edit_questions);
    },

    async update() {
      let id = this.edit_questions.id;
      await axios.put(
        "http://127.0.0.1:8000/api/questions/" + this.edit_questions.id,
        this.edit_questions
      );
      (this.edit_questions = {}), console.log(this.list_questions);
      this.index();
    },

    cancel() {
      Object.assign(this.edit_questions, this.copy_edit_questions);
    },

    //  DeleteP(questions) {
    //         this.Delete =questions;

    //     },

    async destroy(id) {
      // let id=this.Delete.id;
      await axios.delete("http://127.0.0.1:8000/api/questions/" + id);
      this.index();
    },
  },
};
</script>
