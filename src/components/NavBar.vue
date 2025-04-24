<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-trending-up" title="Trending" value="trending"></v-list-item>
      <v-list-item prepend-icon="mdi-crown" title="VIPs" value="vips"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Favourites" value="favourites"></v-list-item>
      <v-list-item prepend-icon="mdi-history" title="History" value="history"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-subheader class="text-subtitle-2 font-weight-bold text-center">Categories</v-subheader>
      <v-list-item prepend-icon="mdi-lock" title="Private" value="private"></v-list-item>
      <v-list-item prepend-icon="mdi-gender-female" title="Ladies" value="ladies"></v-list-item>
      <v-list-item prepend-icon="mdi-gender-male" title="Men" value="men"></v-list-item>
    </v-list>
    
  </v-navigation-drawer>
</template>