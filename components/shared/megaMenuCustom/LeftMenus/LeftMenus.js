
import styles from './LeftMenus.module.scss'
import {
  useKeyPressEvent,
  KEYS,
  useMutationObservation
} from '../megaMenuCustomUtils'
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
  const {key, lastUpdateTime} = useKeyPressEvent([
    KEYS.ARROW_DOWN,
    KEYS.ARROW_UP,
    KEYS.ARROW_RIGHT,
    KEYS.ARROW_LEFT
  ])
  const downPress = key === KEYS.ARROW_DOWN;
  const upPress = key === KEYS.ARROW_UP;
  const rightPress = key === KEYS.ARROW_RIGHT;
  const leftPress = key === KEYS.ARROW_LEFT;
  const listRef = useRef(null)
  const items = menus

  useMutationObservation({
    observerHandler: mutationObserver,
    observingElement: listRef.current
  })

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
  }, [downPress, lastUpdateTime]);

  useEffect(() => {
    if (isLeftMenuActive && items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, lastUpdateTime]);

  useEffect(() => {
    if (items.length && rightPress) {
      setIsLeftMenuActive(false)
    }
  }, [rightPress, lastUpdateTime]);

  useEffect(() => {
    if (items.length && leftPress) {
      setIsLeftMenuActive(true)
    }
  }, [leftPress, lastUpdateTime]);

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
  
  
  return <ul className={styles.leftMenu} ref={listRef} >
          {menus.map(({id, label}, index) => {

            const elementSelectionProps = {
              onMouseEnter:onToggleMenu,
              onFocus:onToggleMenu,
              ["data-index"]:id,
              className:id === activeMenuId ? styles.activeCursor : ''
            }

            return <li 
              key={id} 
              className={styles.leftMenuItem}
              
              >
                <a 
                href="?movie"
                {...elementSelectionProps}
                >{label}</a>
            </li>
          })}
  </ul>
          
}


const mutationObserver = function (event) {
    event.forEach(mutation => {
      const {
        target: selectedElement = {}
      } = mutation
      selectedElement &&
        selectedElement?.classList?.contains(styles.activeCursor) &&
        selectedElement?.focus()
    })
}