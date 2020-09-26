import { FC } from "react";
import React from "react";
import { Route, Redirect, RouteProps, RouteComponentProps } from "react-router-dom";
import { ROUTES_URLS } from "../App/routes";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { isLogin } from "../../store/auth";

interface ProtectedRouteProps extends RouteProps {
    isLogin?: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ render, isLogin, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routeCompProps: RouteComponentProps) =>
                isLogin ? (
                    render!(routeCompProps)
                ) : (
                        <Redirect
                            to={{
                                pathname: ROUTES_URLS.LOGIN,
                                state: { from: routeCompProps.location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        isLogin: isLogin(state)
    }
}

const ConnetedRoute = connect(mapStateToProps)(ProtectedRoute);

export { ConnetedRoute as ProtectedRoute };