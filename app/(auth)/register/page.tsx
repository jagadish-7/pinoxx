export default function Login() {
    return (
        <main className="flex flex-col justify-center items-center h-[80vh]">
            <h1 className="text-3xl font-bold mb-4">Register Page</h1>
            <form className="flex flex-col gap-4 w-80">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Register 
                </button>
            </form>
        </main>
    )
}