import React, {ComponentType, Suspense} from "react";
import Preloader from "../assets/Preloader/Preloader";

export function withSuspense <WCP>(WrappedComponent:ComponentType<WCP>) {
    return (props: WCP) => {
        return <Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props}/>
        </Suspense>
    }
}