function Login() {
    return (
        <div className="flex flex-row">
            <div className="absolute left-0 w-2/5 h-screen bg-white flex flex-col items-center justify-center">
                <div className="absolute left-16 top-8 text-[#252b42] font-bold text-2xl leading-8 tracking-[0.1px] font-montserrat">Dhwani Yog</div>
                <div className="flex flex-col items-center">
                    <div className="text-[#ff685b] text-left text-xl leading-[160%] tracking-[0.15px] font-medium self-start mb-8">Sign in</div>
                    <form>
                        <input type="text" className="rounded border w-[345px] p-4 mb-6 border-gray-300 pl-4" placeholder="Email Address *"/>
                        <input type="password" className="rounded border w-[345px] p-4 mb-6 border-gray-300 pl-4" placeholder="Password *"/>
                        <div className='flex flex-row justify-between items-center mb-6'>
                            <button className="rounded text-lg font-medium bg-[#ff685b] text-white py-3 px-6 flex items-center gap-3">
                                <div>Login</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                    <g clipPath="url(#clip0_2105_8409)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2105_8409">
                                            <rect width="12" height="10" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <div className="text-[#000000DE] font-roboto text-lg font-medium leading-[157%] tracking-[0.1px]">Forgot your password?</div>
                        </div>
                        <button className="flex w-[344px] justify-center items-center rounded bg-black shadow-md text-white font-roboto text-sm font-medium uppercase tracking-[0.46px] py-3">
                            SUPERVISOR LOGIN
                        </button>
                    </form>
                </div>
            </div>
            <div className="absolute right-4 top-20 h-[77vh] w-3/5 bg-[url('/assets/LoginImg.png')] bg-no-repeat z-10"></div>
        </div>
    )
}

export default Login;
