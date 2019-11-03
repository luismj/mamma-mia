import React, {Component} from 'react';
import PaymentCard from './Payments';
import PageBar from './PageBar';


class PaymentsHome extends Component {
	render()  {
		return (
			<div>
				 <PageBar></PageBar>
                 <PaymentCard></PaymentCard>
			</div>
		);
	}
}

export default PaymentsHome;