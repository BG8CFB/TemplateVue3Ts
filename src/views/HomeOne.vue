<template>
  <div class="home">
    <NButton>naive-ui</NButton>
    <NDataTable :columns="columns" :data="data" />
  </div>
</template>

<script lang="ts" setup>
import { NButton, NDataTable } from 'naive-ui';

const columns = [
    {
      title: 'Name',
      key: 'name',
      align: 'center'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
    },
    {
      title: 'Action',
      key: 'actions',
    }
  ];

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];
</script>
