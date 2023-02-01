/**
 * This file was generated from MendixAntdDropdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ListWidgetValue, ReferenceValue, ReferenceSetValue } from "mendix";

export type FilterTypeEnum = "contains" | "startsWith";

export type SizeEnum = "large" | "middle" | "small";

export type PlacementEnum = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

export interface MendixAntdDropdownContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    contextObjectId: EditableValue<string>;
    data: ListValue;
    content: ListWidgetValue;
    keyAttribute: ListAttributeValue<string>;
    enableMultiSelect: boolean;
    singleSelectAssociation?: ReferenceValue;
    multiSelectAssociation?: ReferenceSetValue;
    disabled: boolean;
    allowClear: boolean;
    autoClearSearchValue: boolean;
    defaultActiveFirstOption: boolean;
    defaultOpen: boolean;
    virtual: boolean;
    onChange?: ActionValue;
    showSearch: boolean;
    filterType: FilterTypeEnum;
    bordered: boolean;
    listHeight: number;
    showArrow: boolean;
    placeholder: string;
    size: SizeEnum;
    placement: PlacementEnum;
}

export interface MendixAntdDropdownPreviewProps {
    readOnly: boolean;
    contextObjectId: string;
    data: {} | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    keyAttribute: string;
    enableMultiSelect: boolean;
    singleSelectAssociation: string;
    multiSelectAssociation: string;
    disabled: boolean;
    allowClear: boolean;
    autoClearSearchValue: boolean;
    defaultActiveFirstOption: boolean;
    defaultOpen: boolean;
    virtual: boolean;
    onChange: {} | null;
    showSearch: boolean;
    filterType: FilterTypeEnum;
    bordered: boolean;
    listHeight: number | null;
    showArrow: boolean;
    placeholder: string;
    size: SizeEnum;
    placement: PlacementEnum;
}
