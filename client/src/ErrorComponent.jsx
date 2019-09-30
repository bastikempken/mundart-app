import React from "react";
import Octicon, { Alert } from "@primer/octicons-react";

export const ErrorComponent = () => (
    <>
        <blockquote className={"blockquote text-center"}>
            <h1>Es ist ein Fehler aufgetreten :-(</h1>
            <Octicon icon={Alert} size="large" />
            <p>ERROR</p>
            <p>Bitte versuchen Sie es erneut.</p>
        </blockquote>
    </>
);
