import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { HomeButton } from '../utils/styles/index';
import '../utils/css/home.css';

export function Home() {
    return (
        <div style={{
            height: '100%',
            padding: '10px 25px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <div></div>
            <div>
                <HomeButton onClick={() => {
                    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=911112976793215006&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmenu&response_type=code&scope=identify%20guilds%20guilds.join';
                }}>
                    <FaDiscord size={45} color='5865F2' />
                    <p style={{ fontSize: '20px' }}>Login with Discord</p>
                </HomeButton>
                <HomeButton onClick={() => {
                    window.location.href = 'https://discord.gg/49KeKwXc8g';
                }}>
                    <FaQuestionCircle size={45} />
                    <p style={{ fontSize: '20px' }}>Support Server</p>
                </HomeButton>
            </div>

            <div style={{
                display: 'flex',
                width: '200px',
                justifyContent: 'space-between',
            }}>
                <a className='a'>Privacy Policy</a>
                <a className='a'>Contact</a>
            </div>
        </div>
    );
};