import  { Component } from 'react';
import './styles.css';


class UserLogin extends Component{

state = 
{
    email:'',
    password: ''
}

handleClick = (event)=>{
    console.log(event.target)
    console.log("Login is sucessufuly")
    alert("Login is sucessufuly")
}

handleChange = (event)=>{
    const { name, value } = event.target;
    this.setState({ [name]: value });

    if (name === 'email' && !value.endsWith('.ru')) {
        // alert('Yalniz .ru domenlərinə icazə verilir.')
        console.warn('Yalniz .ru domenlərinə icazə verilir.')
      }
      if (name === 'password' && value.length > 0 && value.length < 8) {
        // alert('Parol en azi 8 simvol olmalidir.');
        console.warn('Parol en azi 8 simvol olmalidir.')
      }
}

handleSubmit = (event)=>{
    event.preventDefault();
    const {email,password} = this.state
    console.log('E-mail:', email);
    console.log('Password:', password);
}

    render(){
        const {email,password} = this.state


        return(
         <div className="user-login-container">
            <h2>User Login</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>
               E-mail:
              <input
               
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
               
              />
            </label>
                </div>
                <div className='container'>
            <label>
              Password:
              <input
                
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
               
              />
            </label>
          </div>

          <button type="button" onClick={this.handleClick}>
            Login
          </button>
            </form>
            </div>
        );
    }
}

export default UserLogin;