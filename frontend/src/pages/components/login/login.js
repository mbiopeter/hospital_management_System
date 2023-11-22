import './login.css';
import logo from '../../../images/logo.png';
import { FaSignOutAlt } from 'react-icons/fa';
import background from '../../../images/background.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const [error,setError] = useState('');
    const [values,setValues] = useState({
        Username:'',
        Password:'',
        Token:'',
    });
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    axios.defaults.withCredentials = true;
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/login/', values)
        .then(res => {
            if(res.data.Login){
                navigate('/Dashboard');
            }else{
                setError('Invalid login credentials!!');
                console.log(res.data.Login);
            }
        })
        .catch(err => {
            console.log(err);
            setError('Internal server error');
        });
    }

    return(
        <div className='loginContainer'>
            <div className="loginForm">
                <div className="loginFormHeader">
                    <img src={logo} alt='none'/>
                </div>
                <div className="loginFormBody">
                    <form method='post' onSubmit={handleSubmit}>
                        <input autoComplete='off' type="text" placeholder='Username' onChange={handleInput} name='username'/>
                        <input autoComplete='off' type="password" placeholder='Password' onChange={handleInput} name='Password'/>
                        <input autoComplete='off' type="text" placeholder='Token Number' onChange={handleInput} name='Token'/>
                        <div className="LoginFormError" style={(error === 'null') ? {display:'none'}:null}>
                            <span>{error}</span>
                        </div>
                        <div className="loginFormBodyBtn" >
                            <button type='submit'><FaSignOutAlt className='LoginIcon'/>Login </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="loginImg">
                <img src={background} alt='none'/>
            </div>
        </div>
    )
}
export default Login;