'use client';
import { useState } from 'react'
import { TextField, Button, Box, Snackbar } from '@mui/material';
import { z } from 'zod';
import { log } from 'util';
// import { validationRegisterForm } from '../validationRegisterForm/page'
import axios from 'axios';
import HeaderData from '../../Components/page';
import { useAppContext } from '@/Components/context/page';
function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        phoneNumber: ''
    })
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        designation: ''
    })
    const api = axios.create({ baseURL: 'http://172.17.15.74:3000/apis/users' })
    const [errors, setErrors] = useState<any[]>([]);
    const [success, setSuccess] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [loading, setLoading] = useState(false)
    const {stateData1}=useAppContext()
    console.log(stateData1);
    
    const fetchDataFromApi = async () => {
        try {
            setLoading(true)
            const response = await fetch('api', {
                headers: {
                    Accept: 'application/json',
                    meethod: 'GET'
                },
            });
            if (response) {
                const data = await response.json()
                console.log(data);
            }
        }
        catch (error) {console.log("data error");
            console.log(error);
        }
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target
        // setFormData(pervState => ({
        //     ...pervState, [name]: value
        // }))
        setData(pervState => ({
            ...pervState, [name]: value
        }))
    }
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            // console.log('Form: ', formData);
            // const validationRegisterForm = z.object({
            //     firstName: z.string().nonempty('First Name is required').regex(/^[A-Za-z]+$/, { message: 'Only alphabets are allowed' }).min(4, { message: 'minimum 4 letters' }).max(25, { message: 'maximum 25 letters' }),
            //     lastName: z.string().nonempty('Last Name is required').regex(/^[A-Za-z]+$/, { message: 'Only alphabets are allowed' }).min(4, { message: 'minimum 4 letters' }).max(25, { message: 'maximum 25 letters' }),
            //     email: z.string().nonempty('Email is required').email({ message: 'Invalid email' }),
            //     userName: z.string().nonempty('User Name is required').min(2, 'minimum 4 letters').max(25, 'maximum 25 letters'),
            //     password: z.string().nonempty('Password is required').min(8, { message: 'minimum 8 letters' }).max(25, { message: 'maximum 25 letters' }),
            //     phoneNumber: z.string().nonempty('Phone Number is required').min(10, { message: '10 digits should required' }).max(10, { message: 'not accepted more than 10 digits' })
            // })
            // const response = validationRegisterForm.safeParse({
            //     firstName: formData.firstName,
            //     lastName: formData.lastName,
            //     email: formData.email,
            //     userName: formData.userName,
            //     password: formData.password,
            //     phoneNumber: formData.phoneNumber
            // })
            // if (!response.success) {
            //     let errArr: any[] = [];
            //     const { errors: err } = response.error;
            //     for (var i = 0; i < err.length; i++) {
            //         errArr.push({ for: err[i].path[0], message: err[i].message });
            //     }
            //     setErrors(errArr);
            //     // throw err;             
            //     return;
            // }
            // else {
            //     console.log(data);
            //     // const postData=await api.post(data);
            //     setSuccess(true);
            //     setOpenSnackbar(true);
            // }

            console.log('post data: ', data);
            const validationPostData = z.object({
                name: z.string().nonempty('Name is required').regex(/^[A-Za-z]+$/, { message: 'Only alphabets are allowed' }).min(4, { message: 'minimum 4 letters' }).max(25, { message: 'maximum 25 letters' }),
                email: z.string().nonempty('Email is required').email({ message: 'Invalid email' }),
                age: z.string().nonempty('Age is required').refine(value => parseInt(value, 10) > 20, { message: 'Age must be greater than 20' }),
                designation: z.string().nonempty('Designation is required')
            })
            const responsePostData = validationPostData.safeParse({
                name: data.name,
                email: data.email,
                age: data.age,
                designation: data.designation,
            })
            if (!responsePostData.success) {
                let errArr: any[] = [];
                const { errors: err } = responsePostData.error;
                for (var i = 0; i < err.length; i++) {
                    errArr.push({ for: err[i].path[0], message: err[i].message });
                }
                setErrors(errArr);
                // throw err;             
                return;
            }
            else {
                console.log(data);
                const postData = await api.post('', data);
                console.log(postData);

                // const createPost = async (post: { name: string; email: string; age: number;designation:string}) => {
                //     console.log("post :",post);
                //     const response = await api.post('',post);
                //     return response.data;
                //   };
                setSuccess(true);
                setOpenSnackbar(true);
            }
            setErrors([])
        }
        catch (error) {
            console.log("error");
            console.error(error);
        }


    }

    return (
        <div>
            <HeaderData name={'sanjeev'} age={'25'} />
            <HeaderData name={'naga'} age={'23'} />
            {stateData1.firstName}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <form onSubmit={handleSubmit}>

                    {/* <div>
                        <TextField
                            margin="normal"
                            id="firstName"
                            name="firstName"
                            label="FirstName"
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "firstName")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            name="lastName"
                            label="Last Name"
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "lastName")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            name="email"
                            label="Emial"
                            type='email'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "email")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            name="userName"
                            label="User Name"
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "userName")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            name="password"
                            label="Password"
                            type='password'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "password")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            name="phoneNumber"
                            label="Phone Number"
                            type='number'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "phoneNumber")?.message}
                    </div> */}

                    <div>
                        <TextField
                            margin="normal"
                            id="name"
                            name="name"
                            label="Name"
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "name")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            id="email"
                            name="email"
                            label="Email"
                            type='email'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "email")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            id="age"
                            name="age"
                            label="Age"
                            type='number'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "age")?.message}
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            id="designation"
                            name="designation"
                            label="Designation"
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}>
                        {errors.find((error) => error.for === "designation")?.message}
                    </div>
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {'Submit'}
                    </Button>
                </form>
                <Snackbar open={openSnackbar} autoHideDuration={500} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Box
                        sx={{
                            bgcolor: 'green',
                            color: 'white',
                            p: 2,
                            borderRadius: 4,
                            fontWeight: 'bold',
                            position: 'top'
                        }}
                    >
                        Registration completed successfully!
                    </Box>
                </Snackbar>
            </div>

        </div>
    )
}

export default RegisterForm
