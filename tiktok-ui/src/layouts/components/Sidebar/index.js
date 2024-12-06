import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import config from "~/config";
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "~/components/Icons";
import SuggestedAccount from "~/components/SuggestedAccount";

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside  className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon/>}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>}/>

            </Menu>
            <SuggestedAccount label="Suggested accounts"></SuggestedAccount>
            <SuggestedAccount label="Following accounts"></SuggestedAccount>

        </aside>
    );
}

export default Sidebar;          