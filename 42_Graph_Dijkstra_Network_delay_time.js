// https://leetcode.com/problems/network-delay-time/
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
// Priority Queue implementation
// Priority Queue implementation
class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
      this._heap = [];
      this._comparator = comparator;
    }
  
    size() {
      return this._heap.length;
    }
  
    peek() {
      return this._heap[0];
    }
  
    isEmpty() {
      return this._heap.length === 0;
    }
  
    _parent(idx) {
      return Math.floor((idx - 1) / 2);
    }
  
    _leftChild(idx) {
      return idx * 2 + 1;
    }
  
    _rightChild(idx) {
      return idx * 2 + 2;
    }
  
    _swap(i, j) {
      [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
  
    _compare(i, j) {
      return this._comparator(this._heap[i], this._heap[j]);
    }
  
    push(value) {
      this._heap.push(value);
      this._siftUp();
  
      return this.size();
    }
  
    _siftUp() {
      let nodeIdx = this.size() - 1;
  
      while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
        this._swap(nodeIdx, this._parent(nodeIdx));
        nodeIdx = this._parent(nodeIdx);
      }
    }
  
    pop() {
      if (this.size() > 1) {
        this._swap(0, this.size() - 1);
      }
  
      const poppedValue = this._heap.pop();
      this._siftDown();
      return poppedValue;
    }
  
    _siftDown() {
      let nodeIdx = 0;
  
      while (
        (this._leftChild(nodeIdx) < this.size() &&
          this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
        (this._rightChild(nodeIdx) < this.size() &&
          this._compare(this._rightChild(nodeIdx), nodeIdx))
      ) {
        const greaterChildIdx =
          this._rightChild(nodeIdx) < this.size() &&
          this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
            ? this._rightChild(nodeIdx)
            : this._leftChild(nodeIdx);
  
        this._swap(greaterChildIdx, nodeIdx);
        nodeIdx = greaterChildIdx;
      }
    }
  }
  
   const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]
  
  const networkDelayTime = function(times, N, k) {
    // time: N
    const distances = new Array(N).fill(Infinity);
    // timeL n
    const adjList = distances.map(() => []);
    // since k starts from 0 and our array index starts at 0: convert index
    distances[k - 1] = 0;
    
    // priority queue to save the smallest value of distance
    // space: priority queue at max size of size n
    const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    // start with our initial k value. 
    heap.push(k - 1);
    // after pushing, the priority queue will arrange itself to yield the smallest value as a first value
    
    // fill in our adjacency list based on our time array.
    // time: edge, or E
    // space: adjacency list in the size of E
    for(let i = 0; i < times.length; i++) {
      const source = times[i][0];
      const target = times[i][1];
      const weight = times[i][2];
    //   -1 is to convert index to 0 base
      adjList[source - 1].push([target - 1, weight]);
    }
    
    // as long as there's value inside the heap, perform Dijkstra
    while(!heap.isEmpty()) {
      const currentVertex = heap.pop();
    //   time: removing the value will also reshuffle the heap. Here, there are n removals that could happen. So this will run in logN time
  
      const adjacent = adjList[currentVertex];
      for(let i = 0; i < adjacent.length; i++) {
        // inside the adjacency list, every value is an array. The first value is the index of this vertex.
        const neighboringVertex = adjacent[i][0];
        // the second value inside the adjacent array is the weight.
        const weight = adjacent[i][1];
        // if current weight of our vertex plus the new weight of the edge to that value < the distance of what's already been stored at that vertex
        if(distances[currentVertex] + weight < distances[neighboringVertex]) {
            // then, we'll want to update the value
            distances[neighboringVertex] = distances[currentVertex] + weight;
            heap.push(neighboringVertex);
            // after pushing, the priority queue will arrange itself to yield the smallest value as a first value
            // Time: we don't allow for duplicate value in the priority queue (we didn't modify the push function in the priority queue in this case. But just know we could modify to not allow duplicate value)
            // the number of time we update the queue is based on how many edges coming in to that node, we'll need to reshuffle the queue every time. Whenever we shuffle, as we know, it will run in logN time
        }
      }
    }
    
    const ans = Math.max(...distances);
  
    return ans === Infinity ? -1 : ans;
  };
  
  console.log(networkDelayTime(t, 5, 1))
//   Time: 2n + e + (e x logn) + (n x logn). 
// 2 got removed, n is smaller than (n x logn), so we'll get (e x logn) + (n x logn)
// However, we know that n is smaller than e (edges), so we won't count that either. And e is smaller than e x logn
// so we can remove n x logn. and leave e x logn
// space: O(e + n)
