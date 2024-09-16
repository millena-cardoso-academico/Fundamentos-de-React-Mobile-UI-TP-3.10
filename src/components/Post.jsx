import PropTypes from 'prop-types';
import '../styles/Post.css';

const Post = ({ image, title, text, date, author, likes, shares, comments }) => {
  return (
    <div className="post">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="post-info">
        <span>{date}</span> | <span>{author}</span>
      </div>
      <div className="post-actions">
        <span>{likes} Curtidas</span> | <span>{shares} Compartilhamentos</span>
      </div>
      <div className="post-comments">
        <h4>Comentários:</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Post;