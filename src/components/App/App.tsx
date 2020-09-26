import * as React from 'react';
import { Route, RouteComponentProps, Redirect, Switch, RouteChildrenProps, withRouter } from 'react-router-dom';
import { routes, AppRoute, ROUTES_URLS } from './routes';
import { OAuth } from '../OAuth';
import { ProtectedRoute } from '../ProtectedRoute';
import { Header } from '../Header';
import styles from './App.module.scss';


interface AppProps extends RouteComponentProps { };


class App extends React.Component<AppProps> {


    private renderContent() {
        return (<main>
            <Switch>
                {routes.map(this.renderRoute)}
                <Route
                    path={ROUTES_URLS.OAUTH}
                    render={(props: RouteChildrenProps) => <OAuth {...props} />}
                />
                <Redirect to={ROUTES_URLS.NONE} />
            </Switch>
        </main>)
    }

    private renderRoute = (route: AppRoute, i: number) => {
        if (route.isProtected) {
            return (<ProtectedRoute
                exact={route.exact}
                key={i}
                path={route.path}
                render={route.render} />)
        } else {
            return (<Route
                key={i}
                exact={route.exact}
                path={route.path}
                render={(props) => route.render({ ...props })}
            />)
        }
    }

    public render() {
        return (<div className={styles.body}>
            <Header onLogOut={() => console.log('Заглушка')} />
            {this.renderContent()}
        </div>)
    }
}

const AppWithRouter = withRouter(App);

export { AppWithRouter as App };