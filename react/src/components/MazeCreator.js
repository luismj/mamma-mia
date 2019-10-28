import React, {Component} from 'react';
import Maze from './Maze';
import Configuration from './Configuration';
import superagent from 'superagent';

class MazeCreator extends Component {
  constructor(props) {
      super(props);
      this.state = {
          width: 5,
          height: 5,
          impassables: 1,
          valid: false,
          validationStatus: []
      };
  }

  handleDimensions = (field,number) => {
    this.setState({ [field]: parseInt(number) });
  }

  handleMazeValidation = (cells,impassableTypes) => {
    superagent.post('http://localhost:9000/v1.0/maze')
      .set('Content-Type','application/json')
      .send(JSON.stringify({"cells": cells, "impassableTypes": impassableTypes}))
      .end((error,response) => {
        if (error) this.setState( {valid: false, validationStatus: response.body })
        else this.setState( {valid: true, validationStatus: ['Laberinto válido'] })
      });
  }

  render () {
    let validationResults = this.state.validationStatus.map(
      (result) => ( <div>
                      <li>{result}</li>
                    </div> ));

    return (
        <div>
            <Configuration onDimensionChange={this.handleDimensions}/>
            <Maze width={this.state.width} height={this.state.height} impassables={this.state.impassables} validMaze={this.state.valid} onChange={this.handleMazeValidation}/>
            <h3>Resultado de la validacion: </h3>
            {validationResults}
        </div>
    );
  }
}

export default MazeCreator;
