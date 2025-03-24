<template>
  <div>
    <v-text-field
      v-model="value"
      v-bind="properties"
      v-bind:label="label"
      v-bind:placeholder="placeholder"
      v-on:focus="$emit('focus')"
      v-on:blur="$emit('blur')"
      v-on:change="$emit('change')"
      v-maska="{
        mask: options.inputMask,
        tokens: {
          '#': { pattern: /[0-9]/, transform: (i) => i.toString().padStart(1, '0') },
        },
      }"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  value: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: 'Label',
  },
  placeholder: {
    type: String,
    default: '',
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Object,
    default: () => ({
      inputMask: '####',
      outputMask: '####',
      empty: null,
      applyAfter: false,
    }),
  },
});

const emit = defineEmits(['focus', 'blur', 'change']);
</script>