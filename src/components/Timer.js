//STYLED-COMPONENTS IMPORTS
import styled from 'styled-components';

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';
// import { minIncrement, minReset } from '../features/minTimer/minTimerSlice';
// import { secIncrement, secReset } from '../features/secTimer/secTimerSlice';
import { changeToTrue, changeToFalse } from '../features/buttonCondition/buttonConditionSlice';


const Timer = () => {
    const currentButtonCondition = useSelector((state) => state.buttonCondition.value);
    const minutes = useSelector((state) => state.minTimer.value);
    const seconds = useSelector((state) => state.secTimer.value);

    const dispatch = useDispatch();

    const changeButtonCondition = () => {
        if (currentButtonCondition === true){
            dispatch(changeToFalse());
        }else if(currentButtonCondition === false){
            dispatch(changeToTrue());
        }
    }

    return(
        <Container>
            <TimerContainer>
                <span>{minutes}</span>
                <span>{seconds}</span>
            </TimerContainer>
            <ButtonsContainer>
                <button 
                    onClick={() => changeButtonCondition()}
                >
                    {currentButtonCondition ? 'START' : 'STOP'}
                </button>
            </ButtonsContainer>
        </Container>
    )
}


//STYLED-COMPONENTS STYLES

const Container = styled.div`
    width: 500px;
    height: 500px;
`;

const TimerContainer = styled.div`
    width: 100%;
    height: 70%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        height: 100%;
        background-color: red;
        flex: 1;
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ButtonsContainer = styled.div`
    width: 100%;
    height: 30%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Timer;