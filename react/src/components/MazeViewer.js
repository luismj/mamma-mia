import React, {Component} from 'react';
import MazesModal from './MazesModal';
import MazePreview from './MazePreview';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import superagent from 'superagent';
import classNames from 'classnames';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});

class MazeViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mazes : [],            
            isOpen : false
        }
    }

    loadMazes(){
        superagent.get('http://localhost:9000/v1.0/maze/getMazes')
        .end((error, response) => {
            if (!error) this.setState( { mazes : response.body })
        })
    }

    componentDidMount(){
        this.loadMazes();
    }

    toggleModal = () => {
        this.loadMazes();
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        const { classes } = this.props;
        let mazes = this.state.mazes.map(
            (maze) => ( <div>
                            <h4>Nombre del laberinto: {maze.fileName}</h4>
                            <MazePreview cells={maze.cells} impassables={maze.impassableTypes} />
                            <p>Descripción: {maze.fileDescription}</p>
                            <p>Celdas no pasables: {[maze.impassableTypes].join(",")}</p>
                        </div> ));

        return (     
            <div>
                <Button variant="contained" size="small" className={classes.button} onClick={this.toggleModal}>
                <ViewModuleIcon className={classNames(classes.leftIcon, classes.iconSmall)} />Mostrar Laberintos</Button>
                <MazesModal show={this.state.isOpen} onClose={this.toggleModal}>{mazes}</MazesModal>
            </div>       
        )
    }

}

export default withStyles(styles)(MazeViewer);