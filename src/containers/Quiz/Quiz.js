import React, {Component} from 'react';
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        isFinished: true,
        answerState: null,
        quiz: [
            {
                question: "What color is a sky?",
                correctAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id:4},
                ]
            },
            {
                question: "In which year Saint-Petersburg was founded?",
                correctAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id:4},
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.correctAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                }else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions</h1>

                    {
                        this.state.isFinished
                         ? <FinishedQuiz />
                         :  
                        <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        questionNumber={this.state.activeQuestion + 1}
                        answerState={this.state.answerState}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;