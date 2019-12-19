<template>
  <div>
    <a :href="item.url">
      {{ item.title }}
    </a>
    {{ item.by }}
    {{ item.score }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
