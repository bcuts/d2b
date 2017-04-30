import * as d3 from 'd3';

export default {
  props: {
    data:         { default: () => {} },
    config:       { default: () => () => {} }
  },
  computed: {
    properties () {
      return {
        generator: this.generator,
        data: this.data,
        config: this.config
      };
    }
  },
  destroyed () {
    d3.selectAll('.d2b-tooltip').remove();
  },
  mounted () {
    this.updateDefer();
    window.addEventListener('resize', this.updateDefer);

    this.watcher();
  },
  methods: {
    watcher () {
      const handler = function () {
        unwatch();
        this.update();
        this.watcher();
      };
      const unwatch = this.$watch('properties', handler, {deep: true});
    },
    update (options = {}) {
      const data = this.data;

      this.config(this.generator);

      var el = d3.select(this.$el),
          elTransition = options.skipTransition? el : el.transition().duration(500);

      el.datum(data);

      elTransition.call(this.generator);
    },
    updateNow () {
      var self = this;
      setTimeout(function () {
        self.update({skipTransition: true});
      }, 0);
    },
    updateDefer () {
      setTimeout(this.updateNow, 0);
    }
  }
};
