<script>
import { h, onMounted, ref } from "vue";
import elementResizeDetectorMaker from 'element-resize-detector'
const erd = elementResizeDetectorMaker({ strategy: 'scroll' })

export default {
  name: "WithDimensions",
  setup(){
      let width = ref(null),
      height = ref(null)

    onMounted(() => {
        erd.listenTo(this.$el, function(el) {
          this.width = el.offsetWidth;
          this.height = el.offsetHeight;
        });
    })

    return h('',{
        width: this.width,
        height: this.height,
      })

  },
}
</script>

<style scoped>

</style>