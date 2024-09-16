import Header from './Header';
import Menu from './Menu';
import Post from './Post';
import FriendsList from './FriendsList';
import SuggestionsList from './SuggestionsList';
import '../styles/App.css';

function App() {
  const friends = [
    { name: 'João Silva', photo: '/path/to/photo1.jpg', commonFriends: 12 },
    { name: 'Maria Oliveira', photo: '/path/to/photo2.jpg', commonFriends: 8 },
  ];

  const suggestions = [
    { name: 'Ana Costa', photo: '/path/to/photo3.jpg', commonFriend: 'João Silva' },
    { name: 'Lucas Ferreira', photo: '/path/to/photo4.jpg', commonFriend: 'Maria Oliveira' },
  ];

  const posts = [
    {
      image: '/path/to/post-image1.jpg',
      title: 'Viagem Incrível!',
      text: 'Acabei de voltar de uma viagem inesquecível...',
      date: '1 de Setembro',
      author: 'João Silva',
      likes: 120,
      shares: 30,
      comments: ['Uau, que legal!', 'Adorei as fotos!'],
    },
  ];

  return (
    <div className="app-grid">
      <Header />
      <Menu />
      <main className="feed">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </main>
      <aside className="friends">
        <FriendsList friends={friends} />
      </aside>
      <aside className="suggestions">
        <SuggestionsList suggestions={suggestions} />
      </aside>
    </div>
  );
}

export default App;