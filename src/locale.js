import VI18n from 'vue-simple-i18n'

export default new VI18n({
  base: 'en-us',
  locale: 'en-us',
  locales: {
    'en-us': {
      __name__: 'English',
      home_title: 'Home',
      banner: 'mark professor',
      banner_extend: 'yunnan normal university business school',
      course_nav: 'courseware'
    },
    'zh-cn': {
      __name__: '简体中文',
      home_title: '主页',
      banner: 'mark 教授',
      banner_extend: '云南师范大学商学院',
      course_nav: '课件下载'
    }
  }
})
