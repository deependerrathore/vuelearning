new Vue({
    el: "#notebook",
    data(){
        return {
            content: "This is the conent",
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
            console.log('Saving note: ' ,val );
            localStorage.setItem('content',val);
            this.reportOperation('Saving');
        },
        reportOperation(optName){
            console.log('The ' , optName, ' operation completed!');
        }
    },
})