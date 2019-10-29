import React, {Component} from 'react';
import MenuCreator from '../components/MenuCreator'
import MazeViewer from '../components/MazeViewer';

class ShowMenu extends Component {
	render()  {
		return (
			<div>
				<MenuCreator/>
				<MazeViewer/>
			</div>
		);
	}
}

export default ShowMenu;
