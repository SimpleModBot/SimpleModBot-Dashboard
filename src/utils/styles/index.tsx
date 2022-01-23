import styled, { css } from 'styled-components';

export const HomeButton = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    width: 400px;
    border-radius: 5px;
    border: 1px solid #58585863;
    background-color: #2121214a;
    margin: 5px 0;
    box-shadow: 0px 1px 5px 0px #000000;
`;

export const TextButton = styled(HomeButton)`
    padding: 10px 15px;
    width: 90%;
    background-color: #2727274a;
`;

export const GuildItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    background-color: #2121214a
    border-radius: 5px;
    border: 1px solid #58585863;
    margin: 8px 0;
    box-shadow: 0px 1px 5px 0px #000000;
`;

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const AppbarStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    background-color: #2121212a;
    border-bottom:1px solid #58585863;
`;

export const Title = styled.p`
    font-size: 25px;
`;

type FlexProps = Partial<{
    alignItems: string;
    justifyContent: string;
    flexDirection: string;
}>

export const Flex = styled.div<FlexProps>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 10px;
`;

export const CategoryContainer = styled.div`
    align-items: center;
    padding: 10px 25px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #58585863;
    background-color: #2626264a;
    margin: 5px 0px;
    box-shadow: 0px 1px 5px 0px #000000;
`;

export const InputField = styled.input`
    padding: 12px 14px;
    box-sizing: border-box;
    font-size: 16px;
    font-color: #ffffff;
    background-color: inherit;
    border-radius: 5px;
    border: 1px solid #58585863;
    outline: none;
    width: 100%;
    :focus {
        outline: 1px solid #ffffff5a;
    };
`;

type ButtonProps = {
    variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
    width: 175px;
    border-radius: 5px;
    padding: 8px 20px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #ffffff;
    ${({ variant }) =>
            variant === 'primary' && css`
        background-color: #006ed3;
    `}
    ${({ variant }) =>
            variant === 'secondary' && css`
        background-color: #3d3d3d;
    `};
    ${({ variant }) =>
            variant === 'success' && css`
        background-color: #0ce822;
    `};
    ${({ variant }) =>
            variant === 'warning' && css`
        background-color: #ede90e;
    `};
    ${({ variant }) =>
            variant === 'danger' && css`
        background-color: #f44336;
    `};
    ${({ variant }) =>
            variant === 'info' && css`
        background-color: #008CBA;
    `};
    ${({ variant }) =>
            variant === 'light' && css`
        background-color: #ffffff;
    `};
    ${({ variant }) =>
            variant === 'dark' && css`
        background-color: #555555;
    `};
`;