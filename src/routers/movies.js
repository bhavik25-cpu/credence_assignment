const express = require("express");
const router = new express.Router();

require('../db/conn');
const movie_details = require("../models/movies_details");


// insert a new movie details using async/await
router.post("/movies_details", async (req, res) => {
    try{
        const movie = new movie_details(req.body);
        const createMovie = await movie.save();
        res.status(201).send(createMovie);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// fetch all movies deatils from the collection using async/await
router.get("/movies_details", async (req, res) => {
    try{
        const moviesData = await movie_details.find();
        res.send(moviesData);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// fetch the student by it's id 
router.get("/movies_details/:id", async (req, res) => {
    try{
        const _id =req.params.id;
        const moviesData = await movie_details.findById({_id}); // using object destructuring

        if(!moviesData){
            res.status(404).send();
        }
        else{
            res.send(moviesData);
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

// update the movie details by it's id 
router.patch("/movies_details/:id", async (req, res) => {
    try{
        const _id =req.params.id;
        const updateData = await movie_details.findByIdAndUpdate(
            _id, 
            req.body, 
            {
                useFindAndModify: false,
                new: true
            }
        ); 
        
        res.send(updateData);
    }
    catch(err){
        res.status(500).send(err);
    }
})

// delete the movie by it's id 
router.delete("/movies_details/:id", async (req, res) => {
    try{
        const _id =req.params.id;
        const deleteData = await movie_details.findByIdAndDelete(_id); 
        
        if(!_id){
            res.status(404).send();
        }
        else{
            res.send(deleteData);
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;