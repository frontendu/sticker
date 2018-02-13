import React, {Component} from 'react';
import Logo from './Logo';
import Serializer from './Serializer';

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = {
			background: '#ffffff',
			primary: '#000000',
			secondary: '#ff0000'
		};

		this.onChangePrimary = this.onChangePrimary.bind(this);
		this.onChangeSecondary = this.onChangeSecondary.bind(this);
		this.onChangeBackground = this.onChangeBackground.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(values) {
		this.setState({...this.state, ...values});
	}

	onChangePrimary({target: {value}}) {
		this.setState({primary: value});
	}

	onChangeSecondary({target: {value}}) {
		this.setState({secondary: value});
	}

	onChangeBackground({target: {value}}) {
		this.setState({background: value});
	}

	render() {
		const {
			background,
			primary,
			secondary
		} = this.state;

		return (
			<div>
				<div>
					<input type='color' onChange={this.onChangeBackground} value={background}/>
					<input type='color' onChange={this.onChangePrimary} value={primary}/>
					<input type='color' onChange={this.onChangeSecondary} value={secondary}/>
				</div>
				<Logo
					background={background}
					primary={primary}
					secondary={secondary}
				/>
				<Serializer
					background={background}
					primary={primary}
					secondary={secondary}
					onChange={this.onChange}
				/>
			</div>
		)
	}
}