export function initUniqID() {
  let uniqID = 0

  return () => {
    uniqID += 1

    return uniqID
  }
}

export const getUniqID = initUniqID()
