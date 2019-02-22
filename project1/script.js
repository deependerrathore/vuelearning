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
        content:{
            handler:'saveNote'
        },
    },
    methods: {
        saveNote(val){
            console.log('Saving : ' ,val );
            localStorage.setItem('content',val);
        }
    },
})