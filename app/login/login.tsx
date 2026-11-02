
export default function Login() {
    function  handleSubmit (event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log( event.currentTarget);
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-bold mb-6 ">Inicio</h1>
            <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="text-black border-black w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="text-black border-black w-full px-3 py-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    );
}