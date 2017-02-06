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
          mark: 'X'
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

  updatePlayerImage() {

  }

  checkForWinner() {
    return false;
  }

  makeComputerSelection() {
    const timeoutLength = Math.floor(Math.random() * 5) + 2;
    
    setTimeout(() => {
      this.setState((prevState, props) => {
        
        // get available squares
        let availableSquares = [];
        let squareKeys = Object.keys(prevState.board);

        for (let i = 0; i < 8; i++) {
          if (prevState.board[squareKeys[i]].mark === '') {
            availableSquares.push(squareKeys[i]);
          }
        }

        console.log('available squares', availableSquares);

        // randomly select a square
        const computerMoveIndex = Math.floor(Math.random() * availableSquares.length);

        console.log('computer move', availableSquares[computerMoveIndex]);
        
        // update board with computer selection
        prevState.board[availableSquares[computerMoveIndex]].mark = 'O';
        prevState.turn.player = 'user';
        return prevState;

      }, () => {
        if (this.checkForWinner()) {

        } else {

        }
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
        this.makeComputerSelection();
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