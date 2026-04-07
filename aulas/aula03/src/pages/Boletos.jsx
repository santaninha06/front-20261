import Sidebar from "../components/Sidebar";
import Topbar from "../components/topbar";

function Boletos(){
    return(
    <div>
        <Sidebar />
        <main>
            <Topbar />
            <h2>Meus boletos</h2>
            <section></section>
        </main>
    </div>
    );
}
export default Boletos;