import React from 'react';
import WritingArea from '../Components/WritingArea';
import ChallengeDisplay from '../Components/ChallengeDisplay';
import SubmissionList from '../Components/SubmissionList';


function ChallengePage() {

  return (
    <div className="ChallengePage">
      <ChallengeDisplay />
      <WritingArea />
      <SubmissionList />
    </div>
    
  );
}

export default ChallengePage;
