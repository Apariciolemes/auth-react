import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { api } from '../../services/api'
import history from '../../history';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './style.css'

export function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function singInUser(): Promise<void> {
        try {
            const data = {
                email,
                password,
            }

            const token = (await api.post('/auth', data)).data.data
            localStorage.setItem('token', token)

            history.push('/product')

        } catch (error) {
            toast.error("Email/Senha está incorreto!!!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <Container>
            <div className="form-content">
                <form className="form-data">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Senha"
                        type="password"
                        required
                        fullWidth
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={singInUser}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    )
}