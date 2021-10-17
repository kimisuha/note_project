<template>
  <div class="list row">
    <div class="col-md-10">
      <div class="mb-3 input-group">
        <input
          type="text"
          class="form-control"
          placeholder="input name"
          v-model="nameToSearch"
        />
      </div>

      <div class="input-group-append">
        <button
          class="btn btn-btn-outline-secondary"
          type="button"
          @click="searchName"
        >
          search
        </button>
      </div>
    </div>
  </div>

  <div class="col-md-10">
    <h4>
      danh ba
      <i class="fas fa-address-book"></i>
    </h4>

    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ active: index == activeIndex }"
        v-for="(contact, index) in contacts"
        :key="contact.id"
        @click="setActiveContact(contact, index)"
      >
        {{ contact.name }}
      </li>
    </ul>

    <button class="btn btn-primary btn-sm mt-3" @click="goToAddContact">
      them lien le
    </button>

    <button class="mt-3 ml-2 btn btn-sm btn-danger" @click="removeAllContact">
      xoa tat ca
    </button>
  </div>

  <div class="col-md-6">
    <div v-if="activeContact">
      <contact-detail :contact="activeContact">

      <router-link :to="'/contact' + activeContact.id">
        <span class="badge badge-warning">hieu chinh</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import contactDetail from "../components/contactDetail.vue";
import contactService from "../service/contactService";

export default {
  name: "contactBook",
  components: {
    contactDetail,
  },
  data: {
    return: {
      contacts: [],
      currentIndex: -1,
      currentrContact: null,
      nametoSearch: " ",
    },
  },
  method: {
    setActiveContact(contact, index) {
      this.currentrContact = contact;
      this.currentIndex = contact ? index : -1;
    },
    async retrieveContact() {
      const [error, response] = await this.handle(contactService.getAll());

      if (error) {
        console.log(error);
      } else {
        this.contacts = response.data;
        console.log(response.data);
      }
    },
    refeshList() {
      this.retrieveContact();
      this.currentIndex = -1;
      this.currentrContact = null;
    },
    removeAllContact() {
      const [error, response] = await this.handle(contactService.deleteAll());

      if (error) {
        console.log(error);
      } else {
        console.log(response.data);
        this.refeshList();
      }
    },
    goToAddContact() {
      this.$router.push("/add");
    },
    async searchName() {
      const [error, response] = await this.handle(
        contactService.findByName(this.nametoSearch)
      );

      if (error) {
        console.log(error);
      } else {
        this.contacts = response.data;
        this.setActiveContact(null);
        console.log(response.data);
      }
    },
    mounted() {
      this.retrieveContact();
    },
  },
};
</script>

<style>
.list {
  text-align: center;
  max-width: 750px;
  margin: auto;
}
</style>
