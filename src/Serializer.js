import React, {Component} from 'react';

const props = [
	'background',
	'secondary',
	'primary'
];

const setHash = (options) => {
	window.location.hash = '?' + Object.keys(options)
		.filter(name => props.includes(name))
		.reduce((acc, name) => {
			acc.push(`${name}=${options[name].replace('#', '')}`)
			return acc;
		}, [])
		.join('&');
};

const getHash = () => {
	const hash = window.location.hash;

	return hash.slice(2).split('&').reduce((acc, str) => {
		acc[str.split('=')[0]] = `#${str.split('=')[1]}`;
		return acc;
	}, {});
}

export default class extends Component {
	componentDidMount() {
		const hash = getHash();

		if (hash && this.props.onChange) {
			this.props.onChange(hash);
		}
	}

	componentWillReceiveProps() {
		setHash(this.props);
	}

	render() {
		return null;
	}
}