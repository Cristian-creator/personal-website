import styled from 'styled-components';

const StyledBackCard = styled.div`
    color: red;
    // background: rgb(2,0,36);
    background: ${props => props.backColor};
    background-size: cover;
`;

export default StyledBackCard;