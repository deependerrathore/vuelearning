new Vue({
    el: "#notebook",
    data(){
        return {
            content: localStorage.getItem('content') || 'You can write in **markdown**',
        }
    },
    computed: {
        notePreview(){
            return marked(this.content);
        }
    },
    watch: {
        //watching content changes
        content:'saveNote'
    },
    methods: {
        saveNote(val){
            console.log('Saving note: ' ,this.content );
            localStorage.setItem('content',this.content);
            this.reportOperation('Saving');
        },
        reportOperation(optName){
            console.log('The ' , optName, ' operation completed!');
        }
    }
})

