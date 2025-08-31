class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
def build_list(arr):
    dummy = ListNode(0)
    curr = dummy
    for val in arr:
        curr.next = ListNode(val)
        curr = curr.next
    return dummy.next


def print_list(head):
    res = []
    while head:
        res.append(str(head.val))
        head = head.next
    print(" -> ".join(res))
    
head = build_list([1,2,3,4,5])
print_list(head)

def count_nodes(head):
    count = 0
    while head:
        count += 1
        head = head.next
        
    return count

def search(head, target):
    while head:
        if head.val == target:
            return True
        head = head.next
    return False


def reverse_list(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev


def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    first = second = dummy
    
    for _ in range(n + 1):
        first = first.next
        second = second.next
    second.next = second.next.next
    return dummy.next

def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
            
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
        
    curr.next = l1 or l2
    return dummy.next