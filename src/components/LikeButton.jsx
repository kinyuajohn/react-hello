import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setLiked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? (
          <React.Fragment>
            <span role="img" aria-label="Heart">
              ❤️
            </span>{" "}
            Liked
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span role="img" aria-label="Heart">
              🤍
            </span>{" "}
            Like
          </React.Fragment>
        )}
      </button>
      <span>{count} Likes</span>
    </div>
  );
};

export default LikeButton;
