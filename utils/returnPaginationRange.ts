import _ from "lodash";

export const returnPaginationRange = (
  totalPage: number,
  page: number,
  // limit: number,
  siblings: number
) => {
  let totalPageNumInArray = 1 + siblings;
  if (totalPageNumInArray >= totalPage) {
    return _.range(1, totalPage + 1);
  }
  let leftSiblingsIndex = Math.max(page - siblings, 1);
  let showLeftDots = leftSiblingsIndex > 2;

  let rightSiblingsIndex = Math.min(page + siblings, totalPage);
  let showRightDots = rightSiblingsIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 1 + 2 * siblings;
    let leftRange = _.range(1, leftItemsCount + 1);
    return [...leftRange, "...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    let rightItemsCount = 1 + 3 * siblings;
    let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, "...", ...rightRange];
  } else {
    let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [1, "...", ...middleRange, "...", totalPage];
  }
};
