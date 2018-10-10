<template>
  <el-table
      :data = "tableData"
      stripe
      border>
        <el-table-column
          prop = "username"
          label = "Name"
          width = "100px"
          align="center">
        </el-table-column>
        <el-table-column
          prop = "age"
          label = "Age"
          width = "100px"
          align="center">
        </el-table-column>
        <el-table-column
          label = "Behavior"
          width = "200px"
          align="center">
          <template slot-scope="scope">
            <el-button type="danger" circle icon="el-icon-delete" @click="deleteInfo(scope.row)"></el-button>
            <el-button type="info" circle icon="el-icon-edit" @click="editInfo(scope.row)"></el-button>
          </template>
        </el-table-column>
    </el-table>
</template>

<script>
import axios from 'axios'
import bus from '../bus.js'
export default {
  name: 'MyTable',
  data () {
    return {
      tableData: []
    }
  },
  created: function () {
    axios.get('http://localhost:8080/api/userInfo')
      .then((res) => {
        this.tableData = res.data.res
      })
  },
  mounted: function () {
    bus.$on('changeTable',(data) => {
      this.tableData = data
    })
  },
  methods: {
    deleteInfo: function (info) {
      axios.post('http://localhost:8080/api/deleteInfo',{
        _id: info._id
      }).then(() => {
        this.form.username = null
        this.form.age = null
        axios.get('http://localhost:8080/api/userInfo')
        .then((res) => {
          bus.$emit('changeTable',res.data.res)
        })
      })
    },
    editInfo: function (info) {
      this.$emit('openEdit')
      bus.$emit('editData',info._id)
    }
  }
}
</script>

<style scoped>

</style>
