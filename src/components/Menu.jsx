import '../styles/Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Amigos</a></li>
        <li><a href="#">Mensagens</a></li>
        <li><a href="#">Configurações</a></li>
      </ul>
    </nav>
  );
};

export default Menu;