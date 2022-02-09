import narutoImg from './images/naruto.png'
import styled from 'styled-components';
import { Quotes } from './components/quotes/Quotes';
import { getQuote } from './services/quoteServices';
import { useState } from 'react';
import jutsoSound from './sounds/jutso.mp3'

const audio = new Audio(jutsoSound);

export default function App() {
  const [quoteState, setQuoteState] = useState({ quote:'ok', speaker: 'Speaker'});

  const onUpdate = async () => {
    const quote = await getQuote();
    audio.play();
    setQuoteState(quote);
  }
  return (
    <Content>
    <Quotes {...quoteState} onUpdate={onUpdate}/>
   <NarutoImg src={narutoImg} alt="naruto"></NarutoImg>
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
max-width: 50vw;
align-self: flex-end;
`;