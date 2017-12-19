import React, { Component } from 'react'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		const val = e.target.value
		this.setState({
			[name]: val,
		})
	}

	render() {
		return(
			<div className="login-div">
				<form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
					<input className="login-box" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
					<input className="login-box" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
					<button className="login-submit" type="submit">Login</button>
				</form>
			</div>
			)
	}
}

export default LoginForm;