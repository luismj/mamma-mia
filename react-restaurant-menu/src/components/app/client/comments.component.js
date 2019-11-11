import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CommentSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    comment: Yup.string()
        .required('Required')
});

const sendComment = (values) => {
    console.log('////////////', values);
}

export const CommentComponent = () => (
    <div className="container">
        <h3>Please leave your comments and suggestions</h3>
        <Formik
            initialValues={{
                email: '',
                comment: '',
            }}
            validationSchema={CommentSchema}
            onSubmit={values => {
                console.log(values);
                sendComment(values)
            }}
        >
            {({ errors, touched}) => (
                <div className="row">
                <Form className="col m12">
                    <div className="row">
                        <div className="input-field col s12">
                            <Field name="email"></Field>
                            <label>Email</label>
                        </div>
                    </div>
                </Form>
                </div>
            )}
        </Formik>
    </div>
);

export default CommentComponent;