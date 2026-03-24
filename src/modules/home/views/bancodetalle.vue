<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />

    <!-- CONTENT -->
    <div class="drawer-content flex flex-col items-center justify-center">
      <label for="my-drawer-1" class="btn drawer-button lg:hidden"> OpenDrawer </label>
      <div class="card"></div>
    </div>

    <!-- SIDEBAR -->
    <div class="drawer-side">
      <label for="my-drawer-1" class="drawer-overlay"></label>

      <ul class="menu bg-base-100 lg:w-64">
        <li v-for="i in 10" :key="i">
          <a>Item {{ i }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
