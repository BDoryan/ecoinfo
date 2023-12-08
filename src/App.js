import "./assets/scss/main.scss"
import "./assets/css/main.css"
import AppRouter from "./AppRouter";
import 'animate.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div className="min-vh-100 bg-light position-relative" style={{overflow: 'hidden'}}>
      <AppRouter />
    </div>
  );
}

export default App;