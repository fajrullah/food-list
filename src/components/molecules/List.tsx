import Label from "@/components/atoms/Label";
import style from "./style.module.css";

interface ListProps {
    readonly items: string[]
}

/**
 * List Component
 *
 * A React component that renders an unordered list (ul) with items from an array.
 *
 * @component
 *
 * @param {object} props - The properties of the List component.
 * @param {string[]} props.items - An array of strings representing the items to be displayed in the list.
 *
 * @returns {JSX.Element} List component.
 *
 * @example
 * // Basic usage of the List component
 * const myListItems = ["Item 1", "Item 2", "Item 3"];
 * <List items={myListItems} />
 */

function List({ items }: ListProps) {
    return (
        <ul className={style.horizontalList}>
            {
                items.map((key) => <li key={key}><Label label={key} /></li>)
            }
        </ul>
    )
}

export default List;