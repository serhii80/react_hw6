import React, { FC } from 'react';

interface Props {
    data?: object;
}

export const UserInHeader: FC<Props> = ({ data }: Props) => {
    let fullName = 'fullName';
    let avatarUrl = 'avatarUrl';
    if (data !== undefined && fullName in data) {
        return (
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <span>{data[fullName]}</span>
                <span><img alt='Avatar' src={data[avatarUrl] + '/original.png'} style={{ height: '30px', background: 'white', borderRadius: '50%' }}></img></span>
            </span >
        )
    }
    return null
} 