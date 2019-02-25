window.addEventListener('resize',()=>{
    state.worldRatio = getWorldRatio();
})
new Vue({
    name:"game",
    el:"#app",
    template:`<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
    </div>`,
    data:state,
    mounted(){
        console.log(this.$data === state);
        console.log(this.worldRatio)
        console.log(state.worldRatio)
        console.log(this.$data.worldRatio)
    }
})
