<template>
<div class="rfooter">
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
            <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
            <mu-bottom-nav-item value="books" title="Books" icon="books"/>
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
        </mu-bottom-nav>
    </mu-paper>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
    .rfooter{
      position:fixed;
      bottom:0;
      left: 0;
      width: 100%;
    }
</style>