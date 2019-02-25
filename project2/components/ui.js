Vue.component('top-bar',{
    props:['players','currentPlayerIndex','turn'],
    created(){
        console.log(this.players[0].name)
    }
})