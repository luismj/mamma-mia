import React, {Component} from 'react';
import ButtonBases from './ButtonBases';
import MenuAppBar from './MenuAppBar';

/* TODO NOE. Tal vez este no es el nombre mas apropiado, porque deberia ser un Home para ambos
Hay que cambiarlo después para que si se loguea como admin, sea el mismo home pero con las posibilidades
de editar y demas*/
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