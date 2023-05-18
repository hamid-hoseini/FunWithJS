/**
 * a class InstanceCounter that maintains the count of the number of instances
 */

class InstanceCounter {
    static count = 0;
  
    constructor() {
        InstanceCounter.count++;
    }
    static getInstanceCount() {
        return InstanceCounter.count;
    }
}