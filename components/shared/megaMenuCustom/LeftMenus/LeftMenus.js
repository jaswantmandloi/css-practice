
import styles from './LeftMenus.module.scss'
import {useKeyPress} from '../megaMenuCustomUtils'
import {useState, useEffect, useRef} from 'react'

export default function LeftMenus({
  menus,
  activeMenuId, 
  onToggleMenu,
  isLeftMenuActive,
  setIsLeftMenuActive
}) {

  // const [selected, setSelected] = useState(undefined);
  // const enterPress = useKeyPress("Enter");
  // const [hovered, setHovered] = useState(undefined);

  const [cursor, setCursor] = useState(0);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const rightPress = useKeyPress("ArrowRight");
  const leftPress = useKeyPress("ArrowLeft");

  const items = menus

  useEffect(() => {
    const eventData = {
      currentTarget: {
        dataset:{
          index: cursor
        }
      }
    }

    isLeftMenuActive && onToggleMenu(eventData)
  }, [cursor])

  useEffect(() => {
    if (isLeftMenuActive && items.length && downPress) {
      setCursor(prevState =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);

  useEffect(() => {
    if (isLeftMenuActive && items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    if (items.length && rightPress) {
      setIsLeftMenuActive(false)
    }
  }, [rightPress]);

  useEffect(() => {
    if (items.length && leftPress) {
      setIsLeftMenuActive(true)
    }
  }, [leftPress]);

  // useEffect(() => {
  //   if (items.length && enterPress) {
  //     setSelected(items[cursor]);
  //   }
  // }, [cursor, enterPress]);

  // useEffect(() => {
  //   if (items.length && hovered) {
  //     setCursor(items.indexOf(hovered));
  //   }
  // }, [hovered]);
  

  return <ul className={styles.leftMenu}>
          {menus.map(({id, label}, index) => {
            return <li 
              key={id} 
              data-index={id}
              className={styles.leftMenuItem}
              onMouseEnter={onToggleMenu}
              onFocus={onToggleMenu}
              className={id === activeMenuId ? styles.activeCursor : ''}
              >
                <a href="?movie">{label}</a>
            </li>
          })}
  </ul>
       

        

          
}

