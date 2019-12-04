<template>
    <div class="Tablica">
        <div class="boardContent">
            <input type="text" class="boardTitle transparentInput" v-model="boardName" />
            <div class="boards">
                <div class="board" v-for="(item, i) in lists">
                    <input type="text" v-model="item.name" class="transparentInput" />
                    <draggable class="list-group" :list="item.list" group="people" @change="log">
                        <div
                            class="list-group-item"
                            v-for="(element, index) in item.list"
                            :key="index"
                            @click="showCard(index, element, i, item.name)"
                        >
                        {{ element.name }}
                        </div>
                    </draggable>
                    <div class="addCardForm" v-if="item.addCardForm === true">
                        <input v-model="item.newCardName" type="text" placeholder="Enter card name.." />
                        <button @click="createCard(i)">Create card</button>
                    </div>
                    <button class="addCardButton" @click="showAddCardForm(i)" v-if="item.addCardForm === false">Add card</button>
                    <button class="addCardButton" @click="removeList(i)" v-if="item.addCardForm === false">Remove list</button>
                </div>
            
                <div class="board newListForm">
                    <p>Add new list</p>
                    <input v-model="newListName" type="text" placeholder="Enter list name.." />
                    <button @click="addList">Add list</button>
                </div>

                <CardModal @removeCard="removeCard" @saveDescription="saveDescription" ref="cardModal" />
            </div>
        </div>
        
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardModal from '@/components/Board/CardModal'

export default {
  name: 'Board',
  props: {
      isLogged: Boolean
  },
  order: 1,
    components: {
        draggable, CardModal
    },
  data () {
    return {
      editable: true,
      isDragging: true,
      delayedDragging: false,
      cardId: -1,
      boardName: 'Tablica',
      newListName: '',
        lists: [
            {
                addCardForm: false,
                newCardName: '',
                name: 'Lista 1',
                list: [
                    { name: "John", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.', id: 1 },
                    { name: "Joao", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',id: 2 },
                    { name: "Jean", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',id: 3 },
                    { name: "Gerard", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',id: 4 }
                ]
            },
            {
                name: 'Lista 2',
                addCardForm: false,
                newCardName: '',
                list: [
                    { name: "John", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',id: 1 },
                    { name: "Joao", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',id: 2 },
                    { name: "Jean", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',  id: 3 },
                    { name: "Gerard", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',id: 4 }
                ]
            }
        ]
    };
  },
  methods: {
      saveDescription: function(index, description){
          this.lists[this.cardId].list[index].description = description;
      },
      removeCard: function(index){
          this.lists[this.cardId].list.splice(index, 1);
      },
      removeList: function(index){
          this.lists.splice(index, 1);
      },
      showCard: function(index, element, cardId, listName){
        this.$refs.cardModal.showModal(index, element, listName);
        this.cardId = cardId;
      },
      createCard: function(item){
          this.closeAddCardForm(item);
          var element = this.lists[item];
          var newElement = {name: element.newCardName, id: element.list.length};

          element.list.push(newElement);
          element.newCardName = '';
      },
    showAddCardForm: function(item){
        this.lists[item].addCardForm = true;
    },
    closeAddCardForm: function(item){
        this.lists[item].addCardForm = false;
    },
    addList: function(){
        if(this.newListName == '')
            this.newListName = "New list";

        this.lists.push({name: this.newListName, list: [], description: '', addCardForm: false, newCardName: ''});
        this.newListName = "";
    }
  }
}
</script>

<style scoped>
.boardContent{
    padding: 80px 30px;
}
.Tablica{
    height: 100%;
    min-height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
}
.boards{
    white-space: nowrap;
    height: 100%;
    min-height: 100%;
}

.board{
    float: left;
    width: 235px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #D8DBE4;
    border-radius: 5px;
}
.boardTitle{
    width: 400px;
    font-weight: bold;
    font-size: 20px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: pointer;
}
.list-group-item i {
  cursor: pointer;
}

.newListForm input, .addCardForm input{
    display: block;
    width: 210px;
    padding: 5px;
    border: 1px solid #D8DBE4;
    border-radius: 5px;
}

.newListForm button, .addCardForm button{
    display: block;
    width: 210px;
    padding: 5px;
    border: 1px solid #D8DBE4;
    border-radius: 5px;
    margin-top: 5px;
}

.addCardButton{
    display: block;
    width: 212px;
    padding: 5px;
    background-color: #D8DBE4;
    border: 1px solid #D8DBE4;
    border-radius: 5px;
    margin-top: 5px;
}

.mt-5{
    margin-top: 5px;
}

.transparentInput{
    background: inherit;
    border: none;
    margin-bottom: 4px;
}
</style>
