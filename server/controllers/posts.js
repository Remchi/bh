const mongoose = require('mongoose')
const Post = require("../models/post")
const User = require('../models/user')

module.exports = {
    //create a post
    createPost: async(req, res, next)=>{
        const userId = req.value.body.userId;
        const title = req.value.body.title;
        const description = req.value.body.description;
        const license = req.value.body.license;
        const certifications = req.value.body.certifications;
        const postImage = req.file.path,


        try{

            const userExists = await User.findById(userId);

            if(!userExists){
                return res.status(404).json({
                    message:"You cannot create a post unless you are user"
                });
            }

            const newPost = new Post({
                _id: mongoose.Types.ObjectId(),
                userId,
                title,
                description,
                license,
                certifications,
                postImage
            });

            await newPost.save();

            res.status(201).json({
                message: "You have created a post",

                createdPost:{
                    Title: newPost.title,
                    Description: newPost.description,
                    License: newPost.license,
                    Certification: newPost.certifications,
                    Image: newPost.postImage
                },

                request:{
                    type: "GET",
                    url: 'http://localhost:3000/posts/'+newPost._id
                }

            })
            

        }catch(error){
            res.status(500).json({
                message: "There has been an error saving your post",
                error
            });
        }
    },

    //read single post
    readPostById: async(req, res, next)=>{
        postId = req.params.postId;
        try{            
            const post = await Post.findById(postId);

            res.status(200).json({
                message: "Here is the post you requested",
                post,
                request: {
                    message: "To see all the posts, click the link below",
                    type: "GET",
                    url: 'http://localhost:3000/posts'
                }
            })
        }catch(error){
            res.status(500).json({
                message: "There has been an error in your request",
                error
            })
        }
    },

    //read all the posts
    readPosts: async(req, res, next)=>{
        
        try{            
            const allPosts = await Post.find({}).populate("user", "name");

            //check if allProduct is null
            if(allPosts <1){
                return res.status(404).json({
                    message: "No posts at this moment"
                })
            }

            res.status(200).json({
                count: allPosts.length,
                posts: allPosts.map(post=>{
                    return{
                        _id: post._id,
                        Name: post.name,
                        Title: post.title,
                        Description: post.description,
                        License: post.license,
                        Certifications: post.certifications,
                        Image: post.postImage,
                        request: {
                            type: "GET",
                            message: "To see more about the post, click on this link",
                            url: 'http://localhost:3000/posts/'+post._id
                        }
                    }
                })
            });

        }catch(error){
            res.status(500).json({
                message:"There has been an error fetching the data",
                error
            });
        }
    },

    //update a post
    updatePost: async(req, res, next)=>{
        postId = req.params.postId;

        try{
            const post  = await findByIdAndUpdate(postId, req.value.body,{new: true});

            //console.log and check if post has a property of ok
            console.log("Check and see if post has a property of ok", post.ok);
            res.status(200).json({
                request:{
                    message:  "To see your updated post, click link below",
                    type: "GET",
                    link: "http://localhost:3000"+postId
                }
            })

        }catch(error){
            
        }
    },

    //delete a post
    deletePost: async(req, res, next)=>{
        const postId = req.params.postId;

        try{
            const result = await Post.remove({_id: postId });

            if(result.ok){
                res.status(200).json({
                    message: "The post has been removed",
                    request:{
                        message: "Use the url link below to create a new post",
                        type: "POST",
                        link: "http://localhost:3000/post"
                    }
                })
            }

        }catch(error){
            res.status(500).json({
                message: "There has been an error deleting your post",
                error
            });
        }
    }
}