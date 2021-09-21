<template>
 <h1>Hello App!</h1>
 <router-view />
</template> 
<script setup lang="ts">

</script>



<!-- 
<template>
  <component :is="layout_name" />
</template>

<script lang="ts">
// import "_LESS_/reset.less";
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from "vue-router";
import layoutDefault from './layout/default.vue';
import layoutAdmin from './layout/admin.vue';

export default defineComponent({
  name: 'App',
  components: { layoutDefault, layoutAdmin },
  setup() {
    const route = useRoute();
    const layout_name = ref(route.meta.layout);

    watch(() => route.meta, meta => {
      layout_name.value = `layout-${meta.layout}`;
    });

    return {
      layout_name
    };
  }
});
</script> -->
