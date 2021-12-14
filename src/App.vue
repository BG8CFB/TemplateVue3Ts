<template>
  <n-config-provider :theme="createTheme([inputDark, datePickerDark])" :locale="zhCN" :date-locale="dateZhCN">
    <router-view/>
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
// theme
import { createTheme, inputDark, datePickerDark } from 'naive-ui';
// locale & dateLocale
import { zhCN, dateZhCN } from 'naive-ui';

</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
