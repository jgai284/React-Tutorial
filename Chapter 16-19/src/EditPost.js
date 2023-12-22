import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
  handleEdit,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  // Initialize the current title and body
  useEffect(() => {
    setEditTitle(post.title);
    setEditBody(post.body);
  }, []);

  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleEdit(post.id)}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default EditPost;