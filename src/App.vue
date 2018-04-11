<template>
  <v-app>
    <!--导航条-->
    <v-toolbar app dark color="indigo">
      <v-toolbar-title>Mark professor</v-toolbar-title>
      <v-toolbar-title class="hidden-xs-only">website</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y attach left width="32px">
          <v-btn slot="activator" flat style="min-width: 32px">
            <img src="./assets/usa.png" alt="flag" width="32px">
          </v-btn>
          <v-list light>
            <v-list-tile avatar @click="" >
              <v-list-tile-avatar class="avatar--tile">
                <img src="./assets/china.png" alt="flag" width="24px">
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-menu offset-y attach>
          <v-btn color="primary" dark slot="activator">courseware</v-btn>
          <v-list light>
            <v-list-tile v-for="item in items" :key="item.title" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <!--内容-->
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <!--页脚-->
    <v-footer app color="indigo" dark>
      &copy; {{ (new Date()).getFullYear() }} Mark Robnett
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Click Me 1' },
      { title: 'Click Me 12' },
      { title: 'Click Me 4' },
      { title: 'Click Me 2' }
    ]
  })
}
</script>

<style>
</style>
