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
})