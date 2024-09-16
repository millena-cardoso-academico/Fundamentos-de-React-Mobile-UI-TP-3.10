import PropTypes from 'prop-types';
import '../styles/SuggestionsList.css';

const SuggestionsList = ({ suggestions }) => {
  return (
    <div className="suggestions-list">
      <h2>Sugestões de Amizade</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <img src={suggestion.photo} alt={suggestion.name} />
            <div>
              <h4>{suggestion.name}</h4>
              <p>Amigo em comum: {suggestion.commonFriend}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

SuggestionsList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    commonFriend: PropTypes.string.isRequired,
  })).isRequired,
};

export default SuggestionsList;