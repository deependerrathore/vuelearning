<template>
    <main>
        <h1  class="display-2">Frequently Asked Questions</h1>
        <v-alert icon="warning" dismissible :value="true" type="error" v-if="hasRemoteErrors">
            Can't found the data you are looking for!
        </v-alert>
        <Loading v-if="remoteDataBusy"/>
        <FAQItem :questions="questionList"></FAQItem>
    </main>
</template>

<script>
import FAQItem from './FAQItem.vue';
import Loading from './Loading.vue';

import RemoteData from '../mixins/RemoteData';

export default {
    mixins:[
        RemoteData({
            questionList: 'questions'
        }),
    ],
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
    async created(){
        this.loading = true;
        try{
            this.questions = await this.$fetch('questions');
        }catch(e){
            this.error = e;
        }
        this.loading = false;
    }
}
</script>