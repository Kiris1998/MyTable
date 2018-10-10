<template>
  <el-dialog
      title="查询信息"
      :visible = "isVisiable"
      width="20%"
      :before-close="doClose">
      <el-form :model = "form">
        <el-form-item label="Name">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="doClose">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
  </el-dialog>
</template>

<script>
import axios from 'axios'
import bus from '../bus.js'
export default {
  name: "SearchDialog",
  props: ['isVisiable'],
  data () {
    return {
      form: {
        username: null
      }
    }
  },
  methods: {
    doClose: function () {
      this.$emit('closeWindowS',false)
    },
    onSubmit: function () {
      this.doClose()
      axios.post('http://localhost:8080/api/searchInfo',{
        username: this.form.username
      }).then((res) => {
        this.form.username = null
        bus.$emit('changeTable',res.data.res)
      })
    }
  }
}
</script>

<style>

</style>
