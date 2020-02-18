import React from "react";
// import styled from "styled-components";
import MovieList from "./components/MovieList";
// const Button = styled.button`
//   background-color: ${props =>
//     props.type === "warning"
//       ? "yellow"
//       : props.type === "danger"
//       ? "red"
//       : "#9bb8d5"};
//   border: none;
//   color: white;
//   border-radius: 2px;
//   ${props => (props.large ? "width: 300px" : "")}
// `;

// const Cond = () => {
//   if (false) {
//     return <p>TRUE</p>;
//   } else {
//     return <p>FALSE</p>;
//   }
// };

function App() {
  return (
    <div className="App">
      {/* <ul>
        {numbers.map((number, i) => (
          <li key={i}>{number}</li>
        ))}
      </ul> */}
      <MovieList />
      {/* {Cond()} */}
    </div>
  );
}

export default App;
