export default function(resources){
    return{
        data(){
            let initData = {
                remoteDataLoading: 0,
            }
            //initializing the data property
            for(const key in resources){
                initData[key] = null
            }
            
            return initData;
        },
        methods: {
            async fetchResource(key,url){
                this.$data.remoteDataLoading++
                try{
                    this.$data[key] = await this.$fetch(url)
                }catch(e){
                    console.error(e)
                }
                this.$data.remoteDataLoading--
            }
        },
        computed: {
            remoteDataBusy(){
                return this.$data.remoteDataLoading !== 0
            }
        },
        created() {
            for(const key in resources){
                let url = resources[key]
                this.fetchResource(key,url)
            }
        },
    }
}
