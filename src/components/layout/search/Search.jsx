import { Container } from "./search.style";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [toggle, setToggle] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitSearch = (data) => {
    const { type, searchValue } = data;
    reset();
    navigate(`/search/${type}/${searchValue}/1`);
  };
  return (
    <Container>
      <i
        onClick={() => setToggle((prv) => !prv)}
        className="flex items-center text-2xl cursor-pointer"
      >
        {toggle ? <CloseOutlined /> : <SearchOutlined />}
      </i>
      <div
        className={`duration-700 ${
          toggle ? "max-w-[400px] opacity-100" : "max-w-0 opacity-0"
        } overflow-hidden`}
      >
        <form
          onSubmit={handleSubmit(submitSearch)}
          className="flex items-stretch"
        >
          <div className="relative  text-zinc-950 w-[140px]   flex items-center justify-center">
            <select
              className="w-full h-full text-center bg-gray-900 text-white outline-none"
              name=""
              id=""
              {...register("type")}
              required
            >
              <option value="multi">All</option>
              <option value="movie">Movie</option>
              <option value="tv">TvSerial</option>
              <option value="person">Actor/Actress</option>
              {/* <option value="collection">Collection</option> */}
            </select>
          </div>
          <input
            className="p-2 w-full outline-none text-zinc-950"
            type="text"
            required
            placeholder="What do you looking for..."
            {...register("searchValue")}
          />
          <button
            type="submit"
            className="bg-orange-500 text-zinc-50 flex items-center p-2"
          >
            <SearchOutlined />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Search;
