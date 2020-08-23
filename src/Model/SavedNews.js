/*
*
* A simle Linked List
* To hold and storage the data of application
* 'objects' are the current JSON objects of current tab's dragged XML pieces
* 'ids' are the current dragged XML pieces's ID's
*
*/


class SavedNews {
    constructor(object) {
        this.head = new Node(object);
    }

    add(object) {
        const newNode = new Node(object);
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        // add node
        current.next = newNode;
    }
    getNodeAt(toSearch)
    {
        let count = 1;
        let gezici = this.head;
        while(count < toSearch && gezici.next != null)
        {
            gezici = gezici.next;
            count++;
        }
        return gezici;
    }
    change(toSearch,object)
    {
        let count = 1;
        let gezici = this.head;
        while(count < toSearch && gezici.next != null)
        {
            gezici = gezici.next;
            count++;
        }
        gezici.object = object;
    }
   
   
    setCurrentTab(newValue)
    {
        this.currentTab = newValue;
    }
}
class Node
{
    constructor(object) {
         this.object = object;      
         this.next =  null;
    }
}
export default SavedNews;