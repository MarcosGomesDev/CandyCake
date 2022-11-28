import styled from 'styled-components/native';
import { widthPercent } from '../../utils/dimensions';

export const Container = styled.View`
    flex: 1;
    width: ${widthPercent(100)}px;
    margin-top: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 10px;
    justify-content: space-between;
`;
