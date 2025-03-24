import Decimal from "./Decimal.vue";
import Integer from "./Integer.vue";
import DateTime from "./DateTime.vue";
import DateTimePicker from "./DateTimePicker.vue";
import SimpleMask from "./SimpleMask.vue";
import Cpf from "./Cpf.vue";
import Cnpj from "./Cnpj.vue";
import Cep from "./Cep.vue";
import FileBase64 from "./FileBase64.vue";
import DotNumber from "./DotNumber.vue";

// Exporting each component with a new name
export const VTextFieldMoney = Decimal;
export const VTextFieldPercent = Decimal; // Consider keeping the same component for money and percent
export const VTextFieldInteger = Integer;
export const VTextFieldDateTime = DateTime;
export const VTextFieldDateTimePicker = DateTimePicker;
export const VTextFieldSimpleMask = SimpleMask;
export const VTextFieldCpf = Cpf;
export const VTextFieldCnpj = Cnpj;
export const VTextFieldCep = Cep;
export const VTextFieldFileBase64 = FileBase64;
export const VTextFieldDotNumber = DotNumber;

// Default export for plugin installation if needed
export default {
  install(app) {
    app.component("v-text-field-money", Decimal);
    app.component("v-text-field-percent", Decimal);
    app.component("v-text-field-integer", Integer);
    app.component("v-text-field-datetime", DateTime);
    app.component("v-text-field-datetimepicker", DateTimePicker);
    app.component("v-text-field-simplemask", SimpleMask);
    app.component("v-text-field-cpf", Cpf);
    app.component("v-text-field-cnpj", Cnpj);
    app.component("v-text-field-cep", Cep);
    app.component("v-text-field-filebase64", FileBase64);
    app.component("v-text-field-dotnumber", DotNumber);
  },
};