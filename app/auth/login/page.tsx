"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    workEmail: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex">
      {/* Left Side - Branding */}
      <div className="flex-1 flex flex-col justify-center px-12 bg-white">
        <div className="max-w-md">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next-Gen Patient{" "}
            <span className="text-blue-600">Surveillance.</span>
          </h1>
          
          <p className="text-gray-600 mb-12">
            Empowering healthcare providers with AI predictive analytics and seamless IoT integration.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="font-semibold text-gray-900">Real-time Vitals</span>
              </div>
              <p className="text-sm text-gray-600">
                Live medical telemetry data monitoring
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="font-semibold text-gray-900">Risk Scoring</span>
              </div>
              <p className="text-sm text-gray-600">
                AI-driven alert prediction alerts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2">
                  GET READY
                </span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  PERSONNEL
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Clinical Access</h2>
              <p className="text-sm text-gray-600">
                Please sign in to your provider account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="name@hospital.org"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                {/* <div className="flex justify-between items-center mt-2">
                  <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                    Forgot Password?
                  </Link>
                </div> */}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Sign In
                <span className="ml-2">→</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 mt-2">
                Need an account?{" "}
                <Link href="/auth/signup" className="text-blue-600 hover:text-blue-700">
                  Register your Hospital
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}