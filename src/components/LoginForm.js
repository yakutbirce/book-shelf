import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Grid } from '@mui/material';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta zorunludur'),
            password: Yup.string().required('Şifre zorunludur'),
        }),
        onSubmit: (values) => {
            console.log('Giriş Başarılı!', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label="E-posta"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        label="Şifre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Giriş Yap
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export { LoginForm };
