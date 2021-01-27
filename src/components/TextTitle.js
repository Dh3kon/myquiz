import styled from 'styled-components';
import db from '../../db.json';

const TextTitle = styled.h2`
  color: ${db.theme.colors.secondary};
  font-size: 25px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export default TextTitle;
