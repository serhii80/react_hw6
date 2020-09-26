import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, setBoards } from '../../store';




interface DashboardProps {
    token: string;
    expireIn: number;
    myBoards: Record<string, any>[];
    isLoadindBoards: boolean;
    onGetBoards: (token) => void;
}

class Dashboard extends React.Component<DashboardProps> {
    componentDidMount() {
        this.props.onGetBoards(this.props.token);
    }

    private onClickDiv(e: any) {
        window.location.href = e;
    }

    private renderOneBoard(boards: any[]) {
        return (
            boards.map((board, i) => {
                const divStyle = {
                    width: '195px',
                    height: '100px',
                    color: 'white',
                    backgroundImage: 'url(' + board.prefs.backgroundImage + ')',
                    backgroundColor: board.prefs.backgroundColor,
                    backgroundSize: 'cover'
                };
                return (
                    <div key={i} style={divStyle} onClick={(e) => this.onClickDiv(board.url)}>{board.name}</div>
                )
            })
        )
    }

    public render() {
        if (this.props.isLoadindBoards) {
            return (<div>Data is loading</div>)
        }

        return (
            <div>
                <h2>Доски</h2>
                <div>{this.renderOneBoard(this.props.myBoards)}</div>
            </div >
        )
    }
}

const mapStateToProps = ({ boards, auth }: AppState) => {
    return {
        myBoards: boards.boardsData,
        isLoadindBoards: boards.isLoadindBoards,
        token: auth.token
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onGetBoards: (token) => dispatch(setBoards(token)),
    }
}

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export { ConnectedDashboard as Dashboard }