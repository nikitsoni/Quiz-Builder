import express from 'express';
import Quiz from '../models/Quiz.js';
import User from '../models/User.js';

export const createQuiz = async (req, res) => {

    try {
        const {userId, title, questions} = req.body;

        const newQuiz = new Quiz({
            userId, title, questions
        });
        
        const savedquiz = await newQuiz.save()
        res.status(201).json(savedquiz)

    } catch (error) {
        res.status(500).json({error});
    }
}

export const getUserQuiz = async (req, res) =>{

    try {
        const quizzes = await Quiz.find({userId : req.params.id})
        res.status(201).json(quizzes)
        
    } catch (error) {
        res.status(500).json({err: error.message})
    }
}

export const deleteQuiz = async (req, res) => {
    
    try{
        const deletedQuiz = await Quiz.remove({_id: req.params.quizId})
        res.status(200).json(deletedQuiz)

    } catch (error) {
        res.status(404).json(error)
    }
}