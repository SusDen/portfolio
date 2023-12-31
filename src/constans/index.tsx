import {useEffect, useRef} from "react";

export const lightThemeNavbarStyles: any = {
  menuBackground: 'white',
  menuColor: 'black',
  menuFilter: 'invert(0)',
}
export const darkThemeNavbarStyles: any = {
  menuBackground: 'black',
  menuColor: 'white',
  menuFilter: 'invert(1)',
}
export const fillArray = (amount: number, i: number = 0): number[] => {
  let array: number[] = [];
  for (i; i < amount; i++) {
    array.push(i);
  }
  return array
}
export const randomInt = (max: number,): number => {
  return Math.floor(Math.random() * max)
}
export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export const Direction = {
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  LEFT: 'LEFT'
}
export const getDirectionFromKey = (key: string) => {

  switch (key) {
    case 'w':
    case 'ц':
    case 'ArrowUp':
      return Direction.UP
    case 'a':
    case 'ф':
    case 'ArrowLeft':
      return Direction.LEFT
    case 'd':
    case 'в':
    case 'ArrowRight':
      return Direction.RIGHT
    case 's':
    case 'ы':
    case 'ArrowDown':
      return Direction.DOWN
    default:
      return ''
  }
};