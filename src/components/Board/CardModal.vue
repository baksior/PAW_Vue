<template>
  <transition v-if="showModalAttr" name="modal">
    <div class="CardModal crossed">
        <div class="modal-wrapper">
            <div class="modal-container" @click="hideAll" >
              <div class="container">
                <div class="row">
                  <div class="col-9">
                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                          <p class="cardName">{{item.name}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <span class="smallListName">on list: {{listName}}</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <span class="sectionHeader">Description</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <p v-if="editDescription === false" @click="toggleEditDescription" class="descriptionP">{{item.description}}</p>
                          <textarea v-if="editDescription === true" v-model="item.description" class="textareaLol"></textarea>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <span class="sectionHeader">Activity</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="newCommentElements">
                            <input type="text" class="newCommentInput" v-model="newCommentValue" placeholder="Enter comment.." @click="showButtons" /><br>
                            <input v-if="isCommentActive" type="button" class="newCommentButton" value="Add comment" @click="addComment" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="commentsView">
                            <div v-for="(comment, i) in comments" v-bind:key={i}>
                              <div class="container" style="margin-top: 8px">
                                <div class="col-12">
                                  <div class="row commentAuthor">
                                    {{comment.commentAuthor}}
                                  </div>
                                  <div class="row commentBox">
                                    {{comment.commentContent}}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="container">
                      <div class="row">
                        <div class="col-1 float-right">
                          <i class="fas fa-times" style="margin-left: 80px;" @click="closeModal"></i>
                        </div>
                      </div>
                      <div class="row">
                        <p class="actions">Actions</p>
                      </div>
                      <div class="row">
                        <ul class="menu">
                          <li v-if="this.isArchive === false" class=" selected" @click="archive">
                              <span class="color-dark font-bold">
                                  <i class="fas fa-archive"></i>
                                  &nbsp;Archive
                              </span>
                          </li>
                          <li v-if="this.isArchive === true" class=" selected" @click="restoreCard">
                              <span class="color-dark font-bold">
                                  <i class="fas fa-trash-restore"></i>
                                  &nbsp;Restore
                              </span>
                          </li>
                          <li v-if="this.isArchive === true" class=" selected redBg" @click="deleteCard">
                              <span class="color-dark font-bold">
                                  <i class="fas fa-trash"></i>
                                  &nbsp;Delete
                              </span>
                          </li>
                      </ul>
                      </div>
                    </div>
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
      isArchive: false,
      itemId: null,
      listName: '',
      item: {},
      newCommentValue: '',
      isCommentActive: false,
      comments: [
      ]
    }
  },
  methods:{
    restoreCard: function(){
      this.isArchive = false;
      this.$emit('restoreCard', this.itemId);
    },
    deleteCard: function(){
      this.$emit('deleteCard', this.itemId);
      this.showModalAttr = false;
    },
    archive: function(){
      this.isArchive = true;
      this.$emit('archiveCard', this.itemId);
    },
    addComment: function(){
      if(this.newCommentValue !== ''){
        var comment = {
          commentId: 'xd2',
          commentAuthor: 'Dawikk',
          commentContent: this.newCommentValue,
          commentDate: '',
          commentAttachment: {}
        }
        this.newCommentValue = '';
        this.$emit('addComment', this.itemId, comment);
      }
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
        this.comments = item.comments;
        this.newCommentValue = '';
        this.showModalAttr = true;
        this.itemId = itemId;
        this.item = item;
        this.listName = listName;
        this.isArchive = item.state === 'active' ? false : true;
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
.commentsView{
  height: 280px;
  max-height: 280px;
  overflow:auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.mt-5{
  margin-top: 1px;
}
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
  .color-dark{
    color: #172b4d;
}

.font-bold{
  font-weight: 500;
}
ul.menu{
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

ul.menu li{
  display: block;
  padding: 5px 9px;
}

ul.menu li:hover{
  background: #E7E9ED;
  cursor: pointer;
}
.redBg{
  background-color: #CC7590;
  color: #FFFFFF;
}
.redBg:hover{
  background-color: #E98FAB!important;
}
.actions{
  padding: 0;
  margin: 5px 0 5px 0;
  font-size: 14px;
  font-weight: bold;
}
.fa-times{
  text-align: right;
  font-size: 24px;
  cursor: pointer;
}
</style>
