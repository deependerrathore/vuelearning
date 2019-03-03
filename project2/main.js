window.addEventListener('resize',()=>{
    state.worldRatio = getWorldRatio();
});

new Vue({
    name:"game",
    el:"#app",
    template:`<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <transition name="hand">
        <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
        </transition>
        <transition name="fade">
        <div class="overlay-background" v-if="activeOverlay" />
        </transition>
        <transition name="zoom">
            <overlay v-if="activeOverlay" :key="activeOverlay">
            <component :is="'overlay-content-' + activeOverlay"
            :player="currentPlayer" :opponent="currentOpponent"
            :players="players" />
            </overlay>
        </transition>
        </div>`,
        data:state,
        computed:{
        testCard(){
            return cards.archers
        },
        currentPlayer(){
            return state.players[state.currentPlayerIndex]
          },
        currentOpponentId(){
            return state.currentPlayerIndex === 0 ? 1 : 0;
          },
        currentOpponent(){
            console.log
            return state.players[this.currentOpponentId]
          }
    },
    methods: {
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
        },
        testPlayCard(card){
            //remoe the card from player hand
            const index = this.testHand.indexOf(card);
            this.testHand.splice(index,1);
        }
    },
    mounted(){
        // console.log(this.$data === state);
        // console.log(this.worldRatio)
        // console.log(state.worldRatio)
        // console.log(this.$data.worldRatio)
    },
    created(){
        this.testHand = this.createTestHand();
    }
})
