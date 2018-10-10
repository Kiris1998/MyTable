<template>
  <el-dialog
      title="修改信息"
      :visible = "isVisiable"
      width="20%"
      :before-close="doClose">
      <el-form :model = "form">
        <el-form-item label="Name">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Age">
          <el-input v-model = "form.age"></el-input>
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
  name: "EditDialog",
  props: ['isVisiable'],
  data () {
    return {
      form: {
        _id: null,
        username: null,
        age: null
      }
    }
  },
  mounted: function () {
    bus.$on('editData',(data) => {
      this._id = data
    })
  },
  methods: {
    doClose: function () {
      this.$emit('closeWindowE',false)
    },
    onSubmit: function () {
      this.doClose()
      axios.post('http://localhost:8080/api/editInfo',{
        _id: this._id,
        username: this.form.username,
        age: this.form.age
      }).then(() => {
        this.form.username = null
        this.form.age = null
        axios.get('http://localhost:8080/api/userInfo')
        .then((res) => {
          bus.$emit('changeTable',res.data.res)
        })
      })
    }
  }
}
</script>

<style>

</style>
