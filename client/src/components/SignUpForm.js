import { useNavigate } from "react-router-dom";
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
export default function SignUpForm() {
    const navigate = useNavigate()
    const [addUser, { error: addError }] = useMutation(ADD_USER);
    const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupData({ ...signupData, [name]: value });
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
            // execute addUser mutation and get Auth data
            const { data } = await addUser({
                variables: { ...signupData }
            });

            if (!data) {
                throw new Error('something went wrong!');
            }
            Auth.login(data.addUser.token); navigate("/main")
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setSignupData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (

        <form action="/" method="post" onSubmit={handleSubmit}>
            <div className='top-row'>
                <div className='field-wrap'>
                    <label>
                        UserName<span className='req'></span>
                    </label>
                    <input
                        className='input-field'
                        type="text"
                        name="username"
                        required
                        //id=""
                        value={signupData.username}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='field-wrap'>
                <label>
                    Email Address<span className='req'></span>
                </label>
                <input
                    className='input-field'
                    type="email"
                    name="email"
                    required
                    //id=""
                    value={signupData.email}
                    autocomplete="off"
                    onChange={handleChange} />
            </div>

            <div className='field-wrap'>
                <label>
                    Set A Password<span className='req'></span>
                </label>
                <input
                    type="password"
                    name="password"
                    required
                    //id=""
                    value={signupData.password}
                    autocomplete="off"
                    onChange={handleChange} />
            </div>

            <button
                type='submit'
                className='button'>
                Get Started
            </button>

        </form>
    );
}
