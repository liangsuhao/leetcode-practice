/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(root, k) {
  var tmp = root,count = 0,result = [];
  while(tmp){
      tmp = tmp.next;
      count++;
  }
  var num = count%k,len = parseInt(count/k);
  var tmpNode,flag;
  if(count > k){
      while(root){
          tmpNode = root;
          flag = num>0 ? 1 : 0;
          for(let i=0;i<len-1+flag;i++){
              root = root.next;
          }
          num--;
          //然后在此处断开
          var nextNode = root.next;
          root.next = null;
          root = nextNode;
          result.push(tmpNode);
      }
  }else{
      num = k - count;
      while(root){
          tmpNode = root;
          //然后在此处断开
          var nextNode = root.next;
          root.next = null;
          root = nextNode;
          result.push(tmpNode);
      }
      //再插一些空指针进来
      while(num>0){
          result.push(null);
          num--;
      }
  }
  return result;
};