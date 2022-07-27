import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
export default function LoginForm() {
    const navigate = useNavigate()
    const [loginUser, { error: loginError }] = useMutation(LOGIN_USER);
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...LoginData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            // execute loginUser mutation and get Auth data
            const { data } = await loginUser({
                variables: { ...loginData }
            });

            if (!data) {
                throw new Error('something went wrong!');
            }
            Auth.login(data.loginUser.token); navigate("/main")
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setLoginData({
            email: '',
            password: '',
        });
    };

    return (
        <form action="/" method="post" onSubmit={handleSubmit}>

            <div className='field-wrap'>
                <label>
                    Email Address<span className='req'></span>
                </label>
                <input
                    className='input-field'
                    type="email"
                    name='email'
                    id='email'
                    required
                    value={formState.email}
                    onChange={handleChange}
                    autocomplete="off" />
            </div>

            <div className='field-wrap'>
                <label>
                    Password<span className='req'></span>
                </label>
                <input type="password"
                    name="password"
                    required
                    //id=""
                    value={LoginData.password}
                    autocomplete="off"
                    onChange={handleChange} />
            </div>

            <button
                type='submit'
                className='button'>
                Log In
            </button>
        </form>
    )
}