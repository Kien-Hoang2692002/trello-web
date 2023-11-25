import Board from "~/pages/Boards/_id";

function App() {
  return (
    <>
      {/* React Router Dom /boards /id */}
      {/* Board detail */}
      <Board />
    </>
  );
}

export default App;

// <hr />
// <ModeToggle />
// <hr />
// <div>Kiên Hoàng</div>

// <Typography variant="body2" color="text.secondary">
//   h1. Heading
// </Typography>

// <Button variant="text">Text</Button>
// <Button variant="contained" color="success">
//   Contained
// </Button>
// <Button variant="outlined">Outlined</Button>

// <br />
// <AccessAlarmIcon />
// <ThreeDRotation />
// <HomeIcon />
// <HomeIcon color="primary" />
// <HomeIcon color="secondary" />
// <HomeIcon color="success" />
// <HomeIcon color="action" />
// <HomeIcon color="disabled" />
// <HomeIcon sx={{ color: pink[500] }} />

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === "light" ? "dark" : "light");
//       }}
//     >
//       {mode === "light" ? "Turn dark" : "Turn light"}
//     </Button>
//   );
// }

// Bài trên lớp thầy Lâm
// import { useState } from "react";
// import "./App.css";
// import Users from "./components/Users";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <Users />
//       <hr></hr>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = "Go to move #" + move;
//     } else {
//       description = "Go to game start";
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// import { useEffect, useState } from "react";
// import "./Users.css";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(5);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const nextPage = () => {
//     if (currentPage < Math.ceil(users.length / usersPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div>
//       <h4>Test Call Users API</h4>
//       <table className="users">
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Name</th>
//             <th>User name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone</th>
//             <th>Website</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers &&
//             currentUsers.length > 0 &&
//             currentUsers.map((item, index) => {
//               return (
//                 <tr key={item.id}>
//                   <td>{indexOfFirstUser + index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.username}</td>
//                   <td>{item.email}</td>
//                   <td>{item.address.street}</td>
//                   <td>{item.phone}</td>
//                   <td>{item.website}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div>
//         <button onClick={prevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === Math.ceil(users.length / usersPerPage)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Users;
