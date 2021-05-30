import {
  Circle,
  HomeLinkWrapper,
  LinkHeader,
  OuterHomeWrap,
  StyledHeader,
  StyledLink,
} from './Home.style';

const Home = () => {
  return (
    <>
      <StyledHeader>
        <h1> Select a generation</h1>
      </StyledHeader>
      <OuterHomeWrap>
        <HomeLinkWrapper>
          <StyledLink to='/gen-one'>
            <Circle>
              <LinkHeader>
                <h1>Gen 1</h1>
              </LinkHeader>
            </Circle>
          </StyledLink>
        </HomeLinkWrapper>
        <HomeLinkWrapper>
          <StyledLink to='/gen-two'>
            <Circle>
              <LinkHeader>
                <h1>Gen 2</h1>
              </LinkHeader>
            </Circle>
          </StyledLink>
        </HomeLinkWrapper>
        <HomeLinkWrapper>
          <StyledLink to='/gen-three'>
            <Circle>
              <LinkHeader>
                <h1>Gen 3</h1>
              </LinkHeader>
            </Circle>
          </StyledLink>
        </HomeLinkWrapper>
      </OuterHomeWrap>
    </>
  );
};

export default Home;
