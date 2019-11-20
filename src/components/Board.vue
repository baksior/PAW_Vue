<template>
    <div class="boards">
        <div class="board" v-bind:key={i} v-for="(item, i) in lists">
            <draggable class="list-group" :list="item.list" group="people" @change="log">
                <div
                    class="list-group-item"
                    v-for="(element, index) in item.list"
                    :key="element.name"
                >
                {{ element.name }} {{ index }}
                </div>
            </draggable>
        </div>
    
        <div class="board">
            <input type="text" />
            <button>Dodaj kartę</button>
        </div>
    </div>
  <!-- <div class="container">
    <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>
  </div>
  </div> -->
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Board',
  display: "Two Lists",
  order: 1,
    components: {
        draggable
    },
  data () {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: [],
      editable: true,
      isDragging: true,
      delayedDragging: false
    };
  },
  data() {
    return {
        lists: [
            {
                list: [
                    { name: "John", id: 1 },
                    { name: "Joao", id: 2 },
                    { name: "Jean", id: 3 },
                    { name: "Gerard", id: 4 }
                ]
            },
            {
                list: [
                    { name: "John", id: 1 },
                    { name: "Joao", id: 2 },
                    { name: "Jean", id: 3 },
                    { name: "Gerard", id: 4 }
                ]
            }
        ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
}
</script>

<style scoped>
.boards{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}

.board{
    display: inline-block;
    width: 235px;
    height: 850px;
    min-height: 100%;
    margin: 10px;
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
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
