def main():

    print("Hello")

def solution(A):
    # Implement your solution here

    # Idea is to iterate, greedily give correct, if correct not available try 1 smallers
    usedList = []
    usedSet = set()

    for elem in A:
        print(usedList)
        if elem not in usedSet:
            usedSet.add(elem)
            usedList.append(elem)
        else:
            for i in range(elem, 0, -1):
                print(i)
                if i not in usedSet:
                    usedSet.add(i)
                    usedList.append(i)

                    break
            print("Broken")

    return usedList

if __name__ == "__main__":
    print(solution([2,5,4,5,5]))