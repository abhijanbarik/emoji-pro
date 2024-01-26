import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}s</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
