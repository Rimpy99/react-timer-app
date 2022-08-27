import styled from 'styled-components';

const Timer = () => {

    return(
        <Container>
            <TimerContainer>t</TimerContainer>
            <ButtonsContainer>t</ButtonsContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    height: 500px;
`;

const TimerContainer = styled.div`
    width: 100%;
    height: 70%;
    background-color: green;
`;

const ButtonsContainer = styled.div`
    width: 100%;
    height: 30%;
    background-color: blue;
`;

export default Timer;