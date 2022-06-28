class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        // the array that will hold the value of heap structure that is the priority queue
        // underscore is to imply that it's a private method/property. Since we don't have private/pub;ic declaration like in Java so we'll use this underscore convention. When we have an underscore that means this method can only be used by the priority queue class itself. It's not meant for other users who're trying to use this PriorityQueue class to utilize this underscore method.
        this._heap = [];
        //   comnparator function as a private property. Cos after initialization we don't want anyone to change the function.
        this._comparator = comparator;
    }


    //   Below are the methods of our api:
    size() {
        return this._heap.length;
    }

    peek() {
        return this._heap[0];
    }

    isEmpty() {
        return this._heap.size() === 0;
        //   return this._heap.length === 0;
    }
    // private methods are the ones with underscore
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

    // siftup takes no argument, it will assume that the value we added will be at the end of the array. This method will compare the value and move the node to the correct place
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

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while (!pq.isEmpty()) {
    console.log(pq.pop());
}