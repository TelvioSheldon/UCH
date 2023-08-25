import styled from 'styled-components';

const DialogComponent = styled.div`
        position: absolute;
        inset: 0;
        z-index: 2;    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.popUpBackground};

    .dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        min-height: 190px;
        max-width: 650px;
        max-height: 500px;
        background-color: ${({ theme }) => theme.palette.backgroundColor};
        border-radius: 3%;
        z-index: 3;

        .dialog--close-icon {
            align-self: flex-end;
            padding: 14px 14px 0 0;
            cursor: pointer;

            svg {
                height: 22px;
                width: 22px;
            }
        }

        .dialog-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            width: -webkit-fill-available;
            height: 100%;
            padding: 0 24px 28px 24px;

            .dialog-body__context-icon {
                height: 39px;
                width: 39px;
            }

            .dialog-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-style: normal;
                flex-grow: 1;
                text-align: center;
                margin-top: 12px;

                .dialog-content__title {
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 24px;
                }

                .dialog-content__description {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                }
            }

            .dialog-actions {
                display: flex;
                justify-content: space-between;
                width: -webkit-fill-available;
                gap: 20px;
                margin-top: 28px;

                .dialog-actions--item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 40px;
                    width: -webkit-fill-available;
                    border-radius: 6px;
                    padding: 12px 16px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                    outline: none;
                    border: transparent;
                    color: ${({ theme }) => theme.palette.backgroundColor};
                    cursor: pointer;
                }

                .dialog-actions--cancel {
                    background-color: ${({ theme }) => theme.palette.darkGrey };
                }

                .dialog-actions--confirm {
                    background-color: ${({ theme }) => theme.palette.primaryColor };
                }
            }
        }
        
    }
`;

export default DialogComponent;
