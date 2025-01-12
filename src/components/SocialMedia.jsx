import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialMedia() {
    return (
        <section>
            <h2>Sosyal Medya</h2>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src='/linkedin_3536505.png' width={"32px"} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src='/twitter_5968830.png' width={"32px"} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src='/instagram_2111463.png' width={"32px"} />
            </a>
        </section>
    );
}

export default SocialMedia;
