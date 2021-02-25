import React, {Component} from 'react'
import { connect } from 'react-redux'
import './LoginForm.css'
import {logIn} from '../../redux/actions'

class LoginForm extends Component {

    constructor() {
        super();

        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    submitHandler = event => {
        event.preventDefault()
        this.makeFormNormal(this.emailRef)
        this.makeFormNormal(this.passwordRef)

        const emailInput = this.emailRef.current.childNodes[1].value
        const passwordInput = this.passwordRef.current.childNodes[1].value
        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rePassword = /[A-Za-z0-9]{8,}/;

        if (reEmail.test(String(emailInput).toLowerCase()) && rePassword.test(passwordInput)) {
            window.sessionStorage.setItem('isLoggedIn', 'loggedIn')
            this.props.logIn()
        } else {
            if (!reEmail.test(String(emailInput).toLowerCase())) {
                this.makeFormWarning(this.emailRef)
            }
            if (!rePassword.test(passwordInput)) {
                this.makeFormWarning(this.passwordRef)
            }
        }
    }

    makeFormWarning = ref => {
        ref.current.childNodes[0].classList.add('form__title_warning')
        ref.current.childNodes[1].classList.add('form__input_warning')
        ref.current.childNodes[2].classList.remove('invisible')
    }

    makeFormNormal = ref => {
        ref.current.childNodes[0].classList.remove('form__title_warning')
        ref.current.childNodes[1].classList.remove('form__input_warning')
        ref.current.childNodes[2].classList.add('invisible')
    }

    render() {
        return (
            <form className="form">
                <h2 className="form__header">Simple Flight Check</h2>
                <div className="form__email-container" ref={this.emailRef}>
                    <p className="form__title">Логин:</p>
                    <input type="email" className="form__input" />
                    <p className="form__email-warning invisible">Некорректный email</p>
                </div>
                <div className="form__password-container" ref={this.passwordRef}>
                    <p className="form__title">Пароль:</p>
                    <input type="password" className="form__input"/>
                    <p className="form__password-warning invisible">Некорректный пароль</p>
                </div>
                <button onClick={this.submitHandler} type="submit" className="form__button">Войти</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    logIn
}

export default connect(null, mapDispatchToProps)(LoginForm);
