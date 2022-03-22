//快速排序的js实现
function quickSort(start,end,arr) {
  if(start < end) {
    mid = sort(start,end,arr);
    quickSort(start,mid-1,arr);
    quickSort(mid+1,end,arr);
  }
}

function sort(start,end,arr) {
  const base = arr[start];
  const left = start,right = end;
  while(left < right) {
    while(arr[left] <= base && left < right) {
      left++;
    }
    while(arr[right >= base] && left < right) {
      right--;
    }
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  }

  let tmp = arr[start];
  arr[left] = arr[start];
  arr[start] = tmp;
  return left;
}