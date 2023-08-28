import styled from 'styled-components';

const AppWrapperScreen = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 24px;
    height: 100%;
    width: 100%;
    gap: 12px;


    .page-wrapper {
        height: 0%;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
    }

    .page__title {
        text-align: center;
        margin-bottom: 5px;
    }

    .footer {
        
    }

`;

export default AppWrapperScreen;