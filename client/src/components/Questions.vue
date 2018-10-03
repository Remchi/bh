<template>
<!--
        # QUESTIONS PAGE
    -->
    <section>
        <div class="container-fluid p-5 mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">An angry client curses loudly at the nurse aide. It would be BEST for the nurse aide to:</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                            
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                                        
                                        put the client to bed immediately
                                        
                                    </div>
                                </td>                                
                            </tr>
                            <tr>                                
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                        
                                        curse back at the client
                                        
                                    </div>
                                </td>                                
                            </tr>  
                            <tr>                                
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                        
                                        ask the client what is bothering him or her
                                        
                                    </div>
                                </td>                                
                            </tr> 
                            
                            <tr>                                
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                        
                                        restrain the client in case he or she becomes violent
                                        
                                    </div>
                                </td>                                
                            </tr>
                        </tbody>
                    </table>

                    <div class="row mb-3">
                        <p class="text-danger">
                            Restraints should never be used on a client (unless it's a physician order) and cursing back at the client is verbal abuse.  Putting the client to bed immediately is restricting his movement and that is also restraint especially since the client did not express that he wants to go to bed.  If a client is angry and cursing out loudly, you as the nurse aide should find out what is bothering him or her.
                        </p>
                    </div>  

                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>                         
                </div>
            </div>
        </div>
    </section>

    
</template>
<script>

import {mapGetters} from "vuex"
export default {
    name:'questions',
    data(){
        return{
            score: 0,
            num: 10,
            userAnswers = []
        }
    },

    computed:{
        ...mapGetters([
            "getTest",
        ]),

        paginate(){
            if(this.num>10){
               // let allQuestions = this.getTest.length;
                let questionArray = [];
                let pageArray = [];
                let pageNum = 1;

                for(question of this.getTest){
                    pageArray.unshift(question);

                    if(pageArray.length%10===0){
                        questionArray[pageNum-1]= pageArray;
                        pageNum++;
                    }
                }
            }

            return questionArray;
        }

       
    },    

    created(){
        this.$store.dispatch("fetchTest")
    },

    methods:{
        addUserAnswers(choice){

        },
         score(){
            //const {userAnswers}= req.value.body;
            //const answers = [0, 3, 3];

            for(let index = 0; index < userAnswers.length; index++){
                (answers[index]===userAnswers[index])? score++: score;
                console.log(score);   
            }   
        }
    }
}
</script>
