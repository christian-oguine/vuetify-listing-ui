<template>
  <v-app-bar color="blue-darken-3" flat density="comfortable">
    <!-- Left: Nav icon & Logo -->
    <v-app-bar-nav-icon class="text-white" />

    <v-img
      src="@/assets/logo.svg"
      alt="Logo"
      height="32"
      width="32"
      class="ml-2"
      cover
    />
    <span class="text-white text-h6 font-weight-bold ml-2">GENERIC LISTING</span>

    <!-- Live Count -->
    <v-chip color="green-accent-4" class="ml-4" label size="small">● 8143 Users Online</v-chip>

    <!-- Top Models Button -->
    <v-btn text class="text-white font-weight-bold ml-4" prepend-icon="mdi-account-star">
      Top Listings
    </v-btn>

    <!-- Middle: Search -->
    <v-spacer />

    <v-text-field
  hide-details
  single-line
  density="comfortable"
  variant="solo-filled"
  placeholder="Search listings, categories, locations"
  prepend-inner-icon="mdi-magnify"
  append-inner-icon="mdi-tune"
  style="max-width: 400px; margin-top: 1rem; margin-bottom: 1rem; border-radius: 1rem;"
/>



    <!-- Right: Icons and Actions -->
    <v-btn icon class="text-white">
      <v-icon>mdi-message-text</v-icon>
    </v-btn>
    <v-btn icon class="text-white">
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn color="lime-darken-2" class="ml-2 px-4" rounded>
      Add Listing
    </v-btn>

    <!-- User Menu -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" class="ml-2">
          <v-avatar color="grey-darken-3">
            <span class="text-white font-weight-bold">R</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item title="Profile" />
        <v-list-item title="Logout" />
      </v-list>
    </v-menu>

    <!-- Language Switch -->
    <v-select
      hide-details
      density="compact"
      variant="plain"
      :items="['EN', 'NL', 'FR']"
      class="ml-4"
      style="max-width: 100px"
      label="Language"
      prepend-inner-icon="mdi-earth"
    />
  </v-app-bar>
</template>

<script setup>
// No extra logic needed here for now
</script>

<style scoped>


</style>
