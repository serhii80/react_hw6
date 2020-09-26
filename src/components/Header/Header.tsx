import React, { FC } from 'react';
import { Link } from './Link';
import { routes, AppRoute } from '../App/routes';
import styles from './Header.module.scss';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { UserInHeader } from './UserInHeader';

interface Props {
    onLogOut: () => void;
    UserName?: Record<string, any>;
}

const Header: FC<Props> = ({ onLogOut, UserName }: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                {routes.map(({ title, path, isHidden }: AppRoute, i: number) => {
                    return isHidden ? null : (
                        <Link key={i} title={title} path={path} />
                    );
                }
                )}
                <button onClick={onLogOut}>Log out</button>
                <UserInHeader data={UserName} />
                <span>{}</span>
            </div>
        </header>
    );
};

const MapStateToProps = ({ user }: AppState) => {
    return {
        UserName: user.userData,
    }
};

const ConnectedHeader = connect(MapStateToProps)(Header);

export { ConnectedHeader as Header };