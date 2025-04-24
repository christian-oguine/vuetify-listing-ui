<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="item-card">
            <v-img :src="item.image" height="200px" class="item-image"></v-img>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>
              <div>{{ item.datePosted }}</div>
              <div>{{ item.location }}</div>
              <div v-if="item.age">Age: {{ item.age }}</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="d-flex justify-center mt-4"
      ></v-progress-circular>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([]);
const loading = ref(false);

const loadItems = () => {
  loading.value = true;
  setTimeout(() => {
    for (let i = 0; i < 12; i++) {
      items.value.push({
        id: items.value.length + 1,
        image: `https://picsum.photos/300/200?random=${items.value.length + 1}`,
        name: `Item ${items.value.length + 1}`,
        datePosted: new Date().toLocaleDateString(),
        location: "Random City, Country",
        age: Math.floor(Math.random() * 50) + 18,
      });
    }
    loading.value = false;
  }, 1000);
};

onMounted(() => {
  loadItems();
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    !loading.value
  ) {
    loadItems();
  }
};
</script>

<style scoped>
.item-card {
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.item-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.item-image {
  object-fit: cover;
}
</style>
