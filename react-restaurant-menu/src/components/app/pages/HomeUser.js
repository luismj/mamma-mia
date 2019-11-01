import React, {Component} from 'react';
import ButtonBases from './ButtonBases';
import MenuAppBar from './MenuAppBar';

class HomeUser extends Component {
	render()  {
		return (
			<div>
				<MenuAppBar></MenuAppBar>
                <ButtonBases></ButtonBases>
			</div>
		);
	}
}

export default HomeUser;