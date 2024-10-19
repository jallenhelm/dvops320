import React from "react";
import { Link } from "react-router-dom";

const ChallengeHero = () => {
    return (
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="col-lg-6 px-0">
          <h1 class="display-4 fst-italic">
            Today's Challenge Prompt
          </h1>
          <p class="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p class="lead mb-0">
            <Link to="/challenge" class="text-body-emphasis fw-bold">
              Challenge...
            </Link>
          </p>
        </div>
      </div>
    );
}

export default ChallengeHero;