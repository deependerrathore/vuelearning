<template>
    <main>
        <h1  class="display-2">Frequently Asked Questions</h1>
        <v-alert icon="warning" dismissible :value="true" type="error" v-if="error">
            Can't found the data you are looking for!
        </v-alert>
        <Loading v-if="loading"/>
        <FAQItem :questions="questions"></FAQItem>
    </main>
</template>

<script>
import FAQItem from './FAQItem.vue';
import Loading from './Loading.vue';
export default {
    data(){
        return {
            questions: [],
            error: null,
            loading: true,
        }
    },
    components:{
        FAQItem,
        Loading
    },
    created(){
        this.loading= true;
        fetch('http://localhost:3000/questions')
        .then(response =>{
            
            if(response.ok){
                return response.json()
            }else{
                return Promise.reject('error')
            }
        }).then(result=>{
            this.questions = result
            this.loading= false;

        }).catch(e=>{
            this.error = e
            this.loading= false;

        })
    }
}
</script>