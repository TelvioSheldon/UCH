import ButtonComponent from './button-styles';
import { ButtonProps } from './button-types';

function Button({ children: content, mode = 'NORMAL', actionFn }: ButtonProps) {
    return (
        <ButtonComponent
            onClick={actionFn}
            mode={mode}
        >
            {content}
        </ButtonComponent>
    );
}

export default Button;