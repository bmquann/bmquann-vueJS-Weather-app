<template>
    <div :class="$style.sidebar" />
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'sidebar',
    mounted () {
        TweenMax.set(this.$el, {
            x: this.$el.offsetWidth
        })
    },
    computed: {
        open () {
            return this.$store.state.ui.sidebarOpen
        }
    },
    watch: {
        open: function (open) {
            const dX = open ? 0 : this.$el.offsetWidth
            TweenMax.to(this.$el, 0.6, {
                x: dX,
                ease: Power4.easeOut
            })
        }
    }
}
</script>

<style module>
.sidebar {
  z-index: 20;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  min-height: 100vh;
  max-width: 90vw;
  background-color: var(--accent-color);
}
</style>