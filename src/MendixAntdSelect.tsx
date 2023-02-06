import { ReactElement, createElement } from "react";
import { MendixAntdSelectContainerProps } from "../typings/MendixAntdSelectProps";
import { Select } from "./components/Select";

import "./ui/MendixAntdSelect.css";

export function MendixAntdSelect(props: MendixAntdSelectContainerProps): ReactElement {
    return <Select {...props} />;
}
