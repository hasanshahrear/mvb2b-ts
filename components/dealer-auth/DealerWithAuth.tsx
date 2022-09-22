import React from "react";

function withAuth(Component:React.FC) {
    function Auth(props:any) {

        return <Component {...props} />
    }
    return Auth
}
export default withAuth;