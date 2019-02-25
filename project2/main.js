window.addEventListener('resize',()=>{
    state.worldRatio = getWorldRatio();
})
new Vue({
    name:"game",
    el:"#app",
    template:`<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <card :def="testCard" @click.native="handlePlay"/>
    </div>`,
    data:state,
    computed:{
        testCard(){
            return cards.archers
        },
    },
    methods: {
        handlePlay(){
            console.log('you played a card!');
        }
    },
    mounted(){
        console.log(this.$data === state);
        console.log(this.worldRatio)
        console.log(state.worldRatio)
        console.log(this.$data.worldRatio)
    }
})
