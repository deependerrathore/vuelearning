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
        content(newVal , oldVal){
            console.log('new Note: ' ,newVal, 'old Note' , oldVal)
            localStorage.setItem('content',newVal);
        },
    },
})