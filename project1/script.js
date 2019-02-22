new Vue({
    el: "#notebook",
    data(){
        return {
            content: localStorage.getItem('content') || 'You can write in **markdown**',
            notes: []
        }
    },
    computed: {
        notePreview(){
            return marked(this.content);
        },
        addButtonTitle(){
            return this.notes.length + ' note(s) already exists'
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
        },
        addNote(){
            const time = Date.now();
            const note = {
                id:String(time),
                title: 'New Note ' + (this.notes.length + 1),
                content: '**Hi** This notebook is using [github marked.js](https://markedjs.org)',
                created: time,
                favorite : false
            }
            this.notes.push(note);
        }
    }
})

