import React, {Component} from 'react';
import MazeCreator from '../components/MazeCreator'
import MazeViewer from '../components/MazeViewer';

class ShowMaze extends Component {
	render()  {
		return (
			<div>
				<MazeCreator/>
				<MazeViewer/>
			</div>
		);
	}
}

export default ShowMaze;
