<template>
  <BlockInLayout :title="pageText.bill_config.title">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of billValueCardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockInLayout>
  <BlockInLayout :title="pageText.tag_config.title">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of tagValueCardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockInLayout>
  <BlockInLayout :title="pageText.form_config.title">
    <CardItem
      :item="formValueCardItem"
      class="dark:bg-gray-08 bg-gray-03 mb-6"
    />
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of formValueCardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockInLayout>
  <BlockInLayout :title="pageText.organize_config.title">
    <CardItem
      :item="organizeValueCardItem"
      class="dark:bg-gray-08 bg-gray-03 mb-6"
    />
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of organizeValueCardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockInLayout>
</template>

<script>
export default {
  name: 'AllInOneTableConifg',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { BlockInLayout, CardItem } from '@/views/components'

const pageText = {
  bill_config: {
    title: '职能业务台账配置',
    theme_type: {
      title: '主题类型配置',
      descriptions:
        '主数据配置：对主数据进行配置- 民政类数据配置：对民政类数据进行配置- 党员类数据配置：对党员类数据进行配置- 退役军人类数据配置：对退役军人类数据进行配置- 其他职能业务类型数据配置：对其他职能业务类型数据进行配置',
    },
    theme_field: {
      title: '主题类型下的字段配置',
      descriptions:
        '字段名称：可配置每种主体类型下的字段名称- 字段类型：配置每种主题类型下的字段类型，例如单选、单行文本、日期等',
    },
    authority: {
      title: '权限配置',
      descriptions:
        '查看权限：配置用户仅查看数据的权限- 编辑权限：配置用户可编辑数据的权限',
    },
    field_allow: {
      title: '字段权属配置',
      descriptions: '配置字段权属，当数据重复时根据字段权属选择数据的归属权',
    },
  },
  tag_config: {
    title: '标签配置&管理',
    group: {
      title: '成员标签',
      descriptions:
        '新增标签分组：新增成员标签分组，可在标签分组下建立标签- 编辑标签分组：编辑成员标签分组名称- 删除标签分组：删除成员标签分组包括其下建立的标签- 新增标签：在成员标签分组下建立标签- 查看标签：查看带有该标签成员数量及成员信息- 移动标签：把该标签移动到其他成员标签分组下- 修改标签：修改标签名称- 删除标签：删除该标签',
    },
    message: {
      title: '消息标签',
      descriptions:
        '新增标签分组：新增消息标签分组，可在标签分组下建立标签- 编辑标签分组：编辑消息标签分组名称- 删除标签分组：删除消息标签分组包括其下建立的标签- 新增标签：在消息标签分组下建立标签- 查看标签：查看带有该消息标签消息类型、消息名称及消息详情- 移动标签：把该标签移动到其他消息标签分组下- 修改标签：修改标签名称- 删除标签：删除该标签',
    },
  },
  form_config: {
    title: '表单配置',
    new_form: {
      title: '编辑新表单',
      descriptions:
        '单行文本：设置单行文本字段，实现用户填写该字段时输入单行文本- 多行文本：设置多行文本字段，实现用户填写该字段时输入多行文本- 数字：设置数字文本字段，实现用户填写该字段时只能输入数字文本- 身份证：设置身份证号码文本字段，实现用户填写该字段时输入身份证号码并校验对错- 手机号码：设置手机号码文本字段，实现用户填写该字段时输入手机号码并校验对错- 单选：设置单选字段，编辑选项（包括其他）及选项数量，实现用户填写该字段可根据选项进行单项选择或填写一个其他自定义选项- 多选：设置多选字段，编辑选项（包括其他）、选项数量及选择规则，实现用户填写该字段可根据选项及规则多项选择或填写自定义选项- 日期选择：设置日期字段，实现用户填写该字段时选择日期（年月日）- 时间选择：设置时间字段，实现用户填写该字段时选择时间（时分）- 日期和时间选择：设置日期时间字段，实现用户填写该字段时选择日期时间（年月日时分）- 级联选择：设置级联选择字段，引用级联选择管理建立的级联选择，实现用户填写该字段时根据设置规则进行分层选择。- 组织选择：设置组织选择字段，实现用户填写该字段时选择自己所属组织- 成员选择：设置成员选择字段，实现用户填写该字段时选择自己管辖组织下成员- 计算字段：设置根据表单其他字段值，计算出自定义公式值字段- 星级评分：设置星级评分字段，实现用户填写该字段时进行星级评分- 文件上传：设置文件上传字段，实现用户填写该字段时可从本地常规文件（包括excel、word等）、手机照片图库（图片或视频）或调用手机摄像头拍照片或录像进行上传- 地理定位：设置地理定位字段，限制定位范围，实现用户填写该字段时实时定位用户所在地理位置并显示。如果超出设定范围则无法提交- 明细清单：设置明细清单字段，在该字段里再添加明细字段进行任意组合（可设置除明细清单字段所有其他字段），实现用户填写该字段时，用户可根据实际填写需求，以整个明细字段组作为单位增加或减少进行填写（至少保留一组明细字段）- 表单章节：在表单填写页面插入章节字段，章节可以文字图片形式展示给用户，无需用户填写- 添加填写页面附件：表单创建者或协作者可上传附件，用户填写表单查看正文时，可下载该附件- 分页填写：表单字段过多时，管理员可根据需求设置不同字段以分页形式展示，用户根据设置规则分页填写该表单- 草稿箱：支持用户将当前表单的编辑操作，保存放入草稿箱，并可在草稿箱中打开并重新编辑- 预览：管理员可预览当前编辑表单填写效果- 表单正文：编辑表单的说明性信息，表单正文信息支持富文本编辑器- 表单标题：编辑表单的标题，可在搜索表单时快速搜索',
    },
    push: {
      title: '接收推送',
      descriptions:
        '接收范围：设置该表单接收组织范围或个人，并且还可设置该组织下拥有特定用户标签成员接收该表单- 推送：选择推送包管理已建好的推送包和开始时间进行相关推送',
    },
    more_config: {
      title: '更多设置',
      descriptions:
        '发布名义：发布名义提供个人名义发布和组织名义发布，用户可根据实际需求来设置发布名义。组织名义发布需在设置接收组织后，选择以组织名片来进行发布- 消息标签：对该表单打上已建立消息标签进行归类- 用户填写：对该表单用户填写规则进行设置- 填写完成：设置用户填写表单成功后提示文案，跳转地址- 评论设置：开启评论，设置评论规则- 红包：新建空间时功能选择红包功能并且对接商户平台红包功能，管理员可开启红包，开启后可设置红包金额、数量、祝福语、商户名称、活动名称、过期时间相关信息。用户查看该消息后可得微信红包- 数据映射：开启后，会把该表单数据自动映射到数据库里，映射库的数据可进行二次开发',
    },
  },
  organize_config: {
    title: '组织配置',
    overview: {
      title: '组织概览',
      descriptions:
        '搜索组织或成员：通过组织名称或成员名称模糊搜索，搜索后展示该组织或成员信息。- 新建成员：新建成员（包括必填信息姓名和识别码，其他信息导入别名、手机号码、成员标签和用户自定义属性字段）。- 导入成员：下载导入模板，填充数据进模板上传后可批量导入成员（新建成员或更新成员）。- 导出全部成员：点击后生成导出该空间后台所有成员信息任务，可在导出列表查看导出任务状态及下载。- 导出全部组织：点击后生成导出该空间后台所有组织信息任务，可在导出列表查看导出任务状态及下载。- 批量添加标签：多选成员批量赋予成员标签属性。- 创建顶级组织：新建顶级组织（包括组织名称、成员加入策略、组织简介、组织自定义字段）。- 创建组织自定义字段：创建组织自定义字段，让组织附带属性字段。',
    },
    view: {
      title: '查看组织',
      descriptions:
        '组织成员：移除和添加该组织成员，可查看和编辑该组织成员信息。- 申请列表：如果建立组织时成员加入策略选择审核后加入，可查看所有申请加入该组织列表，并可进行同意或拒绝操作。- 组织信息：编辑查看组织简介、组织创建者、成功加入策略、加入组织二维码、加入组织链接、组织总人数、组织自定义字段信息。- 组织管理员：新增或删除该组织管理员。- 组织名片：新增、编辑和删除组织名片（包括组织名义、图片）。',
    },
    edit: {
      title: '编辑组织',
      descriptions:
        '修改组织名称：对组织名称进行编辑修改。- 新增下级组织：在该组织下建立下级组织。- 移动组织：将该组织移动到某个组织下作为下级组织，或将下级组织直接变为顶级组织。- 删除组织：删除该组织。',
    },
  },
}

const billValueCardItems = [
  'theme_type',
  'theme_field',
  'authority',
  'field_allow',
].map(key => ({
  title: get(pageText, `bill_config.${key}.title`),
  desc: get(pageText, `bill_config.${key}.descriptions`),
}))

const tagValueCardItems = ['group', 'message'].map(key => ({
  title: get(pageText, `tag_config.${key}.title`),
  desc: get(pageText, `tag_config.${key}.descriptions`),
}))

const formValueCardItem = {
  title: get(pageText, 'form_config.new_form.title'),
  desc: get(pageText, 'form_config.new_form.descriptions'),
}
const formValueCardItems = ['push', 'more_config'].map(key => ({
  title: get(pageText, `form_config.${key}.title`),
  desc: get(pageText, `form_config.${key}.descriptions`),
}))

const organizeValueCardItem = {
  title: get(pageText, 'organize_config.overview.title'),
  desc: get(pageText, 'organize_config.overview.descriptions'),
}
const organizeValueCardItems = ['view', 'edit'].map(key => ({
  title: get(pageText, `organize_config.${key}.title`),
  desc: get(pageText, `organize_config.${key}.descriptions`),
}))
</script>
