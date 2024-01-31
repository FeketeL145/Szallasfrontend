import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {login} from './AuthService';

export function Bejelentkezes(){
    const [isLoginPending, setLoginPending] = useState(false);
    const navigate = useNavigate();

    function loginFormSubmit(e){
        e.persist();
        e.preventDefault();
        setLoginPending(true);
        login(e.target.email.value, e.target.password.value)
        .then(
        () => {
        setLoginPending(false);
        navigate('/szallasok');
    })
    .catch((error)=>{
        alert("Helytelen bejelentkezési adatok, kérjük próbálja újra!");
        setLoginPending(false);
    });
    if(isLoginPending)
    {
        return(
            <div className='d-flex justify-content-center h-100'>
                <div className='spinner-border text-danger' role='status'></div>
            </div>
        )
    }
    }
    return(
         <div className='container-fluid d-flex justify-content-center h-100 login-container'>
            <div className='card login-card'>
                <div className='card-header'>
                    Bejelentkezés
                </div>
                <div className='card-body'>
                    <form onSubmit={loginFormSubmit}>
                        <div className='input-group form-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fas fa-user'></i>
                                </span>
                            </div>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='E-mail'
                                id='email'></input>
                        </div>
                        <div className='input-group form-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fas fa-key'></i>
                                </span>
                            </div>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Jelszó'
                                id='password'></input>
                        </div>
                        <div className='form-group'>
                            <button
                                type='submit'
                                className='btn btn-warning float-right login_btn'>Bejelentkezés</button>
                        </div>
                    </form>
                </div>
            </div>
         </div>
    );
}