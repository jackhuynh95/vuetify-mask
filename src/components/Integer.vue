<template>
  <div>
    <v-text-field
      :modelValue="modelValue"
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
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
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

const emit = defineEmits(['focus', 'blur', 'change', 'update:modelValue']);
</script>