import React, {Component} from 'react';
import CellPreview from './CellPreview';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class MazeViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cells : [],
            impassables : []
        }
    }

    drawMaze = function() {
        let table = [];
        for (let i = 0; i < this.props.cells.length; i++) {
            let rows = [];
            for (let j = 0; j < this.props.cells[0].length; j++) {
                rows.push(<td key={`${i},${j}`}> <CellPreview value={this.props.cells[i][j]} impassableTypes={this.props.impassables}/> </td>);
            }
            table.push(<tr>{rows}</tr>);
        }
        return table;
    }

    render(){
        return (<table><tbody>{ this.drawMaze() }</tbody></table>)
    }

}

export default withStyles(styles)(MazeViewer);