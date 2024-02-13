import React, { useState } from "react";
import useDocumenTitle from "../hooks/useDocumentTitle";

const AboutPage = () => {
    useDocumenTitle("About");

    const [score, setScore] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const inputValue = parseInt(event.target.userScore.value); // Get input value
        
        try {
            const response = await fetch('http://localhost:3002/api/calculate-score', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ score: inputValue })
            });

            const data = await response.json();
            setScore(data.result);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1 data-testid="about-text">Use this website for your testing purposes! If you come accross any issues please contact me :)</h1>
            <br />

            <div>
                <form className="border-solid border-2 border-gray-700 rounded-lg p-4" onSubmit={handleSubmit}>
                    test input field for BVA:
                    <input name="userScore" type="number" data-testid="user-score-input">
                    </input>

                    <button className="btn btn-green mx-5" data-testid="submit-user-score">Submit</button>
                </form>


                {score && <div>Your score: <div data-testid="result-score">{score}</div></div> }

            </div>
        </div>
    );
};

export default AboutPage;