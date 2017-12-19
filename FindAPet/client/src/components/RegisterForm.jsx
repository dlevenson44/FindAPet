import React, { Component } from 'react'

class RegisterForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			f_name: '',
			l_name: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			phone: '', 
			email: '',	
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

	render(){
		return(
			<div className="register-container">
				<form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
					<input className="register-box" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
					<input className="register-box" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
					<input className="register-box" type="text" name="f_name" placeholder="First Name" value={this.state.f_name} onChange={this.handleChange} />
					<input className="register-box" type="text" name="l_name" placeholder="Last Name" value={this.state.l_name} onChange={this.handleChange} />
					<input className="register-box" type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
					<input className="register-box" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} />
					<input className="register-box" type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} />
					<input className="register-box" type="text" name="zip" placeholder="Zip" value={this.state.zip} onChange={this.handleChange} />
					<input className="register-box" type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} />
					<input className="register-box" type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
					<button className="register-submit" type="submit">Register</button>
				</form>
			</div>
			)
	}
}

export default RegisterForm;