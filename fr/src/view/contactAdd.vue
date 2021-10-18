<template>
  <contact-form :contact="contact" @contactSubmit="addContact" />

  <p>{{ message }}</p>
</template>
<script>
import contactForm from "../components/contactForm.vue";
import contactService from "../service/contactService";
export default {
  name: "contactAdd",
  components: { contactForm },
  data() {
    return {
      contact: null,
      message: "",
    };
  },
  methods: {
    async addContact(data) {
      const [err, response] = await this.handle(contactService.create(data));

      if (err) console.log(err);
      else {
        console.log(response.data);
        this.message(response.err);
      }
    },
  },
  mounted() {
    this.message("");
  },
};
</script>
<style>
</style>