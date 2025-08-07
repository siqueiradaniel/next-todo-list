export default function Register() {
    return (
        <div className="min-h-screen w-full bg-cyan-600 flex items-center justify-center">
            <div className="h-full max-w-xs md:min-w-md flex flex-col gap-3 bg-gray-100 p-8 rounded-2xl text-gray-600">
                <h1 className="text-4xl text-gray-950 font-extrabold">Create account</h1>
                <form className="flex flex-col gap-3 pt-4">
                    <input 
                    type="text"
                    className="outline-none border-1 border-gray-400 placeholder-gray-500 rounded-lg p-3"
                    placeholder="Email"/>

                    <input 
                    type='password' 
                    className="outline-none border-1 border-gray-400 placeholder-gray-500 rounded-lg p-3"
                    placeholder='Password' />

                    <input 
                    type='submit'
                    value='Create'
                    className='bg-cyan-600 text-white text-2xl p-3 mt-3 rounded-md font-semibold' />
                </form>
                <button>
                    <span className="text-xl font-semibold">or, log in</span>
                </button>
            </div>
        </div>
    )
}