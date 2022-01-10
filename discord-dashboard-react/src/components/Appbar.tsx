import { AppbarStyle } from '../utils/styles';
import { useContext } from 'react';
import { GuildContext } from '../utils/ctx/GuildContext';

export const Appbar = () => {
    const { guildID } = useContext(GuildContext);
    const imag = require(`../assets/${guildID || '1003'}.png`);

    return <AppbarStyle>
        <img style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            boxShadow: '0px 1px 5px 0px #000000',
        }} src={imag}></img>
        <p style={{ fontSize: '20px', fontWeight: 'normal' }}>Configuring {guildID}</p>
    </AppbarStyle>
};