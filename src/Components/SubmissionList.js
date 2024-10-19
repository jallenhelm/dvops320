import React from "react";
import Submision from "./Submission";

const renderSubmissions = () => {
  const submissions = Array.from({ length: 10 });

  return submissions.map((_, index) => (
    <Submision key={index} />
  ));
};

const SubmissionList = () => {
    return (
      <div className="container mt-3 border-top">
        <ul className="list-group list-group-flush">
            {renderSubmissions()}
        </ul>
      </div>
        
    );
}

export default SubmissionList;