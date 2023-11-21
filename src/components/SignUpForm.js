// components/SignupForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box } from '@mui/material';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Ad zorunludur'),
            email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta zorunludur'),
            password: Yup.string().required('Şifre zorunludur'),
            phoneNumber: Yup.string().required('Telefon numarası zorunludur'),
            address: Yup.string().min(10, 'Adres en az 10 karakter olmalı').max(50, 'Adres en fazla 50 karakter olmalı'),
        }),
        onSubmit: (values) => {
            // Kayıt işlemini burada gerçekleştirebilirsiniz.
            console.log('Kayıt Başarılı!', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                label="Ad"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
                id="email"
                name="email"
                label="E-posta"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                type="password"
                id="password"
                name="password"
                label="Şifre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Telefon Numarası"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            <TextField
                id="address"
                name="address"
                label="Adres"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
            />

            <Box mt={2}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Kayıt Ol
                </Button>
            </Box>
        </form>
    );
};

export { SignupForm };
