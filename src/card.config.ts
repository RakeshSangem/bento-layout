export const CARD_SIZE_LARGE_WIDE = { w: 2, h: 0.5 };
export const CARD_SIZE_LARGE_SQUARE = { w: 2, h: 2 };
export const CARD_SIZE_TALL = { w: 1, h: 2 };
export const CARD_SIZE_SQUARE = { w: 1, h: 1 };
export const CARD_SIZE_WIDE = { w: 2, h: 1 };

export const getCardSizeType = (w: number, h: number) => {
  if (w === CARD_SIZE_LARGE_WIDE.w && h === CARD_SIZE_LARGE_WIDE.h) {
    return "LARGE_WIDE";
  }
  if (w === CARD_SIZE_LARGE_SQUARE.w && h === CARD_SIZE_LARGE_SQUARE.h) {
    return "LARGE_SQUARE";
  }
  if (w === CARD_SIZE_TALL.w && h === CARD_SIZE_TALL.h) {
    return "TALL";
  }
  if (w === CARD_SIZE_SQUARE.w && h === CARD_SIZE_SQUARE.h) {
    return "SQUARE";
  }
  if (w === CARD_SIZE_WIDE.w && h === CARD_SIZE_WIDE.h) {
    return "WIDE";
  }
  return "UNKNOWN";
};
