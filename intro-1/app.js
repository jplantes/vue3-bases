const app = Vue.createApp({
  // -- Esto es para el Options API --

  //template: `
  //  <h1> Hola mundo </h1>
  //  <p> {{ true ? 'Activo' : 'Inactivo' }} </p>
  //`,
  // watch: {},
  
  data() {
    return {
      quote: 'Soy Batman',
      author: 'Brus Wayne'
    }
  },
  methods: {

    changeQuote() {
      this.author = 'Juan Pablo'

      this.capitalize()
    },

    capitalize() {
      this.quote = this.quote.toUpperCase()
    }

  },

  // -- Esto es para el composition API --
  // setup() {}

  
})

app.mount( '#myApp' )

/*

Esepciones dentos de las delacciones de Vue

 * Esto no es permitido, los if, while, for
<p> {{ if( true ){ return 'Activo' } }} </p>

 * Pero las operaciones ternarias si
<p> {{ true ? 'Activo' : 'Inactivo' }} </p>


*/