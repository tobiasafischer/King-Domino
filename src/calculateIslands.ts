// dfs each change of islands, count the number inside of the islands
// for each checked area, compare to the crowns, return the multiplication
export const calculatePoints = (points: string[][], crowns: number[][]) => {
   if (points.length !== crowns.length) return 0

   const board: any[][] = [...points]
   let counter = 0
   let tempCrowns = 0
   let tempPoints = 0

   // we want to dfs through to find contiguous islands
   const dfs = (i: number, j: number, type: string | null) => {
      // if we are in bounds and our current index is equivalent to expected type
      if (i >= 0 && j >= 0 && i < board.length && j < board[i].length && board[i][j] === type) {
         // if this index for this type corresponds to the crowns board increment
         if (crowns[i][j] === 1) tempCrowns++
         tempPoints++
         // clear the area we already passed over
         board[i][j] = null
         // recursive dfs to find contiguous islands
         dfs(i + 1, j, type) // top
         dfs(i, j + 1, type) // right
         dfs(i - 1, j, type) // bottom
         dfs(i, j - 1, type) // left
      }
   }

   // we need a prev type to see when we want to increment our counter
   // and reset our current contiguous island incase we have other islands of the same
   // type further down the tree
   for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
         // if current idx is not null AKA has not already been counted in DFS
         if (board[i][j] !== null) {
            const type = `${board[i][j]}` // type of island
            dfs(i, j, type)
            // after the dfs is done, we increment our counter
            counter += tempCrowns * tempPoints
            tempCrowns = 0
            tempPoints = 0
         }
      }
   }

   return counter
}
