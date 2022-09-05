import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const [title, SetTitle] = useState('');
  const [body, SetBody] = useState('');
  const [author, SetAuthor] = useState('mario');
  const [isPending, SetIsPending] = useState(false);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    console.log(blog);

SetIsPending(true)

fetch("http://localhost:8000/blogs", {
  method: 'POST',
  headers: {'Content-type': 'application/json'},
body: JSON.stringify(blog)
}).then (()=> {
  console.log("new blog added!")
  SetIsPending(false)
  history.push('/')
})

  };
  return (
    <div className="create">
      <h2> Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <label> Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => SetBody(e.target.value)}
        ></textarea>
        <select value={author} onChange={(e) => SetAuthor(e.target.author)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending  && <button>Add blog! </button>}
        {isPending && <button disabled> processing... </button>}

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
