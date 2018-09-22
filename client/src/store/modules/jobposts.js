import axios from 'axios'

const state = {  
    posts: []   
}

const getters = {
    /*
        in the computed properties in the vue  
            - sort events by user
            - get the property length
    */
   
    getPosts: state =>state.posts,     
    numberofPOsts: state =>state.posts.length
},

const mutations = {

    POSTS:(state, payload)=>state.posts = payload,
    ADD_POST:(state, payload)=>state.posts.unshift(payload)
}

const actions = {
    async getPosts(context, payload){
        try{
            const response = await axios.get("/jobs", {
                data: payload

            });

            context.commit("POSTS", response.data);
        }catch(error){
            res.status(404).json({
                message: "There has been an error fetching all the posts",
                error
            })
        }
    },

    async addPosts(context, payload){
        try{
            const response = await axios.post('/jobs',{
                data: payload,
                headers: {'Content-Type':'application/json'}
            } );

            context.commit("ADD_POST", response.data);
        }catch(error){
            res.status(404).json({
                message: "There has been an error adding your post",
                error
            })
        }
    },

    async removePost(context, payload){
        try{
            const response = await axios.delete('/jobs/:id',{
                data: payload,
                
               // headers: {'Content-Type':'application/json'}
            } );

            context.commit("REMOVE_POST", response.data)

        }catch(error){
            res.status(404).json({
                message: "There has been an error deleting your post",
                error
            })
        }
    },

    async updateEvent(context, payload){
        try{
            const response = await axios.patch('/jobs/:id',{
                data: payload,
                headers: {'Content-Type':'application/json'}
            } );

            context.commit("UPDATE_POST", response.data)

        }catch(error){
            res.status(404).json({
                message: "There has been an error deleting your post",
                error
            })
        }
    }
}

export default{
    state, getters, mutations, actions
}