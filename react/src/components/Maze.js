import React from 'react';
import Cell from './Cell';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import superagent from 'superagent';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    },
});

class Maze extends React.Component {
    constructor(props) {
        super(props);
        let cells = initMaze(this.props.width, this.props.height, this.props.impassables);
        let impassableTypes = initImpassables(this.props.impassables);

        this.state = {
            cells : cells,
            impassableTypes : impassableTypes,
            mazeName: 'Mi Laberinto',
            mazeDescription: 'Agregar descripción',
            validMaze: this.props.validMaze,
            savedMazeMessage: '',
            openSnackbar: false
        };
    }

    static getDerivedStateFromProps(props,state) {
        if(props.width!==state.cells.length || props.height!==state.cells[0].length || props.impassables!==state.impassableTypes.length){
            let impassableTypes = initImpassables(props.impassables);
            let cells = initMaze(props.width, props.height,props.impassables);
            return { cells : cells, impassableTypes : impassableTypes }
        }
        else return null;
    }

    handleMazeChange = (width, height, value) => {
        this.setState((prevState) => {
            let cells = prevState.cells
            cells[width][height] = value
            return { cells : cells }
        }, () => {
            this.props.onChange(this.state.cells,this.state.impassableTypes)
        })
    };

    updateMaze = function() {
        let table = [];
        for (let i = 0; i < this.props.width; i++) {
            let rows = [];
            for (let j = 0; j < this.props.height; j++) {
                rows.push(<td key={`${i},${j}`}> <Cell key={`${i},${j}`} width={i} height={j} impassableTypes={this.state.impassableTypes} onMazeChange={this.handleMazeChange}/> </td>);
            }
            table.push(<tr>{rows}</tr>);
        }
        return table;
    }

    saveMaze = (cells) => {
        let maze = JSON.stringify({
            "cells": this.state.cells,
            "impassableTypes": this.state.impassableTypes,
            "fileName": this.state.mazeName,
            "fileDescription": this.state.mazeDescription
        })

        superagent
            .post('http://localhost:9000/v1.0/maze/save')
            .set('Content-Type','application/json')
            .send(maze)
            .end((error,response) => {
            if (error) this.setState( { savedMazeMessage : response.text, openSnackbar : true } ); 
            else this.setState( { savedMazeMessage : 'El laberinto se guardó con exito!', openSnackbar : true } );
        })
    }

    handleMazeNameChange = mazeName => event => {
        this.setState({
            mazeName: event.target.value,
        });
    };

    handleMazeDescriptionChange = mazeDescription => event => {
        this.setState({
            mazeDescription: event.target.value,
        });
    };

    hideSnackbar = () => {
        this.setState({
            openSnackbar : false
        })
    }

    render () {
        const { classes } = this.props;
        const saveDisabled = !(this.props.validMaze);
        return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
               {/*  <Button variant="contained" size="small" className={classes.button} onClick={this.saveMaze} disabled={saveDisabled}>
                    <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                    Guardar
                </Button> */}
                
                <TextField
                    id="outlined-name"
                    label="Nombre del Laberinto"
                    className={classes.textField}
                    value={this.state.mazeName}
                    onChange={this.handleMazeNameChange('mazeName')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Descripción"
                    className={classes.textField}
                    value={this.state.mazeDescription}
                    onChange={this.handleMazeDescriptionChange('mazeDescription')}
                    margin="normal"
                    variant="outlined"
                />
            </form>
            <table>
                <tbody>{ this.updateMaze() }</tbody>
            </table>
            <Snackbar message={this.state.savedMazeMessage} open={this.state.openSnackbar} onClick={this.hideSnackbar} />
        </div>
        )
    }
}

function initMaze(width,height,amountOfImpassables){
    let cells = [];
    let impassableTypes = initImpassables(amountOfImpassables);
    for(let i = 0; i < width; i++) {
        let row = [];
        for(let j = 0; j < height; j++) row.push(impassableTypes[0]);
        cells.push(row);
    }        
    return cells;
}

function initImpassables(amountOfImpassables){
    let impassableTypes = [];
    for (let i = 0; i < amountOfImpassables; i++)
        impassableTypes.push(i);
    return impassableTypes;
}

export default withStyles(styles)(Maze);