import { DialogProps } from './dialog-types';
import DialogComponent from './dialog-style';
import { ReactComponent as CloseDialogIcon } from '../../Assets/icons/ic_close.svg';
import Button from '../Button/Button';


function Dialog(props: DialogProps) {

    return (
        <>
            {props.isOpen
                ? <DialogComponent>
                    <div className="backdrop" onClick={props.onCloseFn} />
                    <div className='dialog'>
                        <div className='dialog__close-icon' onClick={props.onCloseFn}>
                            <CloseDialogIcon />
                        </div>
                        <div className="dialog-body">
                            {props.contextIcon && <props.contextIcon className='dialog-body__context-icon' />}
                            <div className="dialog-content">
                                <span className='dialog-content__title'>{props.content.title}</span>
                                <span className='dialog-content__description'>
                                    {props.content.description}
                                </span>
                            </div>
                            <div className='dialog-actions'>
                                <Button mode='CANCEL' actionFn={props.primaryActionFn}>{props.primaryActionLabel}</Button>
                                <Button actionFn={props.secondaryActionFn}>{props.secondaryActionLabel}</Button>
                            </div>
                        </div>
                    </div>
                </DialogComponent>
                : null
            }
        </>     
    );
}

export default Dialog;