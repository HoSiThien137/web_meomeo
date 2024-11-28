import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({to, href, primary,outline,small, large, text, disabled, rounded, className, leftIcon, rightIcon, children, onClick, ...passProps}){
    let Comp = 'button';
    const props ={
        onClick,
        ...passProps
    };

    // Remove event listener when even btn is disabled
    if(disabled){
        Object.keys(props).forEach((key) =>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to
        Comp =  Link
    }else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper',{
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });

    return (
        <Comp classNames={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    );
}

export default Button;