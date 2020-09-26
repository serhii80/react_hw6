import React from 'react';


interface ProfileProps {
    currentUser: Record<string, any>;
    isLoadindProfile: boolean;
    token: string;
    onGetUserProfile: (token) => void;
}


export class Profile extends React.Component<ProfileProps> {
    componentDidMount() {
        this.props.onGetUserProfile(this.props.token);
    }
    public render() {
        if (this.props.isLoadindProfile) {
            return (<div>Data is loading</div>)
        }
        const { email, avatarUrl, fullName, username, url }: Record<string, any> = this.props.currentUser;
        const avatarFullUrl = `${avatarUrl}/original.png`;
        return (
            <div>
                <p>Profile page</p>
                <div>Email <p>{email}</p></div>
                <div>Avatar <p><img src={avatarFullUrl} alt='Must be an avatar'></img></p></div>
                <div>Fullname <p>{fullName}</p></div>
                <div>Username <p>{username}</p></div>
                <div>User page <a href={url}>{url}</a></div>
            </div >
        )
    }
}

