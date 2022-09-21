<template>
  <ul>
    <li :class="{ active: modelValue === 'sehrgut' }">
      <button type="button" @click="activate('sehrgut')">Sehr gut</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">
        Durchschnittlich
      </button>
    </li>
    <li :class="{ active: modelValue === 'schlecht' }">
      <button type="button" @click="activate('schlecht')">Schlecht</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  background: cornflowerblue;
}

.active button {
  color: white;
}
ul {
  list-style: none;
  margin: 8px 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  background: transparent;
}
</style>
