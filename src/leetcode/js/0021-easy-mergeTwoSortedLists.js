// easy
// https://leetcode.com/problems/merge-two-sorted-lists/

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// solution v1
//  loop through the largest list
//   loop again inside the other list for all numbers that are equal to current one
//    add those to the list
function mergeTwoLists(list1, list2) {
  const response = []

  for (let i = 0; i < list1.length; i++) {
    const current = list1[i]

    response.push(current)
    let j = list2.indexOf(current)

    while (list2[j] === current) {
      response.push(current)
      j++
    }
  }

  return response
}

// FIX: is not counting numbers from the second list that are not in the first list
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // [1, 1, 2, 3, 4, 4]
