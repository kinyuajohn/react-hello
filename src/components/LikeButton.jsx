import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    setCount(count + 1);
  };

  const handleUnlikeClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>
        <span role="img" aria-label="Heart">
          ❤️
        </span>{" "}
        Like
      </button>
      <span> {count} Likes</span>
      <button onClick={handleUnlikeClick}>
        <span role="img" aria-label="Heart">
          💔
        </span>{" "}
        Unlike
      </button>
    </div>
  );
};

export default LikeButton;
