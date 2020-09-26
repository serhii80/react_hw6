import { connect } from 'react-redux';
import { setUserProfile } from '../../store/userProfile';
import { AppState } from '../../store';
import { Profile } from './Profile';

const MapStateToProps = ({ user, auth }: AppState) => {
    return {
        currentUser: user.userData,
        isLoadindProfile: user.isLoadindProfile,
        token: auth.token,
    }
}

const MapDispatchToProps = (dispatch: any) => {
    return {
        onGetUserProfile: (token) => dispatch(setUserProfile(token))
    }
}

const ConnectedProfile = connect(MapStateToProps, MapDispatchToProps)(Profile);

export { ConnectedProfile as Profile };