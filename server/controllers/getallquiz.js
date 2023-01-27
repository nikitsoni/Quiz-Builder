import express from 'express';
import Quiz from '../models/Quiz.js'


export const getallquiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find({})
        res.status(200).json(quizzes)
    } catch (error) {
        res.status(404).json({error})
    }
}

export const getquiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById({_id: req.params.id})
        res.status(200).json(quiz)
    } catch (error) {
        res.status(404).json(error)
    }
}