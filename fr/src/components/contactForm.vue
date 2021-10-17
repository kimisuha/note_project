<template>
  <form
    @submit="$emit('contact-submit', contactLocal)"
    :validation-Schema="Schema"
  >
    <div class="form-group">
      <label for="name">ten</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="contactLocal.name"
      />
      <ErrorMessage class="error-feedback" name="name" />
    </div>

    <div class="form-group">
      <label for="email">email</label>
      <Field
        name="email"
        class="form-control"
        type="email"
        v-model="contactLocal.email"
      />
      <ErrorMessage class="error-feedback" name="email" />
    </div>

    <div class="form-group">
      <label for="address">dia chi</label>
      <Field
        name="address"
        class="form-control"
        type="text"
        v-model="contactLocal.address"
      />
      <ErrorMessage class="error-feedback" name="address" />
    </div>

    <div class="form-group">
      <label for="phone">dien thoai</label>
      <Field
        name="phone"
        class="form-control"
        type="tel"
        v-model="contactLocal.phone"
      />
      <ErrorMessage class="error-feedback" name="phone" />
    </div>

    <div class="form-group form-check">
      <label for="favorite" class="form-check-label">yeu thich</label>
      <input
        type="checkbox"
        name="favorite"
        class="form-check-input"
        v-model="contactLocal.favorite"
      />
    </div>

    <div class="form-group">
      <button
        class="ml-2 btn btn-danger"
        type="button"
        v-if="contactLocal.id"
        @click="$emit('contact-delete', contactLocal.id)"
      >
        delete
      </button>
    </div>
  </form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "contactForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["contactSubmit", "contactDelete"],
  props: ["contact"],
  data() {
    const Schema = yup.Object().shape({
      name: yup
        .string()
        .require("ten phai co gia tri")
        .min(2, "ten phai co it nhat 2 ky tu")
        .max(50, "ten co toi da 50 ky tu"),
      email: yup
        .string()
        .email("email ko dung")
        .max(50, "email toi da 50 ky tu"),
      address: yup.string().max(100, "dia chi co toi da 100 ky tu"),
      phone: yup
        .string()
        .matches(
          "/^(0|+84)(s|.)?((3[2-9])|(5[689])|(7[06-9])...$/",
          "co ky tu ko hop le"
        ),
    });
    return {
        contactLocal = this.contact,
        Schema
    };
  },
};
</script>
<style>
</style>