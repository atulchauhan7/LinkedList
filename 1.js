class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size ==0
    }

    getSize(){
        return this.size
    }

    pretent(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.size++
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }

        this.size++
    }

    insert(value, index){
        if(index ==0){
            this.pretent(value);
        }else if(index > this.size){
            console.log("Please provide a valid index..")
        }else{
            let node = new Node(value);
            let curr = this.head;
            for(let i=0;i<index-1;i++){
                curr=curr.next;
            }
            node.next=curr.next;
            curr.next=node;
            this.size++;
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues+=`${curr.value} `;
                curr=curr.next;

            }
            console.log(listValues)
        }
    }
}

let list = new linkedList();
// console.log("List is empty??",list.isEmpty())
// console.log("LinkedList size =>",list.getSize())
list.pretent(10);
list.pretent(20);
list.pretent(30);
list.pretent(40);
list.append(50)
list.append(60)
list.append(70)
list.append(80)

list.insert(10,0);
list.insert(100,1);


list.print()
