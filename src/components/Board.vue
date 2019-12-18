<template>
    <div class="Tablica">
        <div class="boardContent">
            <input type="text" class="boardTitle transparentInput" v-model="boardName" />
            <div class="boards">
                <div class="board" v-for="(item, i) in lists">
                    <input type="text" v-model="item.name" class="transparentInput" />
                    <draggable class="list-group" :list="item.list" group="people" @change="log">
                        <div
                            v-for="(element, index) in item.list"
                            :key="index"
                            @click="showCard(index, element, i, item.name)"
                        >
                            <router-link :to="`/board/${index}/card/${i}`">
                                <div v-if="element.state === 'active'" class="list-group-item">
                                    {{ element.name }}
                                </div>
                            </router-link>
                        </div>
                    </draggable>
                    <div class="addCardForm" v-if="item.addCardForm === true">
                        <input v-model="item.newCardName" type="text" placeholder="Enter card name.." />
                        <button @click="createCard(i)">Create card</button>
                    </div>
                    <button class="addCardButton" @click="showAddCardForm(i)" v-if="item.addCardForm === false">Add card</button>
                    <button class="addCardButton" @click="removeList(i)" v-if="item.addCardForm === false">Remove list</button>
                </div>

                <div class="board">
                    <input type="text" value="Old ones" class="transparentInput" />
                    <div  v-for="(item, i) in lists">
                        <div
                            v-for="(element, index) in item.list"
                            :key="index"
                            @click="showCard(index, element, i, item.name)"
                        >
                            <router-link :to="`/board/${index}/card/${i}`">
                                <div v-if="element.state === 'archive'" class="list-group-item">
                                 {{ element.name }}
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="board newListForm">
                    <p>Add new list</p>
                    <input v-model="newListName" type="text" placeholder="Enter list name.." />
                    <button @click="addList">Add list</button>
                </div>

                <CardModal @removeCard="removeCard" @saveDescription="saveDescription" @addComment="addComment" @archiveCard="archiveCard" @deleteCard="deleteCard" @restoreCard="restoreCard" ref="cardModal" />
            </div>
        </div>

    </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardModal from '@/components/Board/CardModal'
import api from './api/api.vue'

export default {
  name: 'Board',
  props: {
    isLogged: Boolean
  },
  created () {
  },
  order: 1,
  components: {
    draggable, CardModal
  },
  data () {
    return {
      tableIDColumn: [],
      columnJSON: [],
      columnLength: 0,
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
            { name: 'John',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',
              id: 1,
              comments: [
                {
                  commentId: 'xd2',
                  commentAuthor: 'Dawikk',
                  commentContent: 'Testowy komentarz',
                  commentDate: '',
                  commentAttachment: [
                  ]
                }
              ],
              attachment: [

              ],
              labels: [
                {
                  id: 'label1',
                  labelTitle: 'Label r wer 332',
                  labelBackground: '#333333'
                },
                {
                  id: 'label2',
                  labelTitle: 'Label 2 1  11 ',
                  labelBackground: '#50AD7A'
                }
              ],
              state: 'active'
            },
            { name: 'John 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',
              id: 2,
              comments: [
                {
                  commentId: 'xd2',
                  commentAuthor: 'Dawikk',
                  commentContent: 'Drugi komentarz',
                  commentDate: '',
                  commentAttachment: [
                  ]
                }
              ],
              attachment: [

              ],
              labels: [
                {
                  id: 'label1',
                  labelTitle: 'Labehfhhfhl',
                  labelBackground: '#333333'
                },
                {
                  id: 'label2',
                  labelTitle: 'Label 2hdhhfh',
                  labelBackground: '#50AD7A'
                }
              ],
              state: 'active'
            }
          ]
        },
        {
          name: 'Lista 2',
          addCardForm: false,
          newCardName: '',
          list: [
            { name: 'John 5',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',
              id: 4,
              comments: [
                {
                  commentId: 'xd2',
                  commentAuthor: 'Dawikk',
                  commentContent: 'Trzeci komentarz',
                  commentDate: '',
                  commentAttachment: [
                  ]
                }
              ],
              attachment: [

              ],
              labels: [
                {
                  id: 'label1',
                  labelTitle: 'Labelfsfs',
                  labelBackground: '#333333'
                },
                {
                  id: 'label2',
                  labelTitle: 'Label 2gdgdgd',
                  labelBackground: '#50AD7A'
                }
              ],
              state: 'active'
            },
            { name: 'John 8',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris augue justo, scelerisque vel neque a, vulputate eleifend tortor. Morbi id ultrices quam. Ut nec nisl urna.',
              id: 3,
              comments: [
                {
                  commentId: 'xd2',
                  commentAuthor: 'Dawikk',
                  commentContent: 'Czwarty komentarz',
                  commentDate: '',
                  commentAttachment: [
                  ]
                }
              ],
              labels: [
                {
                  id: 'label1',
                  labelTitle: 'Label 4',
                  labelBackground: '#333333'
                },
                {
                  id: 'label2',
                  labelTitle: 'Label 41441',
                  labelBackground: '#50AD7A'
                }
              ],
              attachment: [

              ],
              state: 'active'
            }
          ]
        }
      ]
    }
  },
  methods: {
    archiveCard: function (index) {
      this.lists[this.cardId].list[index].state = 'archive'
    },
    restoreCard: function (index) {
      this.lists[this.cardId].list[index].state = 'active'
    },
    deleteCard: function (index) {
      this.lists[this.cardId].list.splice(index, 1)
    },
    addComment: function (index, comment) {
      this.lists[this.cardId].list[index].comments.push(comment)
    },
    saveDescription: function (index, description) {
      this.lists[this.cardId].list[index].description = description
    },
    removeCard: function (index) {
      this.lists[this.cardId].list.splice(index, 1)
    },
    removeList: function (index) {
      this.lists.splice(index, 1)
    },
    showCard: function (index, element, cardId, listName) {
      var cardLabels = this.lists[cardId].list[index].labels

      var allLabels = []

      // takie tam kopiowanie na szybko :)
      // mam nadzieje ze sie nie przejmujemy zlozonoscia obliczeniowa xd
      for (var i = 0; i < this.lists.length; i++) {
        for (var j = 0; j < this.lists[i].list.length; j++) {
          // ten wartunek poprawić, ale na razie musi tak być :D
          if (i != cardId && j != index) {
            for (var k = 0; k < this.lists[i].list[j].labels.length; k++) {
              var obj = this.lists[i].list[j].labels[k]
              if (!this.containsObject(obj, allLabels)) {
                allLabels.push(obj)
              }
            }
          }
        }
      }

      this.$refs.cardModal.showModal(index, element, listName, cardLabels, allLabels)
      this.cardId = cardId
    },
    containsObject (obj, list) {
      var i
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true
        }
      }
      return false
    },
    createCard: function (item) {
      this.closeAddCardForm(item)
      var element = this.lists[item]
      var newElement = {name: element.newCardName, id: element.list.length}

      element.list.push(newElement)
      element.newCardName = ''
    },
    showAddCardForm: function (item) {
      this.lists[item].addCardForm = true
    },
    closeAddCardForm: function (item) {
      this.lists[item].addCardForm = false
    },
    addList: function () {
      if (this.newListName == '') { this.newListName = 'New list' }

      this.lists.push({name: this.newListName, list: [], description: '', addCardForm: false, newCardName: ''})
      this.newListName = ''
    }
  },
  mounted () {
    api.fetchGetBoardsDetails(this.$router.history.current.params.id)
      .then(responseTitle => {
        this.boardName = responseTitle.data.title
      })
      .catch(error => {
        console.log('Error GetBoardsDetails:', error)
      })
    /// Poniżej: zwraca listy (kolumny) i tablice z id kart (cards: [])
    console.log('mounted:', this.$router.history.current.params.id)
    api.fetchGetBoardColumns(this.$router.history.current.params.id)
      .then(response => {
        console.log('respones from api:', response.data)
        this.columnJSON = response.data
        this.columnLength = response.data.length
        console.log('columnJSON:', this.columnJSON)
      })
      .catch(error => {
        console.log('Error fetchGetBoardColumns:', error)
      })
    /// Poniżej: zwraca szczegóły karty (description, isArchived)
    api.fetchGetCard(this.$router.history.current.params.id)
      .then(response => {
        console.log('respones from api Card:', response.data)
        //    this.columnJSON = response.data
        //    this.columnLength = response.data.length
        //    console.log('columnJSON:', this.columnJSON)
      })
      .catch(error => {
        console.log('Error fetchGetCard:', error)
      })
    /*
/// Poniżej: nie działa, powinno zwracać wszystkie karty w podanej liście (kolumnie)
    api.fetchGetColumnCards(this.$router.history.current.params.id)
        .then(response => {
            console.log('respones from api Column/Cards:', response.data)
        //    this.columnJSON = response.data
        //    this.columnLength = response.data.length
        //    console.log('columnJSON:', this.columnJSON)
        })
        .catch(error => {
            console.log('Error fetchGetColumnCards:', error)
        })
*/
    if (this.$route.params.id && this.$route.params.cardId) {
      var item = this.lists[this.$route.params.id]
      var element = item.list[this.$route.params.cardId]
      var index = this.$route.params.cardId
      this.showCard(this.$route.params.id, element, index, item.name)
      this.cardId = this.$route.params.cardId
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
    text-decoration: none;
    color: #333333;
    cursor: pointer;
}
.list-group-item:hover {
    text-decoration: none;
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
