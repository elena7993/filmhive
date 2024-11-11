import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { NOIMG_URL, W500_URL } from "../../constant/imgUrl";
import { searchMovie } from "../../api";
import PageTitle from "../../components/PageTitle";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  color: #fff;
  padding: 100px 150px;
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(232, 141, 1, 0.8);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0 20px;
    /* margin-top: 100px; */
    &::placeholder {
      font-size: 18px;
    }
    /* z-index: 20; */
  }
`;

const ConWrap = styled.div`
  margin-top: 50px;
  padding: 0 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 30px;
`;
const Con = styled.div`
  a {
    color: #fff;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
  height: 415px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [term, setTerm] = useState([]);

  const onSearch = async (data) => {
    const { search: keyword } = data;

    try {
      const { results } = await searchMovie(keyword);
      console.log(results);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);

  return (
    <>
      <PageTitle title={"SEARCH"} />
      <Wrapper>
        <Form onSubmit={handleSubmit(onSearch)}>
          <input
            {...register("search", {
              required: "영화 제목은 필수입니다!",
            })}
            type="text"
            placeholder="영화 제목"
          />
          <FontAwesomeIcon
            style={{
              position: "absolute",
              top: "16px",
              right: "20px",
              fontSize: "18px",
            }}
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </Form>
      </Wrapper>
      {!term || term.length === 0 ? (
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          검색 결과가 없습니다.
        </p>
      ) : (
        <ConWrap>
          {term.map((data) => (
            <Con key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <img
                  src={
                    data.poster_path ? W500_URL + data.poster_path : NOIMG_URL
                  }
                  alt={data.title}
                />
                <h3>{data.title}</h3>
              </Link>
            </Con>
          ))}
        </ConWrap>
      )}
    </>
  );
};

export default Search;
