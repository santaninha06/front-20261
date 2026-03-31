import Sidebar from '../components/Sidebar';
import Topbar from '../components/topbar';

function Notas(){
    return (
        <div>
            <Sidebar />
        <main>
            <Topbar />
            <h2>Minhas Notas</h2>
        </main>
        </div>
    );
}
export default Notas;