<template>
    <section class="py-5 mt-5 bg-light">
        <div class="container-fluid">
            <div class="row justify-content-center p-3">
                <div class="col-md-8 col-sm-10">
                <div class="card lead">
                    <div class="card-body">
                        <h4 class="card-title py-3"><strong>Respite care for family caregivers</strong></h4>
                        <h5 class="card-subtitle py-1"><strong>Target Audience: </strong><span class="text-muted">  General public </span></h5>
                        <h5 class="card-subtitle py-1"><strong>Time and Date: </strong><span class="text-muted">November 12, 2018 at 4:00 p.m.</span> </h5>
                        <h5 class="card-subtitle py-1"><strong>Location: </strong><span class="text-muted">Kent</span> </h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, 
                            nesciunt fugit harum illo voluptate perspiciatis beatae necessitatibus animi iusto possimus, 
                            sapiente doloribus libero quis repellat ut id magnam saepe praesentium quam. Optio qui 
                            excepturi ipsam? Dolor nam id, odio, accusamus dolores minus et fuga totam eos vitae quis 
                            ratione. Nihil nobis ratione laborum debitis et, autem impedit aut. Libero, quis dolorum. 
                            Molestiae sed iusto a sunt placeat, quaerat, rerum doloribus accusantium, debitis ab tempora? 
                            Facere similique blanditiis harum aperiam ad soluta necessitatibus nemo temporibus, 
                            eos eum deserunt amet nobis explicabo nesciunt nam quae. Facere nam, rem deleniti sunt 
                            voluptatum dolorem accusantium magni quo porro minus qui in aperiam deserunt, harum eos 
                            nihil! Hic deleniti modi, asperiores corrupti ullam ducimus ut laboriosam repellat molestiae 
                            laborum quisquam cupiditate obcaecati earum iusto. Facere totam, ullam eos nemo iste doloribus
                                in eaque itaque. Quia nostrum libero esse hic vel cumque architecto sunt voluptatum! Commodi 
                                ipsum quae beatae impedit ab aspernatur optio, voluptatem quia dolor molestias? Labore nihil 
                                doloribus distinctio saepe fugit ducimus eum ad iste dolor ipsam quos beatae, placeat quae rerum 
                                id ab recusandae quas omnis harum vel nisi. Officiis, quam  dicta tenetur neque, , vitae illum vel?
                        </p>
                        <!-- <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>-->
                        
                        <div class="row justify-content-between m-3">
                            <button class="btn btn-secondary  col-md-3 col-sm-10" type="submit">Edit</button>
                            <button class="btn btn-primary  col-md-3 col-sm-10" type="submit">Post</button>
                        </div>

                        <div class="py-2 text-right">                    
                            <p class="px-3"><strong>Share on: </strong></p>
                            <a href="#"><i class="far fa-envelope fa-2x text-secondary mx-3"></i></a>
                            <a href="#"><i class="fab fa-facebook fa-2x text-primary mx-3"></i></a>
                            <a href="#"><i class="fab fa-meetup fa-2x text-danger mx-3"></i></a>                               
                        </div>
                    
                    </div>
                </div>                
            </div>
        </div>
        </div>
        
    </section>    
</template>

<script>
import {store} from "../../store/store.js"
import {mapGetters} from 'vuex'
export default {
    computed:{
        
        ...mapGetters([
            "getPreviewEvent"
        ]) 
     
    }
    
}
</script>

<style>

</style>