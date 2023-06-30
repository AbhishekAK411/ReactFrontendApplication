const Navbar = () =>{
    return (
        <>
            <nav className="w-100 h-14 bg-slate-900 z-10 shadow-custom flex justify-between">
                <div className="w-1/5 h-full border-white border"></div>
                <div className="w-2/5 h-full flex items-center justify-center">
                    <input className="border-none rounded-full w-11/12 h-8 pl-6 font-sans text-sm outline-none" type="text" placeholder="Search.." />
                </div>
                <div className="w-1/4 h-full border-white border">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </>
    )
    
}

export default Navbar;