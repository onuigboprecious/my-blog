import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <h2> hold on a bit bro</h2>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
    </div>
  );
};

export default Home;
