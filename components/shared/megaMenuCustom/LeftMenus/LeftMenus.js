
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
  const listRef = useRef(null)

  const items = menus
  useEffect(() => {
    const observer = new MutationObserver(function (event) {
      event.forEach(mutation => {
        const {target:selectedElement = {}} = mutation
        selectedElement && 
        selectedElement?.classList?.contains(styles.activeCursor)
        && selectedElement?.focus()
      })
      
    });

    listRef.current && observer.observe(listRef.current, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true,
      characterData: false
    })

    return () => {
      observer.disconnect()
    }

  }, [listRef.current])

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

