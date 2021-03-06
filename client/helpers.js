/**
 * Returns the direction associated with a given `keyCode`.
 * 
 * @param {number} keyCode 
 */
export function keyCodeToDirection(keyCode) {
  switch(keyCode) {
    case 87: // w
    case 38: // up
      return 'up'

    case 68: // d
    case 39: // right
      return 'right'

    case 83: // s
    case 40: // down
      return 'down'

    case 65: // a
    case 37: // left
      return 'left'
  }
}
