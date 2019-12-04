<template>
  <transition v-if="showModalAttr" name="modal">
    <div class="CardModal">
        <div class="modal-wrapper">
            <div class="modal-container" @click="hideAll" >
              <div class="container">
                <div class="row">
                  <div class="col-9">
                    <p class="cardName">{{item.name}}</p>
                  </div>
                  <div class="col-1 offset-1">
                    <button @click="closeModal">Close</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-9">
                    <span class="smallListName">on list: {{listName}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-9">
                    <span class="sectionHeader">Description</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="editDescription === false" @click="toggleEditDescription" class="descriptionP">{{item.description}}</p>
                    <textarea v-if="editDescription === true" v-model="item.description" class="textareaLol"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-9">
                    <span class="sectionHeader">Activity</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-9">
                    <div class="newCommentElements">
                      <input type="text" class="newCommentInput" v-model="newCommentValue" placeholder="Enter comment.." @click="showButtons" /><br>
                      <input v-if="isCommentActive" type="button" class="newCommentButton" value="Add comment" @click="addComment" />
                    </div>
                  </div>
                </div>
                <div class="row" v-for="(comment, i) in comments">
                  <div class="container">
                    <div class="col-9" v-bind:key={i}>
                      <div class="row commentAuthor">
                        {{comment.commentAuthor}}
                      </div>
                      <div class="row commentBox">
                        {{comment.commentContent}}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-9">

                  </div>
                </div>
              </div>

                <!-- <div class="modal-header">
                    {{item.name}}
                </div>

                <div class="modal-footer">
                    <p v-if="editDescription === false" @click="toggleEditDescription">{{item.description}}</p>
                    <textarea v-if="editDescription === true" v-model="item.description"></textarea>
                    <button @click="saveDescription" v-if="editDescription === true">Save</button>
                </div>
                <button @click="closeModal">Close</button>
                <button @click="removeCard">Remove card</button> -->
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'CardModal',
  data () {
    return {
        editDescription: false,
        showModalAttr: false,
        itemId: null,
        listName: '',
        item: {},
        newCommentValue: '',
        isCommentActive: false,
        comments: [
          {
            commentId: 'xd1',
            commentAuthor: 'Dawikk',
            commentContent: 'Komentarz lol',
            commentDate: '',
            commentAttachment: {}
          }
        ]
    }
  },
  methods:{
    addComment: function(){

    },
    hideAll: function(event){
      if(event.target.className != 'newCommentInput')
        this.isCommentActive = false;
      
      if(event.target.className != 'descriptionP' && event.target.className != 'textareaLol')
        this.editDescription = false;
    },
    showButtons: function(event){
      if(event.target.className == 'newCommentInput')
        this.isCommentActive = true;
    },
      showModal: function(itemId, item, listName){
          this.showModalAttr = true;
          this.itemId = itemId;
          this.item = item;
          this.listName = listName;
      },
      closeModal: function(){
          this.showModalAttr = false;
      },
      toggleEditDescription: function(event){
        if(event.target.className == 'descriptionP')
          this.editDescription = true;
      },
      saveDescription: function(){
          this.$emit('saveDescription', this.itemId, this.item.description);
          this.toggleEditDescription();
      },
      removeCard: function(){
          this.closeModal();
          this.$emit('removeCard', this.itemId);
      }
  }
}
</script>

<style scoped>
.newCommentElements{
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  background-color: #FFFFFF;
}
.newCommentInput{
  width: 100%;
  padding: 9px;
  font-size: 14px;
  word-break: break-word;
  border: 0px;
  outline: none;
}
.newCommentButton{
  margin: 5px;
  background-color: #61BD4F;
  color: #FFFFFF;
  border: 0px;
  padding: 7px 10px;
  font-weight: 400;
  font-size: 13px;
  opacity: 0.95;
}
.newCommentButton:hover{
  opacity: 1;
}
.commentAuthor{
  font-size: 14px;
  font-weight: bold;
}
.sectionHeader{
  font-size: 14px;
  color: #172b4d;
  font-weight: 600;
  padding: 10px 0px 10px 0px;
}
.cardName{
  font-weight: 600;
  color: #172b4d;
  font-size: 20px;
  padding: 5px 0px 0px 0px;
  margin: 0;
}
.CardModal {
    clear: both;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    display: table;
    transition: opacity .3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 600px;
    min-height: 600px;
    margin: 0px auto;
    padding: 20px 20px;
    background-color: #F4F5F7;
    border-radius: 2px;
    -webkit-box-shadow: rgba(0,0,0,0.1) 0 0 10px;
       -moz-box-shadow: rgba(0,0,0,0.1) 0 0 10px;
            box-shadow: rgba(0,0,0,0.1) 0 0 10px;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  
  .modal-body {
    margin: 20px 0;
  }
  
  .modal-default-button {
    float: right;
  }
  
  .modal-enter {
    opacity: 0;
  }
  
  .modal-leave-active {
    opacity: 0;
  }
  
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .descriptionP{
    padding: 8px;
      width: 100%;
      max-width: 400px;
      display: block;
      white-space:normal;
    border: rgba(9,30,66,.04);
      background-color: rgba(9,30,66,.04);
  }

  textarea{
    padding: 8px;
    display: block;
    width: 100%;
    min-height:  130px;
    border: 2px solid #172b4d;
    border-radius: 2px;
  }
  .smallListName{
    font-size: 11px;
    color: #5e6c84;
    padding: 0;
    margin: 0;
  }
  .commentBox{
    padding: 9px 0px 9px 9px;
    background-color: #FFFFFF;
    -webkit-box-shadow: inset 0 0 0 2px #dfe1e6;
       -moz-box-shadow: inset 0 0 0 2px #dfe1e6;
            box-shadow: inset 0 0 0 2px #dfe1e6;
    border-radius: 4px;
    font-size: 14px;
  }
</style>
