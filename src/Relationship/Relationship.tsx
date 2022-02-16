import * as React from "react";
import axios from 'axios';
import { SelectElement } from "../SelectElement";
import { groupBy } from "lodash";
import { useEffect, useState } from "react";
import IRelationShipProps from './IRelationshipProps';
import { ValueLabel } from "../../es/SelectElement/ISelectProps";

export default function Relationship(props: IRelationShipProps) {
  const [ivalue, setIvalue] = useState<ValueLabel>(props.value || props.defaultValue || null);
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!props.url) {
      return ""
    }
    setIsLoading(true)
    axios.get(props.url).then((res) => {
      setIsLoading(false)
      if (props.groupBy) {
        const grouped = groupBy(res.data, props.groupBy)
        const items = Object.keys(grouped).map(key => {
          const options = grouped[key].map(d => {
            return {
              label: d[props.labelField],
              value: d[props.valueField]
            }
          })
          return {
            label: key,
            options
          }
        })

        setItems(items)
      } else {
        const items = res.data.map(d => {
          return {
            label: d[props.labelField],
            value: d[props.valueField]
          }
        }
        )
        setItems(items)
      }
    })
  }, [])

  function handleChange(selectedItem) {
    setIvalue(selectedItem)
    return props.onChange?.(selectedItem);
  }

  return <SelectElement
    onChange={handleChange}
    title={props.title}
    value={ivalue}
    options={items}
    isLoading={isLoading}
    {...props}
  />
}
