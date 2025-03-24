<template>
  <div>
    <v-text-field-money
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: 'R$',
        readonly: false,
        disabled: disabled,
        outlined: false,
        clearable: true,
        placeholder: ' ',
      }"
      v-bind:options="{
        locale: 'pt-BR',
        length: 11,
        precision: 2,
        empty: null,
      }"
      ref="ref"
    />
    v-model:
    {{
      value !== null && value !== ""
        ? value
        : value === null
        ? "null"
        : value === ""
        ? "''"
        : ""
    }}
    <v-btn v-on:click="focusOnInput">Focus</v-btn>
    <v-btn v-on:click="disabled = !disabled">{{ disabled ? "Enabled" : "Disabled" }}</v-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Money from "@/components/Decimal.vue";

export default defineComponent({
  components: {
    "v-text-field-money": Money,
  },

  setup() {
    const ref = ref(null);

    const focusOnInput = () => {
      ref.value.$el.querySelector('input').focus();
    };

    return { ref, focusOnInput };
  },

  data: () => ({
    value: 123456789.00, // 1.23 or "1.23" or "" or null
    label: "Money",
    disabled: false,
  }),
});
</script>
