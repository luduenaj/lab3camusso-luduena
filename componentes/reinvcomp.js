app.component('reinvertir',{
    props:{
        montofinal:{
        type: Number,
        required: true
        },
        porcentaje:{
            type: Number,
            required: true
        },
        montoinicial:{
            type: Number,
            required:true
        },
        dias:{
            type: Number,
            required:true
        }
    },
    template:
    /*html*/
    `<br>
    <button v-on:click="btnReinvertir" id="btnReinvertir">Reinvertir</button>
    <br>
    <div v-show="mostrarGrilla" id="mostrarReinvertir">
        <div id="grid-1">Periodo</div>
        <div id="grid-2">Monto inicial</div>
        <div id="grid-3">Monto final</div>
        <div id="grid-4">{{grilla[0]}}</div>
        <div id="grid-5">{{grilla[1]}}</div>
        <div id="grid-6">{{grilla[2]}}</div>
        <div id="grid-7">{{grilla[3]}}</div>
        <div id="grid-8">{{grilla[4]}}</div>
        <div id="grid-9">{{grilla[5]}}</div>
        <div id="grid-10">{{grilla[6]}}</div>
        <div id="grid-11">{{grilla[7]}}</div>
        <div id="grid-12">{{grilla[8]}}</div>
        <div id="grid-13">{{grilla[9]}}</div>
        <div id="grid-14">{{grilla[10]}}</div>
        <div id="grid-15">{{grilla[11]}}</div>
    </div>`,
data() {
    return {
        mostrarGrilla: false,
        grilla: []
    }
},
methods: {
    btnReinvertir(){
        this.mostrarGrilla = true;
        let periodo = 1;
        let montoi =  this.montoinicial;
        let montof = this.montofinal;
        let dias2 = this.dias;
        let porcentaje= this.porcentaje;
        for(let i=1; i<=12;i++){
            if(i===1||i===4||i===7 ||i===10 ||i===13){
                this.grilla.push('Periodo '+periodo);
                periodo++;
                
            }else if(i === 2||i === 5||i===8||i=== 11||i===14){
                this.grilla.push('$'+montoi.toFixed(2));
                montoi = montof;
            }else{
                this.grilla.push('$'+montof.toFixed(2))
                montof = montof+(montof*(dias2/360)*(porcentaje/100));
            }
            
        }
    }
    
},
computed: {

}
})