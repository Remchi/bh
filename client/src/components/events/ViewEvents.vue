<template>
    
</template>

<script>
export default {
    data(){
        return{

        }
    },

    created(){
        
        this.$store.dispatch("getEvents")
    
    },
    
}
</script>

<style>

</style>