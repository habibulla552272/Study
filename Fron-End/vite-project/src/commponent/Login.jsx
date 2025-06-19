import React from 'react'

const Login = () => {
    return (
        <section>
            <div className='container mx-auto '>
                <div className='bg-green-400  w-[80%] md:w-[50%]  mx-auto'>

                    <div className='py-2'>
                        <label htmlFor="email"></label>
                        <input className=' outline-none  border-2 rounded-3xl' type="text" name="email" id="" placeholder='enter you email' />

                    </div>
                    <div className='py-2'>
                        <label htmlFor="Password"></label>
                        <input className=' outline-none  border-2 rounded-3xl' type="text" name="email" id="" placeholder='enter your password' />

                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login
