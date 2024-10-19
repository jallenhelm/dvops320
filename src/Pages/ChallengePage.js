import React, { useState } from 'react';
import WritingArea from '../Components/WritingArea';
import ChallengeDisplay from '../Components/ChallengeDisplay';
import SubmissionList from '../Components/SubmissionList';


function ChallengePage() {
    
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your response: ' + response);
  };

  return (
    <div className="ChallengePage">
      <ChallengeDisplay />
      <WritingArea />
      <SubmissionList />
    </div>
    
  );
}

export default ChallengePage;
