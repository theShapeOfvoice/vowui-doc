<template>
  <div>
    <div style="min-height: 90vh">
      <ParentLayout> </ParentLayout>
    </div>
    <p style="text-align: center" class="icp-beian-box">
      <a target="blank" style="font-size: 12px; color: #999" href="https://beian.miit.gov.cn"
        >赣ICP备2022001040号-1</a
      >
    </p>
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout'

export default {
  name: 'Layout',
  components: {
    ParentLayout,
  },
}
</script>
