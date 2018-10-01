<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Question should go here</th>
                       
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" v-bind:key="item['.key']">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{option.size}}</td>
                        <td>{{option.price | currency}}</td>
                        <td><button class="btn btn-sm btn-outline-success"
                             v-on:click="addToBasket(item, option)" type="button">+</button></td>
                    </tr>
                </tbody>
    </div>
</div>

    
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
