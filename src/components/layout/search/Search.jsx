import { Container } from "./search.style";
import { SearchOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { register,reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitSearch = (data) => {
    const { type, searchValue } = data;
    reset()
    navigate(`/search/${type}/${searchValue}/1`);
  };
  return (
    <Container>
      <form
        onSubmit={handleSubmit(submitSearch)}
        className="flex items-stretch"
      >
        <div className="relative  text-zinc-950 w-[140px]   flex items-center justify-center">
          <select
            className="w-full h-full bg-gray-700 text-white outline-none"
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
          placeholder="Search for a movie or tv show..."
          {...register("searchValue")}
        />
        <button
          type="submit"
          className="bg-orange-500 text-zinc-50 flex items-center p-2"
        >
          <SearchOutlined />
        </button>
      </form>
    </Container>
  );
};

export default Search;
