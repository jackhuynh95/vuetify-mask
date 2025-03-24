<template>
  <div>
    <v-text-field
      :modelValue="modelValue"
      v-bind="properties"
      v-bind:label="label"
      v-bind:placeholder="placeholder"
      v-on:blur="$emit('blur')"
      v-on:change="$emit('change')"
      v-on:click="$emit('click')"
      v-on:focus="$emit('focus')"
      v-on:keydown="$emit('keydown')"
      v-on:mousedown="$emit('mousedown')"
      v-on:mouseup="$emit('mouseup')"
      v-maska="{
        mask: props.options.outputMask,
        tokens: {
          '#': { pattern: /[0-9]/, transform: (i) => i.toString().padStart(1, '0') },
          '.': { pattern: /[.]/ },
        },
      }"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
      <template v-slot:append>
        <span v-if="modelValue && modelValue !== ''" class="v-maska__suffix">%</span>
      </template>
    </v-text-field>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

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
      locale: 'pt-BR',
      length: 11,
      precision: 2,
      empty: null,
    }),
  },
});

const emit = defineEmits(['blur', 'change', 'click', 'focus', 'keydown', 'mousedown', 'mouseup', 'update:modelValue']);
</script>