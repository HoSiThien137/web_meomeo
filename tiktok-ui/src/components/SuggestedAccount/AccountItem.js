import classNames from "classnames/bind";
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return(
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://codecademy.com/profiles/Christine_Yang"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>meomeomeo</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Meo Meo</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;