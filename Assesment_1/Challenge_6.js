class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return null;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const leastUsedKey = this.cache.keys().next().value;
            this.cache.delete(leastUsedKey);
        }
        this.cache.set(key, value);
    }
}

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.get(2);
