import * as S from './styles';

import Button from '../Button/Button';

const Intro = () => {
  return (
    <>
      <S.ExampleDiv>
        <S.WelcomeMessage>{'Teste front-end'}</S.WelcomeMessage>
        <a href="/client-list">
          <Button>Carregar lista de clientes</Button>
        </a>
      </S.ExampleDiv>
    </>
  );
};

export default Intro;
