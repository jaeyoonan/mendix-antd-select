import { ReactElement, createElement, useState, useEffect } from "react";
import { MendixAntdDropdownContainerProps } from "../../typings/MendixAntdDropdownProps";
import { Select, Space } from "antd";
import { ObjectItem, GUID } from "mendix";

const { Option } = Select;
export const Dropdown = ({
    data,
    enableMultiSelect,
    singleSelectAssociation,
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
    keyAttribute,
    filterType,
    onChange,
    contextObjectId
}: MendixAntdDropdownContainerProps): ReactElement => {
    const defaultValues: GUID[] | GUID = enableMultiSelect
        ? multiSelectAssociation?.value?.map(i => i.id) || []
        : singleSelectAssociation?.value?.id || [];
    const [selectedValues, setSelectedValues] = useState<GUID[] | GUID>(defaultValues);
    useEffect(() => {
        setSelectedValues(defaultValues);
    }, [contextObjectId]);
    const handleChange = (values: GUID | GUID[]) => {
        if (enableMultiSelect) {
            const selectedItems = data.items?.filter(i => values.includes(i.id));
            multiSelectAssociation?.setValue(selectedItems);
            setSelectedValues(values);
        } else {
            const selectedItem = data.items?.find(i => i.id === values);
            singleSelectAssociation?.setValue(selectedItem);
            Array.isArray(values) ? setSelectedValues(values) : setSelectedValues([values]);
        }
        if (onChange?.canExecute) {
            onChange?.execute();
        }
    };

    return (
        <Select
            showSearch={showSearch}
            mode={enableMultiSelect ? "multiple" : undefined}
            style={{ width: "100%" }}
            onChange={handleChange}
            disabled={disabled}
            value={selectedValues}
            defaultValue={[]}
            filterOption={(input, option) => {
                if (!keyAttribute || !input || !data.items || data.items.length === 0) {
                    return true;
                }
                const item = data.items.find(i => i.id === option?.value);
                if (item) {
                    const text = (keyAttribute.get(item).value || "").toLowerCase();
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
            optionLabelProp="optionLabel"
        >
            {data.items?.map((item: ObjectItem) => {
                const optionContent = content?.get(item);
                const key = (keyAttribute.get(item).value || "").toLowerCase();
                return (
                    <Option value={item.id} label={item.id} optionLabel={key}>
                        <Space wrap>{optionContent}</Space>
                    </Option>
                );
            })}
        </Select>
    );
};
