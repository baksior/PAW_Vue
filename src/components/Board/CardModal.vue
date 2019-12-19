<template>
  <transition v-if="showModalAttr" name="modal">
    <div class="CardModal crossed">
        <div class="modal-wrapper">
            <div class="modal-container" >
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
                          <span class="sectionHeader">Labels</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="labels">
                          <div class="label" v-for="(label, i) in cardLabels" v-bind:key={i} :style="{backgroundColor: label.labelBackground, color: '#FFFFFF'}">
                              {{label.labelTitle}}
                          </div>
                          <div class="addLabel" @click="toggleLabelSection">+</div>
                        </div>
                      </div>
                      <div v-if="isAddingLabel === false">
                        <div class="row">
                          <div class="col-12">
                            <span class="sectionHeader">Description</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <p v-if="editDescription === false" @click="toggleEditDescription" class="descriptionP">{{item.description}}</p>
                            <textarea v-if="editDescription === true" v-model="item.description" v-on:keyup.enter="saveDescription"> class="textareaLol"></textarea>
                          </div>
                        </div>
                        <div v-if="attachments.length !== 0">
                          <div class="row">
                            <div class="col-12">
                              <span class="sectionHeader">Attachment</span>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <img class="image" v-bind:src="attachments" />
                            </div>
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
                              <input type="button" class="newCommentButton" value="Add comment" @click="addComment" />
                              <input type="file" @change="onFileChange" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="commentsView">
                              <div v-for="(comment, i) in comments" v-bind:key={i} @click="editComment(comment, i)">
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
                      <div v-if="isAddingLabel === true">
                        <div class="row">
                          <div class="col-12">
                            <span class="sectionHeader mt-5">Create label</span>
                          </div>
                          <div class="col-12">
                            <div class="container">
                              <div class="row">
                                <div class="col-12">
                                  <span class="sectionHeader mt-5">Enter title</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <input type="text" v-model="newLabel.labelTitle" placeholder="Enter label name.." />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <span class="sectionHeader mt-5">Select color</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="labels">
                                  <div class="label labelColor" @click="selectColor(label)" v-for="(label, i) in labelsColor" v-bind:key={i} :style="{backgroundColor: label}">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <span class="createLabel" @click="addLabel()">Create label</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <span class="sectionHeader mt-5">Select label</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 labelSelect" @click="selectAddLabel(i)" v-for="(label, i) in boardLabels" v-bind:key={i} :style="{backgroundColor: label.labelBackground, color: '#FFFFFF'}">
                              {{label.labelTitle}}
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
                          <li class=" selected" @click="toggleLabelSection">
                              <span class="color-dark font-bold">
                                  <i class="fas fa-tags"></i>
                                  &nbsp;Labels
                              </span>
                          </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CardModal',
  data () {
    return {
      isAddingLabel: false,
      editDescription: false,
      showModalAttr: false,
      isArchive: false,
      itemId: null,
      listName: '',
      item: {},
      newCommentValue: '',
      isCommentActive: false,
      comments: [
      ],
      attachments: [

      ],
      newLabel: {
        labelTitle: '',
        labelBackground: ''
      },
      labelsColor: [
        '#61bd4f', '#f2d600', '#ff9f1a', '#eb5a46', '#c377e0', '#0079bf', '#51e898', '#ff78cb', '#344563', '#b3bac5'
      ],
      cardLabels: [
      ],
      boardLabels: [
      ]
    }
  },
  methods: {
    selectAddLabel: function (i) {
      var selectedLabel = this.boardLabels[i]
      this.cardLabels.push(selectedLabel)
      this.boardLabels.splice(i, 1)
    },
    restoreCard: function () {
      this.isArchive = false
      this.$emit('restoreCard', this.itemId)
    },
    deleteCard: function () {
      this.$emit('deleteCard', this.itemId)
      this.showModalAttr = false
    },
    archive: function () {
      this.isArchive = true
      this.$emit('archiveCard', this.itemId)
    },
    addComment: function () {
      if (this.newCommentValue !== '') {
        var comment = {
          commentId: 'xd2',
          commentAuthor: 'Dawikk',
          commentContent: this.newCommentValue,
          commentDate: '',
          commentAttachment: {}
        }
        this.newCommentValue = ''
        this.$emit('addComment', this.itemId, comment)
      }
    },
    editComment: function (comment, i) {
      console.log(comment)
      console.log(i)
    },
    hideAll: function (event) {
      if (event.target.className != 'newCommentInput') { this.isCommentActive = false }

      if (event.target.className != 'descriptionP' && event.target.className != 'textareaLol') { this.editDescription = false }
    },
    showButtons: function (event) {
      if (event.target.className == 'newCommentInput') { this.isCommentActive = true }
    },
    showModal: function (itemId, item, listName, cardLabels, boardLabels, attachments) {
      this.comments = item.comments
      this.newCommentValue = ''
      this.showModalAttr = true
      this.itemId = itemId
      this.item = item
      this.listName = listName
      this.isArchive = item.state !== 'active'
      this.cardLabels = cardLabels
      this.boardLabels = boardLabels
      this.attachments = attachments
      this.isAddingLabel = false
    },
    closeModal: function () {
      this.showModalAttr = false
    },
    toggleEditDescription: function (event) {
      if (event.target.className == 'descriptionP') { this.editDescription = true }
    },
    saveDescription: function () {
      this.editDescription = false
      this.$emit('saveDescription', this.itemId, this.item.description)
      this.toggleEditDescription()
    },
    removeCard: function () {
      this.closeModal()
      this.$emit('removeCard', this.itemId)
    },
    toggleLabelSection: function () {
      this.isAddingLabel = !this.isAddingLabel
    },
    selectColor: function (param) {
      this.newLabel.labelBackground = param
    },
    addLabel: function () {
      if (this.newLabel.labelBackground !== '') {
        var model = {
          id: 'label' + Math.floor(Math.random() * 5000),
          labelTitle: this.newLabel.labelTitle,
          labelBackground: this.newLabel.labelBackground
        }
        this.cardLabels.push(model)
        this.$emit('addLabel', this.itemId, this.newLabel)
        this.newLabel.labelBackground = ''
        this.newLabel.labelTitle = ''
      }
    },
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      this.createImage(files[0])
    },
    createImage (file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        // Create Base64 Object
        var Base64 = {_keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', encode: function (e) { var t = ''; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ''; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ''); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } }t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, '\n'); var t = ''; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ''; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t }}

        // Define the string
        var string = e.target.result
        vm.attachments = e.target.result

        // Encode the String
        var encodedString = Base64.encode(string)
        // vm.attachments = encodedString
        console.log(this.lists)

        let token = sessionStorage.getItem('token')
        let url = 'api/card/' + this.itemId
        var sendAttachmentResponse = axios({
          method: 'put',
          url: url,
          headers: {
            'X-Auth-Token': token
          },
          data: {
            attachment: encodedString
          }
        })
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
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
.createLabel{
  color: #FFFFFF;
  background-color: #5aac44;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  float: right;
}
.createLabel:hover{
  opacity: .9;
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
  margin-top: 10px;
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

.label{
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  float: left;
  opacity: 1;
  height: 27px;
  min-width: 40px;
  text-align: center;
  cursor: pointer;
}

.label:hover{
  opacity: .9;
}

.labelColor{
  width: 60px;
  height: 30px;
  margin-top: 10px;
}

.labelSelect{
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 5px;
  height: 32px;
}

.labels{
  padding: 5px;
  font-size: 12px;
}

.addLabel{
  padding: 5px 13px;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  background-color:#5e6c84;
  color: #FFFFFF;
  float: left;
}

.addLabel:hover{
  opacity: .9;
}

.descriptionP{
  padding: 8px;
  width: 100%;
  max-width: 400px;
  display: block;
  white-space:normal;
  border: rgba(9,30,66,.04);
  background-color: rgba(9,30,66,.04);
  cursor: pointer;
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

.image{
  width: 100px;
  max-height: 70px;
  float: left;
  padding: 5px;
}
</style>
