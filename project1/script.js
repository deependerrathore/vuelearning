new Vue({
    el: "#notebook",
    data(){
        return {
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            selectedID: localStorage.getItem('selected-id') || null,
        }
    },
    computed: {
        notePreview(){
            return this.selectedNote ? marked(this.selectedNote.content) : '';
        },
        addButtonTitle(){
            return this.notes.length + ' note(s) already exists'
        },
        selectedNote(){
            return this.notes.find(note => note.id === this.selectedID);
        }
    },
    watch:{
        notes:{
            handler: 'saveNotes',
            deep: true,
        },
        selectedID(val){
            localStorage.setItem('selected-id',val);
        }

    },
    methods: {
        reportOperation(optName){
            console.log('The ' , optName, ' operation completed!');
        },
        addNote(){
            const time = Date.now();
            const note = {
                id:String(time),
                title: 'New Note ' + (this.notes.length + 1),
                content: '**Hi** This notebook is using [marked.js](https://markedjs.org)',
                created: time,
                favorite : false
            }
            this.notes.push(note);
        },
        selectNote(note){
            this.selectedID = note.id;
        },
        saveNotes(){
            localStorage.setItem('notes',JSON.stringify(this.notes));
            console.log('Notes saved: ' ,new Date());
        },
        removeNote(){
            if(this.selectedNote && confirm("Are you sure?")){
                const index = this.notes.indexOf(this.selectedNote);
                if(index !== -1){
                    this.notes.splice(index,1)
                }
            }
        },
        favoriteNote(){
            this.selectedNote.favorite = !this.selectedNote.favorite;
        }
    }
})

