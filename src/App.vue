<template>
  <v-app>
    <!--导航条-->
    <v-toolbar app dark color="indigo">
      <v-toolbar-title>{{ home_title }}</v-toolbar-title>
      <v-toolbar-title class="hidden-xs-only">{{ banner }}</v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-down">{{ banner_extend }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y attach left min-width="32px">
          <v-btn slot="activator" flat>LOCALE</v-btn>
          <v-list light>
            <v-list-tile avatar @click="v_locale = 'en-us'" >
              <v-list-tile-avatar class="avatar--tile">
                <img src="./assets/usa.png" alt="flag" width="32px">
              </v-list-tile-avatar>
            </v-list-tile>
            <v-list-tile avatar @click="v_locale = 'zh-cn'" >
              <v-list-tile-avatar class="avatar--tile">
                <img src="./assets/china.png" alt="flag" width="32px">
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-menu offset-y attach>
          <v-btn color="primary" dark slot="activator">{{ course_nav }}</v-btn>
          <v-list light>
            <v-list-tile v-for="item in items" :key="item" @click="router.push('#')">
              <v-list-tile-title>{{ item }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <!--内容-->
    <v-content>
      <v-container fluid>
        <v-layout justify-center>
          <v-flex text-xs-center>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!--页脚-->
    <v-footer app color="indigo" dark>
      &copy; {{ (new Date()).getFullYear() }} Mark Robnett
    </v-footer>
  </v-app>
</template>

<script>
import i18n from './locale'
import { listCategory } from './api/course'
export default {
  name: 'App',
  data: () => ({
    v_locale: i18n.locale,
    locales: i18n.locales,
    items: []
  }),
  computed: {
    ...i18n.map(['home_title', 'banner', 'banner_extend', 'course_nav'])
  },
  mounted () {
    listCategory().then(resolve => {
      this.items = resolve
    })
  }
}
</script>

<style>
</style>
