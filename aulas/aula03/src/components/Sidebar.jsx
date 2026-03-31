
function Sidebar() {
    return(
     <aside className='hidden md:block bg-gray-300'>

        <header classname="flex flex-row">
            <h1>Aluno Online</h1>
            <img src={logo} alt="" />
        </header>
        <Menu/>
        </aside>
        )
}

        export default Sidebar;