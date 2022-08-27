import styled from 'styled-components';

import Timer from './components/Timer';

const App = () => {
  return (
    <AppContainer>
      <Timer/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
