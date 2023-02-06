import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <div></div>;
}

export function getPreviewCss(): string {
    return require("./ui/MendixAntdSelect.css");
}
