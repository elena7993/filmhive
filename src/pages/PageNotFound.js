import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text_1 {
    font-size: 80px;
    font-weight: 700;
    color: rgba(232, 141, 1, 1);
    margin-bottom: 50px;
  }

  .text_2 {
    font-size: 32px;
    color: #fff;
  }
`;

const PageNotFound = () => {
  return (
    <Wrap>
      <div className="text_1">404</div>
      <div className="text_2">Oops... page not found</div>
    </Wrap>
  );
};

export default PageNotFound;
