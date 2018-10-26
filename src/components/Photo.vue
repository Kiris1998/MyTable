<template>
  <el-upload
  multiple
  :limit="3"
  :file-list="fileList"
  :on-exceed="handleExceed"
  action="http://localhost:8080/api/uploadFile"
  :on-success="handleSuccess"
  >
    <el-button>点击上传</el-button>
  </el-upload>    
</template>

<script>
  export default {
    name: 'Photo',
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      handleExceed: function() {
        this.$message.warning(`Over the limitation!`)
      },
      handleSuccess: function(res) {
        console.log(res.res)
      }
    }
  }
</script>

<style>

</style>
