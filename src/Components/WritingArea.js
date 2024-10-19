import React from "react";
import "../App.css";

const WritingArea = () => {
    return (
      <div class="container">
        <label for="promptWritingArea" class="form-label"></label>

        <textarea
          class="form-control border-0 shadow-sm"
          id="promptWritingArea"
          rows="6"
        ></textarea>
        <div className="mt-2 col text-end">
            <button className="btn btn-primary">Submit</button>
        </div>
        
      </div>
    );
}

export default WritingArea;