export default function Login() {
    return (
        <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
            <div className="h-full max-w-2xs md:min-w-xl flex flex-col items-center bg-gray-100 p-8 rounded-xl text-gray-600">
                <span>Login to your account</span>
                <form>
                    <label>Email</label>
                    <input type="text" className="outline-none"/>

                    <label>Password</label>
                    <input type='password' className="outline-none"/>
                </form>
            </div>
        </div>
    )
}