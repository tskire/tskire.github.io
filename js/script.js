new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
	{
          name: "语音导览",
          artist: "印象巩义·城市客厅",
          cover: "img/1.png",
          source: "audio/01huanying.mp3",
        },
	{
          name: "门厅",
          artist: "印象巩义·城市客厅",
          cover: "img/2.jpg",
          source: "audio/02mt.mp3",
        },
	{
          name: "序厅",
          artist: "印象巩义·城市客厅",
          cover: "img/3.jpg",
          source: "audio/03xt.mp3",
        },
	{
          name: "时光长廊",
          artist: "印象巩义·城市客厅",
          cover: "img/4.jpg",
          source: "audio/04sg.mp3",
        },
	{
          name: "建制沿革",
          artist: "印象巩义·城市客厅",
          cover: "img/5.jpg",
          source: "audio/05jzyg.mp3",
        },
	{
          name: "文明肇始",
          artist: "印象巩义·城市客厅",
          cover: "img/6.jpg",
          source: "audio/06wmzs.mp3",
        },
	{
          name: "古城记忆",
          artist: "印象巩义·城市客厅",
          cover: "img/7.jpg",
          source: "audio/07gcjy.mp3",
        },
	{
          name: "古邑遗珍",
          artist: "印象巩义·城市客厅",
          cover: "img/8.jpg",
          source: "audio/08gyyz.mp3",
        },
	{
          name: "庄园建筑",
          artist: "印象巩义·城市客厅",
          cover: "img/9.jpg",
          source: "audio/09zyjz.mp3",
        },
	{
          name: "传统村落及民居",
          artist: "印象巩义·城市客厅",
          cover: "img/10.jpg",
          source: "audio/10ctcl.mp3",
        },
	{
          name: "工业沃土",
          artist: "印象巩义·城市客厅",
          cover: "img/11.jpg",
          source: "audio/11gy.mp3",
        },
	{
          name: "英才辈出",
          artist: "印象巩义·城市客厅",
          cover: "img/12.jpg",
          source: "audio/12yc.mp3",
        },
	{
          name: "城市变奏曲",
          artist: "印象巩义·城市客厅",
          cover: "img/13.jpg",
          source: "audio/13csbzq.mp3",
        },
	{
          name: "奋进大事记",
          artist: "印象巩义·城市客厅",
          cover: "img/14.jpg",
          source: "audio/14fjdsj.mp3",
        },
	{
          name: "数读巩义",
          artist: "印象巩义·城市客厅",
          cover: "img/15.jpg",
          source: "audio/15sdgy.mp3",
        },
	{
          name: "刷新城市",
          artist: "印象巩义·城市客厅",
          cover: "img/16.jpg",
          source: "audio/16sxcs.mp3",
        },
	{
          name: "巩义精神",
          artist: "印象巩义·城市客厅",
          cover: "img/17.jpg",
          source: "audio/17gyjs.mp3",
        },
	{
          name: "历版总规",
          artist: "印象巩义·城市客厅",
          cover: "img/18.jpg",
          source: "audio/18csyj.mp3",
        },
	{
          name: "战略定位",
          artist: "印象巩义·城市客厅",
          cover: "img/19.jpg",
          source: "audio/19zlgh.mp3",
        },
	{
          name: "河洛明珠 生态之城",
          artist: "印象巩义·城市客厅",
          cover: "img/20.jpg",
          source: "audio/20st.mp3",
        },
	{
          name: "市级国土空间规划",
          artist: "印象巩义·城市客厅",
          cover: "img/21.jpg",
          source: "audio/21sjgk.mp3",
        },
	{
          name: "中心城区规划",
          artist: "印象巩义·城市客厅",
          cover: "img/22.jpg",
          source: "audio/22zxcq.mp3",
        },
	{
          name: "新城区控制规划",
          artist: "印象巩义·城市客厅",
          cover: "img/23.jpg",
          source: "audio/23xcq.mp3",
        },
	{
          name: "综合交通规划",
          artist: "印象巩义·城市客厅",
          cover: "img/24.jpg",
          source: "audio/24jt.mp3",
        },
	{
          name: "专项规划",
          artist: "印象巩义·城市客厅",
          cover: "img/25.jpg",
          source: "audio/25zx.mp3",
        },
	{
          name: "全域地形壁挂模型",
          artist: "印象巩义·城市客厅",
          cover: "img/26.jpg",
          source: "audio/26qybg.mp3",
        },
	{
          name: "总体规划模型",
          artist: "印象巩义·城市客厅",
          cover: "img/27.jpg",
          source: "audio/27zgsp.mp3",
        },
	{
          name: "镇级国土空间规划",
          artist: "印象巩义·城市客厅",
          cover: "img/28.jpg",
          source: "audio/28zjgk.mp3",
        },
	{
          name: "乡村振兴",
          artist: "印象巩义·城市客厅",
          cover: "img/29.jpg",
          source: "audio/29xczx.mp3",
        },
	{
          name: "城市设计",
          artist: "印象巩义·城市客厅",
          cover: "img/30.jpg",
          source: "audio/30cssj.mp3",
        },
	{
          name: "产业发展规划",
          artist: "印象巩义·城市客厅",
          cover: "img/31.jpg",
          source: "audio/31cyfz.mp3",
        },
	{
          name: "旅游发展规划",
          artist: "印象巩义·城市客厅",
          cover: "img/32.jpg",
          source: "audio/32lyfz.mp3",
        },
	{
          name: "色彩专项规划",
          artist: "印象巩义·城市客厅",
          cover: "img/33.jpg",
          source: "audio/33sczx.mp3",
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});