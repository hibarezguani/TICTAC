exports.id = "component---src-pages-game-js";
exports.ids = ["component---src-pages-game-js"];
exports.modules = {

/***/ "./src/components/TicTacToe.js":
/*!*************************************!*\
  !*** ./src/components/TicTacToe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TicTacToe = () => {
  const {
    0: board,
    1: setBoard
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array(9).fill(''));
  const {
    0: currentPlayer,
    1: setCurrentPlayer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('X');
  const {
    0: winner,
    1: setWinner
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: gameOver,
    1: setGameOver
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: vsComputer,
    1: setVsComputer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const checkWinner = () => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const isBoardFull = () => {
    return board.every(cell => cell !== '');
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const winnerPlayer = checkWinner();
    if (winnerPlayer) {
      setWinner(winnerPlayer);
      setGameOver(true);
    } else if (isBoardFull()) {
      setWinner('Draw');
      setGameOver(true);
    } else if (vsComputer && currentPlayer === 'O') {
      // If playing against the computer and it's computer's turn ('O')
      const emptyCells = board.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
      }, []);
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      handleCellClick(randomIndex);
    }
  }, [board, gameOver, currentPlayer, vsComputer]);
  const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => {
    if (gameOver || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }, [board, currentPlayer, gameOver]);
  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
    setGameOver(false);
  };
  const getWinnerMessage = () => {
    if (winner) {
      if (winner === 'Draw') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          className: "text-2xl font-bold"
        }, "It's a Draw!");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          className: "text-2xl font-bold"
        }, "Winner is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: winner === 'X' ? 'text-blue-500' : 'text-red-500'
        }, winner), "!");
      }
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-2xl font-bold"
      }, currentPlayer === 'X' ? "X's turn" : "O's turn");
    }
  };
  const getCellClassName = index => {
    if (winner && winningPositions.some(pos => pos.includes(index))) {
      const isWinningCell = winningPositions.some(pos => pos.includes(index) && pos.every(i => board[i] === board[index]));
      return `w-16 h-16 border border-gray-300 flex items-center justify-center text-4xl focus:outline-none ${board[index] === 'X' ? 'text-blue-500' : 'text-red-500'} ${isWinningCell ? 'bg-green-200' : ''}`;
    }
    return `w-16 h-16 border border-gray-300 flex items-center justify-center text-4xl focus:outline-none ${board[index] === 'X' ? 'text-blue-500' : 'text-red-500'}`;
  };
  const renderCell = index => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: index,
      onClick: () => handleCellClick(index),
      className: getCellClassName(index),
      disabled: gameOver || board[index] !== ''
    }, board[index]);
  };
  const toggleVsComputer = () => {
    setVsComputer(!vsComputer);
    resetGame();
  };
  const toggleVsHuman = () => {
    setVsComputer(false);
    resetGame();
  };
  const rows = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(renderCell(index));
    }
    rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "flex"
    }, row));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center justify-center h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleVsHuman,
    className: `px-4 py-2 mr-4 bg-blue-500 text-white font-semibold rounded-md focus:outline-none ${!vsComputer ? 'bg-gray-600' : ''}`
  }, "Play against Human"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleVsComputer,
    className: `px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none ${vsComputer ? 'bg-gray-600' : ''}`
  }, "Play against Computer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center"
  }, rows), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, getWinnerMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: resetGame,
    className: "px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none"
  }, "Restart"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicTacToe);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "flex justify-between items-center py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about"
  }, "\xC0 propos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/game"
  }, "Jouer au Tic Tac Toe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/signin",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  }, "Se connecter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/signup",
    className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  }, "S'inscrire")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/pages/game.js?export=default":
/*!******************************************!*\
  !*** ./src/pages/game.js?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TicTacToe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TicTacToe */ "./src/components/TicTacToe.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");




const TicTacToePage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Jouer au Tic Tac Toe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TicTacToe__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicTacToePage);

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-game-js.js.map