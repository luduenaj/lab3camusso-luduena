const app = Vue.createApp({
  data(){
    return{
      porcentaje: 0,
      reinvertir: false,
      montofinal: 0,
      montoinicial:0,
      dias:0
    }
  },
  methods: {
    pasarMontoFinal(montoPasado, porcentajePasado, montoinicialpasado, diaspasados){
      this.reinvertir = true;
      this.montofinal =  montoPasado;
      this.porcentaje = porcentajePasado;
      this.montoinicial = montoinicialpasado;
      this.dias = diaspasados;
    },
  },
  computed: {
    
  }

})
