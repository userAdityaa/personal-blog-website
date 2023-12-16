function NavBar(){
    return(
        <nav className="flex items-center bg-[#222222] h-[5rem] w-[100vw] justify-between">
            
            <div className="h-[100%] w-[19.5%] bg-[#222222]  flex justify-center items-center border border-white shadow-inner shadow-white">
                <img src='svg-image-1.svg' className="h-[35%]"></img>
            </div>
            
            <div className="w-[66%] flex justify-center h-[100%] bg-[#222222] border border-white shadow-inner shadow-white">
                <ul className="text-white flex items-center w-[60%] h-[100%] justify-around text-[13.96px]  ">
                    <li className="hover:animate-slot">HOME</li>
                    <li className="hover:animate-slot">ABOUT</li>
                    <li className="hover:animate-slot">BLOG</li>
                    <div className="flex justify-between w-[13%]">
                        <li>PAGES</li>
                        <p className="flex items-center justify-center"><img src="svg-image-2.svg" alt="" className="h-[40%]"/></p>
                    </div>
                    <li>CART ( 0 )</li>
                </ul>
            </div>

            <div className="text-white w-[15%] flex justify-center h-[100%] items-center text-[13.96px] bg-[#222222] border border-white shadow-inner shadow-white">
                <p className=" h-[30%] w-[100%] flex justify-center items-center hover:animate-slot">CONTACT</p>
            </div>
            
        </nav>
    )
}

export default NavBar