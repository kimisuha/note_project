<template>
  <div v-if="contact" class="edit-form">
    <h4>hieu chinh lien he</h4>

    <contact-form
      :contact="contact"
      @contact-submit="updateContact"
      @contact-delete="deleteContact"
    />
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>lien he ko tim thay!</p>
  </div>
</template>
<script>
import contactService from "../service/contactService";
import contactForm from "../components/contactForm";
export default {
  name: contactEdit,
  components: { contactForm },
  data() {
    return {
      contact: null,
      message: " ",
    };
  },
  methods: {
    async getContact(id) {
      const [err, response] = await this.handle(contactService.get(id));

      if (err) console.log(err);
      else {
        this.contact = response.data;
        console.log(response.data);
      }
    },

    async updateContact(data) {
      const [err, response] = await this.handle(
        contactService.update(this.contact.id, data)
      );

      if (err) console.log(err);
      else {
        console.log(response.data);
        this.message("lien he duoc cap nhat");
      }
    },

    async deleteContact() {
      const [err, response] = await this.handle(
        contactService.delete(this.contact.id)
      );

      if (err) console.log(err);
      else {
        console.log(response.data);
        this.$route.push({ name: "contactBook" });
      }
    },
  },
  mounted() {
    this.message("");
    this.getContact(this.$route.params.id);
  },
};
</script>
<style>
    .edit-form{
        max-width: 400px;
        margin: auto;
    }
</style>