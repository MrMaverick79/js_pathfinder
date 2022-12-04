//Brief: Create a pathfinding program in js that finds the shortest path from point A to point B in a 2 dimensional grid

//Then represent the path using HTML and CSS

//establish a grid

let grid = [];
const gridSize = 4;

for (let i = 0; i < gridSize; i++) {
    grid[i] = []
    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = 1 //1 = Open
        
    }
    
}; 


//Establish a (B)egin  and (F)inish
grid[0][0] = 'B' 
grid[3][3] = 'E'

console.log(grid);








// A* 
//What A* Search Algorithm does is that at each step it picks the node according to a value-‘f’ which is a //!parameter equal to the sum of two other parameters – ‘g’ and ‘h’. At each step it picks the node/cell having the lowest ‘f’, and process that node/cell.

// A* Search Algorithm
// 1.  Initialize the open list
let openList = [];
// 2.  Initialize the closed list
let closedList = [];
//     put the starting node on the open 
//     list (you can leave its f at zero)
let startNode = {
    f: 0,
    pos: grid[0][0],
    parent: null
}

let testNode = {
    f: 1,
    pos: grid[1][0],
    parent: grid[0][0]
}
openList.push(testNode, startNode)


// 3.  while the open list is not empty
//     a) find the node with the least f on 
//        the open list, call it "q"
// while (openList.length > 0) {
    let q = openList.sort((a , b)=> a.f - b.f)[0]
    //b) pop q off the open list
    openList.shift()
   

// }

//    
  
//     c) generate q's 8 successors and set their 
//        parents to q
   
//     d) for each successor
//         i) if successor is the goal, stop search
        
//         ii) else, compute both g and h for successor
//           successor.g = q.g + distance between 
//                               successor and q
//           successor.h = distance from goal to 
//           successor (This can be done using many 
//           ways, we will discuss three heuristics- 
//           Manhattan, Diagonal and Euclidean 
//           Heuristics)
          
//           successor.f = successor.g + successor.h

//         iii) if a node with the same position as 
//             successor is in the OPEN list which has a 
//            lower f than successor, skip this successor

//         iV) if a node with the same position as 
//             successor  is in the CLOSED list which has
//             a lower f than successor, skip this successor
//             otherwise, add  the node to the open list
//      end (for loop)
  
//     e) push q on the closed list
//     end (while loop)

