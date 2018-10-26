<template>
  <div id="app">
    <h1>My Table</h1>
    <my-table @openEdit="handleEdit()"></my-table>
    <div class="btns">
      <el-button type="primary" icon="el-icon-plus" circle @click="formVisiable = true"></el-button>
      <el-button type="success" icon="el-icon-search" circle @click="formVisiableS = true"></el-button>
    </div>
    <add-dialog :isVisiable = "formVisiable" @closeWindow = "closeDialog"></add-dialog>
    <search-dialog :isVisiable = "formVisiableS" @closeWindowS = "closeDialogS"></search-dialog>
    <edit-dialog :isVisiable = "formVisiableE" @closeWindowE = "closeDialogE"></edit-dialog>
    <photo></photo>
  </div>
</template>

<script>
import AddDialog from './components/AddDialog'
import SearchDialog from './components/SearchDialog'
import EditDialog from './components/EditDialog'
import MyTable from './components/MyTable'
import Photo from './components/Photo'
export default {
  name: 'app',
  data() {
    return {
      formVisiable: false,
      formVisiableS: false,
      formVisiableE: false
    }
  },
  components :{
    AddDialog,
    MyTable,
    SearchDialog,
    EditDialog,
    Photo
  },
  methods: {
    closeDialog: function () {
      this.formVisiable = false
    },
    closeDialogS: function () {
      this.formVisiableS = false
    },
    closeDialogE: function () {
      this.formVisiableE = false
    },
    handleEdit: function() {
      this.formVisiableE = true
    }
  }
}
</script>

<style>
h1{
  text-align: center
}
#app{
  width: 402px
}
.btns{
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}
.el-table{
  width: 300
}
.el-button{
  margin: 5px !important
}
</style>
