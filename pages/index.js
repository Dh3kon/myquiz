import styled from 'styled-components';
import db from '../db.json';
import TextTitle from '../src/components/TextTitle';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const TextOne = styled.h2`
  color: ${db.theme.colors.primary};
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>Your custom quiz app!</Widget.Header>
          <Widget.Content>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui a
              illo, repellat, ab error ducimus velit debitis blanditiis
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <TextTitle>Your App</TextTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure omnis
            deserunt, error corrupti veritatis dolorem minima excepturi? Nulla
            possimus, numquam optio molestias fugit fugiat incidunt quibusdam
            illum soluta placeat reprehenderit?
          </p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl='https://github.com/Dh3kon' />
    </QuizBackground>
  );
}
