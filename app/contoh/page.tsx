'use client'

import React, { useState, useEffect } from 'react';
import LoadingWrapper from '../components/LoadingWrapper';
import LoadingSpinner from '../components/LoadingSpinner';
import useErrorBoundary from '../hooks/useErrorBoundary';
import ErrorBoundary from '../components/ErrorBoundary';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import { Checkbox, Form, Input, Radio, Select, SubmitButton } from '../components/Form';
import { useToast } from '../components/Toast';

const ErrorProne = () => {
    const { throwError } = useErrorBoundary();

    return (
        <div>
            <h2>This component might throw an error</h2>
            <button onClick={throwError}>Throw Error</button>
        </div>
    );
};

const ExamplePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const { isOpen, openModal, closeModal } = useModal();
    const { addToast } = useToast();

    const handleSubmit = (values: Record<string, any>) => {
        console.log('Form submitted with values:', values);
        // Handle form submission logic here
    };

    const handleClick = (type: 'success' | 'error' | 'info' | 'warning') => {
        addToast(`This is a ${type} message!`, type);
    };

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setData({ message: 'Data loaded successfully!' });
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Example Page</h1>

            <LoadingWrapper isLoading={isLoading}>
                {data && <p>{data.message}</p>}
            </LoadingWrapper>

            <div className="mt-4">
                <p>Inline spinner example: </p>
                <LoadingSpinner size="small" color="text-green-500" />
            </div>
            <button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Open Modal
            </button>

            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Example Form</h1>
                <Form onSubmit={handleSubmit}>
                    <Input name="name" label="Name" required />
                    <Input name="email" label="Email" type="email" required />
                    <Select
                        name="country"
                        label="Country"
                        options={[
                            { value: 'us', label: 'United States' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'uk', label: 'United Kingdom' },
                        ]}
                        required
                    />
                    <Checkbox name="subscribe" label="Subscribe to newsletter" />
                    <Radio
                        name="gender"
                        label="Gender"
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                        ]}
                    />
                    <SubmitButton>Submit</SubmitButton>
                </Form>
            </div>

            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Toast Example</h1>
                <div className="space-x-2">
                    <button
                        onClick={() => handleClick('success')}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Success Toast
                    </button>
                    <button
                        onClick={() => handleClick('error')}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Error Toast
                    </button>
                    <button
                        onClick={() => handleClick('info')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Info Toast
                    </button>
                    <button
                        onClick={() => handleClick('warning')}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        Warning Toast
                    </button>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal} title="Example Modal">
                <p>This is the content of the modal. You can put any JSX here.</p>
            </Modal>
            <ErrorBoundary>
                <ErrorProne />
            </ErrorBoundary>
        </div>
    );
};

export default ExamplePage;
