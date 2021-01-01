
import './App.css';
import ContentBody from './components/ContentBody';

function App() {
  return (
    <div className="App">
      <ContentBody />
      
      
      <form>
            <h1>hi</h1>
            <select name="hi" id="hi" disabled={false}>
                    <option value="" disabled selected>--</option>
                    <option value="hi">helloooooooo</option>
                    
            </select>
        </form>


    </div>
  );
}

export default App;
