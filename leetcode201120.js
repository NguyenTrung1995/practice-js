const search = (nums = [5,1,3], target = 3) => {
    let left = 0, right = nums.length - 1;
    if (right === 0) return nums[right] === target; 
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === target || nums[i + 1] === target || nums[left] === target || nums[right] === target) return true;
        if (nums[i] > nums[i + 1]) {
            if (target > nums[left] && target < nums[i]) {
                right = i;
                break;
            } else if (target < nums[right] && target > nums[i + 1]) {
                left = i + 1;
                break;
            }
            return false;
        }
    }
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

console.log(search());