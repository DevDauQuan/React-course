import './App.css';
// import Button from './components/button/Button';
import Card from './components/Card/Card';
import Card2 from './components/Card/Card2';
import CardList from './components/Card/CardList';
import { GlobalStyles } from './GlobalStyle';
import { ThemeProvider } from './GlobalStyle';

// import Game from './components/tictactoe/Game';
// import Toggle from './components/toggle/Toggle';
// import RenderList from './components/youtube/RenderList';

function App() {
  return (
    <div>
      {/* <RenderList></RenderList> */}
      {/* <Toggle></Toggle> */}
      {/* <Game></Game> */}
      {/* <Button>Click here</Button> */}
      {/* <Button className={"button--secondary"}>Click here</Button> */}
      {/* <Button secondary>Click here</Button> */}
      <GlobalStyles></GlobalStyles>
      <CardList>
        {/* <Card secondary={true}></Card> */}
        <Card2 secondary={true}></Card2>


      </CardList>

    </div>
  )
}

export default App;
