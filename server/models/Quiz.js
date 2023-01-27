import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
        min: 2
    },
    questions:{
        type: [Object],
        required: true
    }},
    {timestamps: true}
)

const Quiz = mongoose.model("Quiz", QuizSchema);
export default Quiz;
