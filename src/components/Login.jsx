import React from 'react'

const login = () => {
  return (
    <div class="bg-cover bg-center bg-fixed" style="background-image: url('https://picsum.photos/1920/1080')">
    <div class="h-screen flex justify-center items-center">
        <div class="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
            <form>
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="email">
                        Email Address
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Enter your password" />
                    <a class="text-gray-600 hover:text-gray-800" href="#">Forgot your password?</a>
                </div>
                <div class="mb-6">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default login