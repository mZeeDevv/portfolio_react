import Container from './container/Container'
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
      <>
      <Router>
          <Container/>
      </Router>
      </>
  );
}

export default App;
