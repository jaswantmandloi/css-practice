import styles from './RightMenus.module.scss'
import {useKeyPress} from '../megaMenuCustomUtils'

import {useState, useEffect, useRef} from 'react'

export default function RightMenus({
    menus,
    isLeftMenuActive
}) {

    const [selectedItem, setSelectedItem] = useState(null);
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const items = useRef([]).current
    const cursor = useRef(0)

    useEffect(() => {
        // Create linear list
        menus.forEach(({id, innerMenus}) => {
            items.push({id})
            items.push(...innerMenus)
        })
    }, [])

    useEffect(() => {
        if (!isLeftMenuActive && items.length && upPress) {
            cursor.current = (cursor.current > 0 ? cursor.current - 1 : cursor.current)
            const selectedId = items[cursor.current].id
            setSelectedItem(selectedId)
        }
    }, [upPress]);

    useEffect(() => {
        if (!isLeftMenuActive && items.length && downPress) {
            cursor.current = cursor.current < items.length - 1 ? cursor.current + 1 : cursor.current
            const selectedId = items[cursor.current].id
            setSelectedItem(selectedId)
        }
    }, [downPress]);

    return <section>
             <div className = {styles.rightNav} >
                {menus.map(({id, label, innerMenus}) => {
                    
                    return <div key={id}> 
                        <label
                        className={selectedItem === id ? styles.activeCursor : ''}
                        >
                            <a  href="?innerMenus&genre=0">{label}</a>
                        </label>
                        <ul key={id}>
                            {innerMenus.map(({id, label}) => {
                                
                                return <li key={id} 
                                className={selectedItem === id ? styles.activeCursor : ''}>
                                    <a  href="?innerMenus&genre=0">{label}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </section>
                 
}

