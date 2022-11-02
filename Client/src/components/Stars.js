import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  // const tempStars = Array.from({ lenght: 5 });

  const tempStars = new Array(0, 1, 2, 3, 4);

  return (
    <Wrapper>
      <div className="stars">
        {tempStars.map((index) => {
          const number = index + 0.5;
          return (
            <span key={index}>
              {stars >= index + 1 ? (
                <BsStarFill />
              ) : stars >= number ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </span>
          );
        })}
      </div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;

// , (_, index) => {
//     const number = index + 0.5;
//     return (
//       <span key={index}>
//         {stars >= index + 1 ? (
//           <BsStarFill />
//         ) : stars >= number ? (
//           <BsStarHalf />
//         ) : (
//           <BsStar />
//         )}
//       </span>
//     );
//   }
