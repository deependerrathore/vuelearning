window.addEventListener('resize',()=>{
    state.worldRatio = getWorldRatio();
})
new Vue({
    name:"game",
    el:"#app",
    template:`<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <transition name="hand">
            <hand v-if="!activeOverlay" :cards="testHand" @card-play="handlePlay" />
        </transition>
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
        },
        createTestHand(){
            const cards = [];
            //get the possible ids
            
            const ids = Object.keys(cards);
            //Draw 5 cards
            for(let i=0;i<5;i++){
                cards.push(this.testDrawCard());
            }

            return cards;
        },
        testDrawCard(){
            //choose a card at random
            const ids = Object.keys(cards)
            const randomId = ids[Math.floor(Math.random() * ids.length)]
            //Return a new card with this definition
            return {
                //Unique id for the card
                uid: cardUid++,
                // Id of the definition
                id: randomId,
                //Definition object
                def: cards[randomId]
            }
        }
    },
    mounted(){
        console.log(this.$data === state);
        console.log(this.worldRatio)
        console.log(state.worldRatio)
        console.log(this.$data.worldRatio)
    },
    created(){
        this.testHand = this.createTestHand();
    }
})
