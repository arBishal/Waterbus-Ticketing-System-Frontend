import './App.css';
import Navbar from './components/Navbar';
import AdminDashboard from './components/admin/AdminDashboard';
import Billboard from './components/Billboard';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <AdminDashboard/>
      <Billboard/>
    </div>
  );
}

export default App;
