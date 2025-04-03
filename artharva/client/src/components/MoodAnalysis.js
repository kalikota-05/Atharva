import React, { useState } from 'react';
import { analyzeMood } from '../services/moodAnalysis';

const MoodAnalysis = () => {
  const [moodData, setMoodData] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    const result = await analyzeMood({ mood: moodData });
    setAnalysisResult(result.data);
  };

  return (
    <div>
      <h2>Mood Analysis</h2>
      <input
        type="text"
        value={moodData}
        onChange={(e) => setMoodData(e.target.value)}
        placeholder="Enter your mood"
      />
      <button onClick={handleAnalyze}>Analyze Mood</button>
      {analysisResult && <div>{analysisResult.message}</div>}
    </div>
  );
};

export default MoodAnalysis;