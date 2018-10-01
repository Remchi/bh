import axios from 'axios'

const state = {
    
    test:[]
}

const getters = {
    
    getTest: state=>state.test
}

const mutations = {
    
    GET_TEST: (state, payload)=>state.test = payload,
}

const actions = {
    async fetchTest(context, payload){
        try{
            const response = axios.get("/questions/"+num, {
                data:payload
            });

            context.commit("GET_TEST", response.data);

        }catch(error){
            res.status(404).json({
                message: "There has been error fetching the test",
                error
            });
        }        
    }
}

export default{
    state, getters, mutations, actions
}