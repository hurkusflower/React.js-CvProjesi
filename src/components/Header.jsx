
import './Header.css';

function Header() {
  return (
    <div className="container">
      <header>
        <img src="public/profil.jpg" alt="Profil Fotoğrafı" className="profile-pic" />
        <h1>Melike Erol</h1>
        <p><strong>İletişim:</strong> melikeerol@example.com | <strong>Telefon:</strong> 123-456-7890</p>
      </header>
    </div>
  );
}

export default Header;

