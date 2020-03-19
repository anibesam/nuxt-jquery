import $ from 'jquery'
export default {
  created() {
    if (process.client) {
      $(document).on('scroll', function() {
        if ($(document).scrollTop() > 86) {
          $('#navbar').addClass('shrink')
        } else {
          $('#navbar').removeClass('shrink')
        }
      })
    }
  }
}
