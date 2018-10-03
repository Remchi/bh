<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kinshealth</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
 
</head>
<body>
    <!--
        #NAVBAR
    -->
    <!--since bootstrap 4 is mobile first, navbar expands to large device view after md size is reached-->
    <nav class="navbar navbar-expand-md navbar-primary bg-primary fixed-top">

         <!--Best practice is to add brand logo outside the ul element-->
         <a href="#" class="navbar-brand"><i class="fas fa-stethoscope text-light fa-2x"></i></a>
         
         <button type="button" class="navbar-toggler bg-dark" data-toggle="collapse" data-target="#nav"><span class="navbar-toggler-icon"></span></button>

        <!--div below is to control navbar in small screen-->
        <div class="collapse navbar-collapse justify-content-between" id="nav">
       
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Jobs</a></li>            
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Candidates</a></li>
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Events</a></li>
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Contact Us</a></li>

        </ul>
    </nav>

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


   
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>
    
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
