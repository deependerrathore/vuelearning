<<template>
    <div>
        <p>
            {{message}}
            <input type="text" v-model="message"/>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello World!",
        }
    },
}
</script>
<style>
    p{
        color: grey;
    }
</style>
