import {useState, useEffect} from 'react'

//https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys



const ListItem = ({ item, active, setSelected, setHovered }) => (
  <div
    className={`item ${active ? "active" : ""}`}
    onClick={() => setSelected(item)}
    onMouseEnter={() => setHovered(item)}
    onMouseLeave={() => setHovered(undefined)}
  >
    {item.name}
  </div>
);



export const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler(event) {
        const {key} = event
        console.log('key', key)
        if (key === targetKey) {
            event.preventDefault()
            setKeyPressed(true);
        }
    }

    const upHandler = (event) => {
        const {key} = event
        if (key === targetKey) {
            event.preventDefault()
            setKeyPressed(false);
        }
    };

    

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    });

    return keyPressed;
};


export const useKeyPressEvent = function (captureEvents) {
    const [keyEvent, setKeyEvent] = useState({});

    function downHandler(event) {
        const {key} = event
        console.log('key', event)
        if (captureEvents.includes(key)) {
            event.preventDefault()
            setKeyEvent({
                key,
                lastUpdateTime: new Date().getTime()
            })
        }
    }

    const upHandler = (event) => {
        const {key} = event
        if (captureEvents.includes(key)) {
            event.preventDefault()
            setKeyEvent({
                key
            })
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
         //window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            //window.removeEventListener("keyup", upHandler);
        };
    });

    return keyEvent;
};

export const useMutationObservation = function({
    observingElement,
    observerHandler
}) {
    useEffect(() => {
        let observer = null
        if (observingElement) {
            observer = new MutationObserver(observerHandler);
            observer.observe(observingElement, {
                attributes: true,
                attributeFilter: ['class'],
                subtree: true,
                characterData: false
            })
        }
        
        return () => {
            observer && observer?.disconnect()
        }

    }, [observingElement])
}

export const KEYS = {
    ARROW_DOWN: "ArrowDown",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_LEFT: "ArrowLeft"
}