'use client'

import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';

interface AuthResponse {
    user: {
        id: number;
        username: string;
        role: string;
        accessibleMenus: string[];
    };
    token: string;
}

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [year, setYear] = useState('2024');
    const router = useRouter();
    const { login } = useAuth();

    //   const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Here, you would typically make an API call to authenticate the user
    //     // For this example, we'll use a mock authentication
    //     try {
    //       const response = await mockAuthenticate(username, password);
    //       // Store the user info and token in localStorage or a state management solution
    //       localStorage.setItem('user', JSON.stringify(response.user));
    //       localStorage.setItem('token', response.token);
    //       // Redirect to the landing page
    //       router.push('/landing');
    //     } catch (error) {
    //       console.error('Login failed:', error);
    //       // Handle login error (show message to user, etc.)
    //       alert('Login failed. Please check your credentials.');
    //     }
    //   };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Your login API call here
            const response = await mockAuthenticate(username, password);
            localStorage.setItem('user', JSON.stringify(response.user))
            login(response.token);
            router.push('/landing');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error (show message to user, etc.)
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert('An unknown error occurred');
            }
        }
    };

    // Mock authentication function
    const mockAuthenticate = async (username: string, password: string): Promise<AuthResponse> => {
        // In a real app, this would be an API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'password') {
                    resolve({
                        user: { id: 1, username: 'admin', role: 'admin', accessibleMenus: ['all'] },
                        token: 'mock-jwt-token'
                    });
                } else if (username === 'user' && password === 'password') {
                    resolve({
                        user: { id: 2, username: 'user', role: 'user', accessibleMenus: ['perencanaan', 'monitoring'] },
                        token: 'mock-jwt-token'
                    });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000); // Simulate network delay
        });
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/login-bg.jpg"
                alt="Login Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />

            {/* Login Form */}
            <div className="absolute inset-0 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
                    <div className="flex justify-center mb-6">
                        <Image src="/images/logo_pemda.png" alt="Logo Pemda" width={60} height={60} className="mr-4" />
                        <Image src="/images/logo_bpkp.png" alt="Logo BPKP" width={120} height={60} />
                    </div>
                    <h2 className="text-xl font-bold text-center mb-6">SISKEUDES Usulan RT/RW</h2>

                    {/* Username input */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Masukkan Username Anda"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>

                    {/* Password input */}
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan Password Anda"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Year selection and Forgot Password */}
                    <div className="mb-6 flex justify-between items-center">
                        <div>
                            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Tahun</label>
                            <select
                                id="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Lupa Password?</a>
                    </div>

                    {/* Login button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
