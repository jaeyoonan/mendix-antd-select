import { ReactElement, createElement } from "react";
import { MendixAntdDropdownContainerProps } from "../typings/MendixAntdDropdownProps";
import { Select, Space } from "antd";
import { ObjectItem } from "mendix";
import "./ui/MendixAntdDropdown.css";
const { Option } = Select;
export function MendixAntdDropdown({
    data,
    enableMultiSelect,
    singeSelectAssocation,
    multiSelectAssociation,
    content,
    disabled,
    showSearch,
    allowClear,
    autoClearSearchValue,
    defaultActiveFirstOption,
    defaultOpen,
    virtual,
    bordered,
    listHeight,
    showArrow,
    placeholder,
    size,
    placement,
    filterAttribute,
    filterType
}: MendixAntdDropdownContainerProps): ReactElement {
    const handleChange = (values: string | string[]) => {
        if (enableMultiSelect) {
            const selectedItem = data.items?.find(i => i.id === values);
            singeSelectAssocation?.setValue(selectedItem);
        } else {
            const selectedItems = data.items?.filter(i => i.id === values);

            multiSelectAssociation?.setValue(selectedItems);
        }
    };

    return (
        <Select
            showSearch={showSearch}
            mode={enableMultiSelect ? "multiple" : undefined}
            style={{ width: "100%" }}
            onChange={handleChange}
            disabled={disabled}
            filterOption={(input, option) => {
                if (!filterAttribute || !input || !data.items || data.items.length === 0) {
                    return true;
                }
                const item = data.items.find(i => i.id === option?.value);
                if (item) {
                    const text = (filterAttribute.get(item).value || "").toLowerCase();
                    const search = input.toLowerCase();
                    return filterType === "contains" ? text.includes(search) : text.startsWith(search);
                } else {
                    return false;
                }
            }}
            allowClear={allowClear}
            autoClearSearchValue={autoClearSearchValue}
            defaultActiveFirstOption={defaultActiveFirstOption}
            defaultOpen={defaultOpen}
            virtual={!virtual}
            bordered={bordered}
            listHeight={listHeight}
            showArrow={showArrow}
            placeholder={placeholder}
            size={size}
            placement={placement}
        >
            {data.items?.map((item: ObjectItem) => {
                const optionContent = content?.get(item);

                return (
                    <Option value={item.id} data-id={item.id} label={item.id}>
                        <Space wrap>{optionContent}</Space>
                    </Option>
                );
            })}
        </Select>
    );
}
