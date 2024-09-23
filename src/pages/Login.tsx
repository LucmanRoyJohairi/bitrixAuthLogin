import { useState } from "react";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleBitrixSignIn = async() => {
    // Redirect the user to the Bitrix OAuth login page
    const clientId = "local.66ebe4aa0d8477.79213880"; // Use your actual client ID
    const redirectUri = encodeURIComponent('https://bitrix-auth-api.vercel.app/bitrix/callback');
    const bitrixAuthUrl = `https://oauth.bitrix.info/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    // Redirect user to Bitrix login page
    window.location.href = bitrixAuthUrl;
  };



  return (
    <div className="flex items-center justify-center bg-gray-100 w-full">
      <div className="w-[300px] p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            value={credentials.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            value={credentials.password}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="********"
          />
        </div>

        {/* Sign In Button */}
        <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mt-6">
          <span className="text-sm text-gray-500">or</span>
        </div>

        {/* Sign In with Bitrix */}
        <button
          onClick={handleBitrixSignIn}
          className="mt-4 w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200"
        >
          Sign In with Bitrix
        </button>
      </div>
    </div>
  );
};

export default Login;
