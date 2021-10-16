<template>
    <h4>chi tiet lien he<i class="fas fa-address-card"></i></h4>

    <div class="row">
        <div class="mb-2 col-12">
            <strong>ten: </strong>{{contact.name}} 
        </div>

        <div class="mb-2 col-12">
            <strong>email:  </strong>{{contact.email}}
        </div>

        <div class="mb-2 col-12">
            <strong>dia chi</strong> {{contact.address}}
        </div>

        <div class="mb-2 col-12">
            <strong>dien thoai</strong> {{contact.phone}}
        </div>

        <div class="mb-2 col-12">
            <strong>lien he yeu thich</strong>
            <i v-if="contact.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>

    </div>
</template>

<script>
    export default {
        name: "contactDetail",
        props: ["contact"]
    };
</script>
