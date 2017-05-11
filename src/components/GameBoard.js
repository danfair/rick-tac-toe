import React, {Component} from 'react';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: {
        player: 'user'
      },
      board: {
        a1: {
          player: '',
          mark: ''
        },
        a2: {
          player: '',
          mark: ''
        },
        a3: {
          player: '',
          mark: ''
        },
        b1: {
          player: '',
          mark: ''
        }, 
        b2: {
          player: '',
          mark: ''
        },
        b3: {
          player: '',
          mark: ''
        }, 
        c1: {
          player: '',
          mark: ''
        },
        c2: {
          player: '',
          mark: ''
        },
        c3: {
          player: '',
          mark: ''
        }
      }
    }

    this.onPlayerSelect = this.onPlayerSelect.bind(this);
  }

  checkForWinner(board) {
    let winner = false;
    
    // check rows
    if (board.a1.mark === board.a2.mark && board.a1.mark === board.a3.mark) { winner = board.a1.mark; }
    if (board.b1.mark === board.b2.mark && board.b1.mark === board.b3.mark) { winner = board.b1.mark; }
    if (board.c1.mark === board.c2.mark && board.c1.mark === board.c3.mark) { winner = board.c1.mark; }

    // check columns
    if (board.a1.mark === board.b1.mark && board.a1.mark === board.c1.mark) { winner = board.a1.mark; }
    if (board.a2.mark === board.b2.mark && board.a2.mark === board.c2.mark) { winner = board.a2.mark; }
    if (board.a3.mark === board.b3.mark && board.a3.mark === board.c3.mark) { winner = board.a3.mark; }
    

    // check diagonals
    if (board.a1.mark === board.b2.mark && board.a1.mark === board.c3.mark) { winner = board.a1.mark; }
    if (board.a3.mark === board.b2.mark && board.a3.mark === board.c1.mark) { winner = board.a3.mark; }

    // if there's a winner, stop the game, reset board
    if (winner) {
      this.setState((prevState, props) => {
        prevState.turn.player = `Game over! ${winner} wins!`;
        return prevState;
      }, () => {
        this.resetBoard();
      });
    }

    return winner;
  }

  resetBoard() {
    this.setState((prevState, props) => {
      for (let item in prevState.board) {
        prevState.board[item].mark = '';
      }
    });
  }

  makeComputerSelection() {
    const timeoutLength = Math.floor(Math.random() * 5) + 2;
    
    setTimeout(() => {
      this.setState((prevState, props) => {
        
        // get available squares
        let availableSquares = [];
        let squareKeys = Object.keys(prevState.board);

        for (let i = 0; i < squareKeys.length; i++) {
          if (prevState.board[squareKeys[i]].mark === '') {
            availableSquares.push(squareKeys[i]);
          }
        }

        if (availableSquares) {
          // randomly select a square
          const computerMoveIndex = Math.floor(Math.random() * availableSquares.length);
          
          // update board with computer selection
          prevState.board[availableSquares[computerMoveIndex]].mark = 'O';
          prevState.turn.player = 'user';
          return prevState;
        } else {
          prevState.turn.player = 'Game over! Cat\'s game!';
        }
      }, () => {
        this.checkForWinner(this.state.board);
      });
    }, timeoutLength * 1000);
  }

  onPlayerSelect(e) {
    if (this.state.turn.player === 'user') {
      const selectedSquare = e.target.classList.value;
      this.setState((prevState, props) => {
        prevState.board[selectedSquare].mark = 'X';
        prevState.turn.player = 'computer';
        return prevState;
      }, () => {
        let winner = this.checkForWinner(this.state.board);
        if (!winner) {
          this.makeComputerSelection();
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Game Board</h2>
        <h5>Turn: {this.state.turn.player}</h5>
        <div className="game-board">
          <a className="a1" onClick={this.onPlayerSelect}>
            {this.state.board.a1.mark}
          </a>
          <a className="a2" onClick={this.onPlayerSelect}>
            {this.state.board.a2.mark}
          </a>
          <a className="a3" onClick={this.onPlayerSelect}>
            {this.state.board.a3.mark}
          </a>
          <a className="b1" onClick={this.onPlayerSelect}>
            {this.state.board.b1.mark}
          </a>
          <a className="b2" onClick={this.onPlayerSelect}>
            {this.state.board.b2.mark}
          </a>
          <a className="b3" onClick={this.onPlayerSelect}>
            {this.state.board.b3.mark}
          </a>
          <a className="c1" onClick={this.onPlayerSelect}>
            {this.state.board.c1.mark}
          </a>
          <a className="c2" onClick={this.onPlayerSelect}>
            {this.state.board.c2.mark}
          </a>
          <a className="c3" onClick={this.onPlayerSelect}>
            {this.state.board.c3.mark}
          </a>
        </div>
      </div>
    );
  }
}

export default GameBoard;