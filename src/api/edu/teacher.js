import request from '@/utils/request'

export default {

  // 1 讲师列表(条件查询分页)
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      // teacherQuery 条件对象，后端使用requestBody获取数据'
      // data 表示把data转换成json进行传递到接口里面
      data: teacherQuery
    })
  }

}
