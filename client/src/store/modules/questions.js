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
            alert(error)
        }        
    }
}

export default{
    state, getters, mutations, actions
}