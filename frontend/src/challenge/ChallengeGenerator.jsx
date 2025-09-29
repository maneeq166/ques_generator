import React, { useState, useEffect } from "react";
import MCQchallenge from "./MCQchallenge";

function ChallengeGenerator() {
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [error, setError] = useState();
  const [quota, setQuota] = useState();

  const fetchQuota = async () => {};

  const generateChallenge = async () => {};

  const getNextResetTime = async () => {};

  return (
    <div className="challenge-container">
      <h2>Coding Challenge Generator</h2>

      <div className="quote-display">
        <p>Challenges remaining today :{quota?.quota_remaining || 0}</p>
        {quota?.quota_remaining === 0 && <p>Next Reset: {0}</p>}
      </div>
      <div className="difficulty-selector">
        <label htmlFor="difficulty">Select Difficulty</label>
        <select
          name=""
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          disabled={loading}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button onClick={generateChallenge}
      disabled={loading ||quota?.quota_remaining===0}
      className="generate-button">{loading?"Generating...":"Generate Challenge"}</button>

      {error && <div className="error-message"><p>Error:{error}</p></div>}


      {challenge && <MCQchallenge challenge={challenge}/>}
    </div>
  );
}

export default ChallengeGenerator;
