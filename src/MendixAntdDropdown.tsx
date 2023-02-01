import { ReactElement, createElement } from "react";
import { MendixAntdDropdownContainerProps } from "../typings/MendixAntdDropdownProps";
import { Dropdown } from "./components/Dropdown";

import "./ui/MendixAntdDropdown.css";

export function MendixAntdDropdown(props: MendixAntdDropdownContainerProps): ReactElement {
    return <Dropdown {...props} />;
}
