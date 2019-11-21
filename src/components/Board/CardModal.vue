<template>
  <transition v-if="showModalAttr" name="modal">
    <div class="CardModal">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header">
                    {{item.name}}
                </div>

                <div class="modal-footer">
                    <p v-if="editDescription === false" @click="toggleEditDescription">{{item.description}}</p>
                    <textarea v-if="editDescription === true" v-model="item.description"></textarea>
                    <button @click="saveDescription" v-if="editDescription === true">Save</button>
                </div>
                <button @click="closeModal">Close</button>
                <button @click="removeCard">Remove card</button>
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
        item: {}
    }
  },
  methods:{
      showModal: function(itemId, item){
          this.showModalAttr = true;
          this.itemId = itemId;
          this.item = item;
      },
      closeModal: function(){
          this.showModalAttr = false;
      },
      toggleEditDescription: function(){
          this.editDescription = !this.editDescription;
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
.CardModal {
    clear: both;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 500px;
    min-height: 400px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
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

  .modal-footer p{
      width: 100%;
      max-width: 400px;
      display: block;
      white-space:normal;
  }

  .modal-footer textarea{
      width: 100%;
      height:  150px;
      display: block;
  }
</style>
